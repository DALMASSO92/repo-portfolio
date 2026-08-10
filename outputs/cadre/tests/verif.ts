import assert from "node:assert/strict";
import { simuler } from "../src/lib/calc";
import { diagnostiquer } from "../src/lib/diagnostic";
import { contrat, facture, PARTENARIAT_VIDE } from "../src/lib/documents";
import { construirePdf } from "../src/lib/pdf";
import { REGIMES } from "../src/lib/bareme";

let ok = 0;
const t = (nom: string, fn: () => void) => {
  fn();
  console.log("  ✓", nom);
  ok++;
};

console.log("\nSimulateur");
t("le net est inférieur au brut et positif", () => {
  const r = simuler({ montant: 800, regime: "bnc", versementLiberatoire: false, autresRevenus: 0, parts: 1 });
  assert.ok(r.net < 800 && r.net > 0, `net=${r.net}`);
});
t("les cotisations suivent le taux du régime", () => {
  const r = simuler({ montant: 1000, regime: "bnc", versementLiberatoire: false, autresRevenus: 0, parts: 1 });
  assert.equal(Math.round(r.cotisations), Math.round(1000 * REGIMES.bnc.cotisations));
});
t("un montant nul ne casse rien", () => {
  const r = simuler({ montant: 0, regime: "bnc", versementLiberatoire: false, autresRevenus: 0, parts: 1 });
  assert.equal(r.net, 0);
  assert.equal(r.tauxNet, 0);
});
t("sans autre revenu, l'impôt au barème est nul sur un petit montant", () => {
  const r = simuler({ montant: 800, regime: "bnc", versementLiberatoire: false, autresRevenus: 0, parts: 1 });
  assert.equal(r.impot, 0);
});
t("avec un salaire, le partenariat devient imposable", () => {
  const r = simuler({ montant: 800, regime: "bnc", versementLiberatoire: false, autresRevenus: 25000, parts: 1 });
  assert.ok(r.impot > 0, `impot=${r.impot}`);
});
t("le versement libératoire applique bien son taux", () => {
  const r = simuler({ montant: 1000, regime: "bnc", versementLiberatoire: true, autresRevenus: 50000, parts: 1 });
  assert.equal(Math.round(r.impot), Math.round(1000 * REGIMES.bnc.versementLiberatoire));
});
t("l'abattement plancher s'applique sur les très petits montants", () => {
  const r = simuler({ montant: 100, regime: "bnc", versementLiberatoire: false, autresRevenus: 0, parts: 1 });
  assert.equal(r.revenuImposable, 0);
});

console.log("\nDiagnostic");
t("au-dessus du seuil sans contrat écrit, c'est bloquant", () => {
  const c = diagnostiquer({ montant: 1500, contratEcrit: false, mentionPublicite: true, imagesRetouchees: "non", secteurSensible: false, declare: true });
  assert.ok(c.some((x) => x.gravite === "bloquant" && x.titre.includes("contrat écrit")));
});
t("sous le seuil sans contrat, c'est un point de vigilance et non un blocage", () => {
  const c = diagnostiquer({ montant: 300, contratEcrit: false, mentionPublicite: true, imagesRetouchees: "non", secteurSensible: false, declare: true });
  assert.ok(c.some((x) => x.gravite === "vigilance"));
  assert.ok(!c.some((x) => x.gravite === "bloquant"));
});
t("l'absence de mention publicitaire est bloquante quel que soit le montant", () => {
  const c = diagnostiquer({ montant: 50, contratEcrit: true, mentionPublicite: false, imagesRetouchees: "non", secteurSensible: false, declare: true });
  assert.ok(c.some((x) => x.gravite === "bloquant" && x.titre.includes("publicité")));
});
t("un dossier complet ne remonte aucun blocage", () => {
  const c = diagnostiquer({ montant: 1500, contratEcrit: true, mentionPublicite: true, imagesRetouchees: "oui_signale", secteurSensible: false, declare: true });
  assert.equal(c.filter((x) => x.gravite === "bloquant").length, 0);
});
t("les constats sont triés par gravité décroissante", () => {
  const c = diagnostiquer({ montant: 1500, contratEcrit: false, mentionPublicite: false, imagesRetouchees: "oui_non_signale", secteurSensible: true, declare: false });
  assert.equal(c[0].gravite, "bloquant");
});

console.log("\nDocuments");
t("le contrat contient les mentions attendues", () => {
  const texte = contrat({ ...PARTENARIAT_VIDE, marqueNom: "ACME", creatorNom: "Test" }).flatMap((b) => [b.titre ?? "", ...b.corps]).join("\n");
  for (const attendu of ["ACME", "Publicité", "Collaboration commerciale", "293 B", "Droits sur les contenus", "exploitation"]) {
    assert.ok(texte.includes(attendu), `manque: ${attendu}`);
  }
});
t("les avantages en nature entrent dans la contrepartie totale", () => {
  const texte = contrat({ ...PARTENARIAT_VIDE, remuneration: 800, avantagesNature: "Sac", valeurAvantages: 400 }).flatMap((b) => b.corps).join("\n");
  // Le formatage français sépare les milliers par une espace insécable : on normalise.
  const normalise = texte.replace(/[\u00A0\u202F]/g, " ");
  assert.ok(normalise.includes("Contrepartie totale : 1 200"), "le total 1 200 € doit apparaître");
});
t("la facture porte la mention de franchise de TVA", () => {
  const texte = facture({ ...PARTENARIAT_VIDE, numeroFacture: "2026-007" }).flatMap((b) => b.corps).join("\n");
  assert.ok(texte.includes("TVA non applicable, art. 293 B du CGI"));
  assert.ok(texte.includes("2026-007"));
});

console.log("\nPDF");
t("le contrat produit un PDF valide et paginé", () => {
  const doc = construirePdf(contrat({ ...PARTENARIAT_VIDE, marqueNom: "ACME" }));
  const pages = doc.getNumberOfPages();
  assert.ok(pages >= 1, `pages=${pages}`);
  const buf = Buffer.from(doc.output("arraybuffer") as ArrayBuffer);
  assert.equal(buf.subarray(0, 4).toString(), "%PDF");
  assert.ok(buf.length > 1500, `taille=${buf.length}`);
  console.log(`    (${pages} page(s), ${buf.length} octets)`);
});
t("la facture produit un PDF valide", () => {
  const buf = Buffer.from(construirePdf(facture(PARTENARIAT_VIDE)).output("arraybuffer") as ArrayBuffer);
  assert.equal(buf.subarray(0, 4).toString(), "%PDF");
});

console.log(`\n${ok} vérifications passées.\n`);
