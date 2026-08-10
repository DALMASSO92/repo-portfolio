"use client";

import { useMemo, useState } from "react";
import { contrat, facture, PARTENARIAT_VIDE, type Partenariat } from "@/lib/documents";
import { genererPdf } from "@/lib/pdf";
import { estDebloque, ouvrirPaiement } from "@/lib/acces";

type Onglet = "contrat" | "facture";

function Champ({
  id,
  label,
  aide,
  valeur,
  onChange,
  type = "text",
  zone = false,
}: {
  id: string;
  label: string;
  aide?: string;
  valeur: string | number;
  onChange: (v: string) => void;
  type?: string;
  zone?: boolean;
}) {
  const classe =
    "mt-2.5 w-full border border-[#26262B] bg-[#131316] px-3.5 py-2.5 text-sm outline-none focus:border-[#D4FF3F]";
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {zone ? (
        <textarea
          id={id}
          rows={3}
          value={valeur}
          onChange={(e) => onChange(e.target.value)}
          className={classe}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={valeur}
          onChange={(e) => onChange(e.target.value)}
          className={classe}
        />
      )}
      {aide && <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">{aide}</p>}
    </div>
  );
}

export default function Generateur() {
  const [p, setP] = useState<Partenariat>(PARTENARIAT_VIDE);
  const [onglet, setOnglet] = useState<Onglet>("contrat");
  const [debloque, setDebloque] = useState(estDebloque);

  const maj = <K extends keyof Partenariat>(cle: K, valeur: Partenariat[K]) =>
    setP((prec) => ({ ...prec, [cle]: valeur }));

  const blocs = useMemo(() => (onglet === "contrat" ? contrat(p) : facture(p)), [onglet, p]);

  const telecharger = () => {
    if (!debloque) return;
    genererPdf(
      blocs,
      onglet === "contrat"
        ? `contrat-partenariat-${p.marqueNom || "marque"}.pdf`
        : `facture-${p.numeroFacture || "001"}.pdf`,
    );
  };

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1fr]">
      {/* Formulaire */}
      <div className="space-y-10">
        <fieldset className="space-y-5">
          <legend className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
            Toi
          </legend>
          <Champ id="cn" label="Nom et prénom" valeur={p.creatorNom} onChange={(v) => maj("creatorNom", v)} />
          <Champ id="ca" label="Adresse" valeur={p.creatorAdresse} onChange={(v) => maj("creatorAdresse", v)} />
          <Champ
            id="cs"
            label="SIRET"
            aide="Si tu n'en as pas encore, il te faudra créer ta micro-entreprise avant de facturer."
            valeur={p.creatorSiret}
            onChange={(v) => maj("creatorSiret", v)}
          />
          <Champ id="ce" label="E-mail" type="email" valeur={p.creatorEmail} onChange={(v) => maj("creatorEmail", v)} />
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
            La marque
          </legend>
          <Champ id="mn" label="Raison sociale" valeur={p.marqueNom} onChange={(v) => maj("marqueNom", v)} />
          <Champ id="ma" label="Adresse" valeur={p.marqueAdresse} onChange={(v) => maj("marqueAdresse", v)} />
          <Champ id="ms" label="SIRET" valeur={p.marqueSiret} onChange={(v) => maj("marqueSiret", v)} />
          <Champ id="mc" label="Interlocuteur" valeur={p.marqueContact} onChange={(v) => maj("marqueContact", v)} />
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
            La mission
          </legend>
          <Champ id="pl" label="Plateformes" valeur={p.plateformes} onChange={(v) => maj("plateformes", v)} />
          <Champ id="li" label="Livrables" zone valeur={p.livrables} onChange={(v) => maj("livrables", v)} />
          <Champ id="dp" label="Date de publication" valeur={p.dateePublication} onChange={(v) => maj("dateePublication", v)} />
          <Champ
            id="de"
            label="Durée d'exploitation par la marque"
            aide="Le point le plus souvent oublié : sans limite écrite, la marque peut réutiliser ton contenu indéfiniment."
            valeur={p.dureeExploitation}
            onChange={(v) => maj("dureeExploitation", v)}
          />
          <Champ id="ex" label="Exclusivité" valeur={p.exclusivite} onChange={(v) => maj("exclusivite", v)} />
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
            L&apos;argent
          </legend>
          <Champ
            id="re"
            label="Rémunération (€)"
            type="number"
            valeur={p.remuneration}
            onChange={(v) => maj("remuneration", Number(v))}
          />
          <Champ
            id="an"
            label="Avantages en nature"
            aide="Produits offerts, voyage, matériel. Ils comptent dans le total qui déclenche l'obligation de contrat écrit."
            valeur={p.avantagesNature}
            onChange={(v) => maj("avantagesNature", v)}
          />
          <Champ
            id="va"
            label="Valeur des avantages (€)"
            type="number"
            valeur={p.valeurAvantages}
            onChange={(v) => maj("valeurAvantages", Number(v))}
          />
          <Champ id="dl" label="Délai de paiement" valeur={p.delaiPaiement} onChange={(v) => maj("delaiPaiement", v)} />
          <div className="grid gap-5 sm:grid-cols-2">
            <Champ id="nf" label="N° de facture" valeur={p.numeroFacture} onChange={(v) => maj("numeroFacture", v)} />
            <Champ id="df" label="Date de facture" valeur={p.dateFacture} onChange={(v) => maj("dateFacture", v)} />
          </div>
        </fieldset>
      </div>

      {/* Aperçu */}
      <div className="h-fit lg:sticky lg:top-28">
        <div className="flex gap-2.5">
          {(["contrat", "facture"] as const).map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => setOnglet(o)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                onglet === o
                  ? "border-[#D4FF3F] bg-[#D4FF3F] font-semibold text-[#0B0B0C]"
                  : "border-[#26262B] bg-[#131316] text-[#A1A1AA] hover:border-[#3a3a42]"
              }`}
            >
              {o === "contrat" ? "Contrat" : "Facture"}
            </button>
          ))}
        </div>

        <div className="mt-5 max-h-[60vh] overflow-y-auto border border-[#26262B] bg-[#131316] p-8">
          {blocs.map((bloc, i) => (
            <div key={i} className={i > 0 ? "mt-6" : ""}>
              {bloc.titre && (
                <p className="text-sm font-semibold text-[#F5F5F4]">{bloc.titre}</p>
              )}
              {bloc.corps.map((ligne, j) => (
                <p
                  key={j}
                  className={`whitespace-pre-wrap text-sm leading-relaxed text-[#A1A1AA] ${
                    bloc.titre ? "mt-2" : ""
                  }`}
                >
                  {ligne || " "}
                </p>
              ))}
            </div>
          ))}
        </div>

        {debloque ? (
          <button
            type="button"
            onClick={telecharger}
            className="mt-6 w-full rounded-full bg-[#D4FF3F] px-6 py-3.5 text-sm font-semibold text-[#0B0B0C] transition hover:bg-[#c2ef2c]"
          >
            Télécharger le PDF
          </button>
        ) : (
          <div className="mt-6 border border-[#26262B] bg-[#131316] p-7">
            <p className="font-medium">Le téléchargement est la partie payante</p>
            <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">
              L&apos;aperçu ci-dessus est complet et gratuit. Pour récupérer les deux
              documents en PDF, l&apos;accès est de 19 €, une fois, à vie.
            </p>
            <button
              type="button"
              onClick={ouvrirPaiement}
              className="mt-6 w-full rounded-full bg-[#D4FF3F] px-6 py-3.5 text-sm font-semibold text-[#0B0B0C] transition hover:bg-[#c2ef2c]"
            >
              Débloquer les téléchargements — 19 €
            </button>
            <button
              type="button"
              onClick={() => setDebloque(true)}
              className="mt-3 w-full rounded-full border border-[#26262B] px-6 py-2.5 text-xs text-[#A1A1AA] transition hover:border-[#3a3a42]"
            >
              Mode démonstration — débloquer sans payer
            </button>
            <p className="mt-4 text-xs leading-relaxed text-[#A1A1AA]">
              Ce second bouton n&apos;existe que tant que le paiement n&apos;est pas
              branché. Il doit disparaître avant la mise en ligne.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
