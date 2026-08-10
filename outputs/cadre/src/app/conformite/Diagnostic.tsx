"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  diagnostiquer,
  LIBELLES_GRAVITE,
  REPONSES_PAR_DEFAUT,
  type Gravite,
  type Reponses,
} from "@/lib/diagnostic";

const COULEURS: Record<Gravite, { bord: string; texte: string }> = {
  bloquant: { bord: "border-[#FF8A5C]", texte: "text-[#FF8A5C]" },
  important: { bord: "border-[#FFD166]", texte: "text-[#FFD166]" },
  vigilance: { bord: "border-[#8AB4F8]", texte: "text-[#8AB4F8]" },
  ok: { bord: "border-[#D4FF3F]", texte: "text-[#D4FF3F]" },
};

function Oui_Non({
  label,
  aide,
  valeur,
  onChange,
}: {
  label: string;
  aide?: string;
  valeur: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="border-t border-[#26262B] py-6">
      <p className="text-sm font-medium">{label}</p>
      {aide && <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">{aide}</p>}
      <div className="mt-4 flex gap-2.5">
        {[
          { v: true, t: "Oui" },
          { v: false, t: "Non" },
        ].map((opt) => (
          <button
            key={opt.t}
            type="button"
            onClick={() => onChange(opt.v)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              valeur === opt.v
                ? "border-[#D4FF3F] bg-[#D4FF3F] font-semibold text-[#0B0B0C]"
                : "border-[#26262B] bg-[#131316] text-[#A1A1AA] hover:border-[#3a3a42]"
            }`}
          >
            {opt.t}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Diagnostic() {
  const [r, setR] = useState<Reponses>(REPONSES_PAR_DEFAUT);
  const constats = useMemo(() => diagnostiquer(r), [r]);
  const bloquants = constats.filter((c) => c.gravite === "bloquant").length;

  const maj = <K extends keyof Reponses>(cle: K, valeur: Reponses[K]) =>
    setR((prec) => ({ ...prec, [cle]: valeur }));

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr]">
      <div>
        <div className="pb-2">
          <label htmlFor="montant" className="text-sm font-medium">
            Montant du partenariat, avantages en nature compris
          </label>
          <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
            Compte aussi les produits offerts, à leur valeur. C&apos;est ce total qui
            détermine si un contrat écrit est obligatoire.
          </p>
          <div className="mt-4 flex items-center border border-[#26262B] bg-[#131316] focus-within:border-[#D4FF3F]">
            <input
              id="montant"
              type="number"
              min={0}
              step={50}
              value={r.montant}
              onChange={(e) => maj("montant", Number(e.target.value))}
              className="w-full bg-transparent px-4 py-3 text-xl font-semibold outline-none"
            />
            <span className="px-4 text-[#A1A1AA]">€</span>
          </div>
        </div>

        <Oui_Non
          label="Tu as un contrat écrit signé par les deux parties ?"
          aide="Un échange d'e-mails qui fixe précisément la mission, le prix et les délais peut valoir écrit. Un simple message vocal ou un accord oral, non."
          valeur={r.contratEcrit}
          onChange={(v) => maj("contratEcrit", v)}
        />

        <Oui_Non
          label="Ton contenu indique clairement qu'il s'agit d'une publicité ?"
          aide="Mention « Publicité » ou « Collaboration commerciale », visible pendant toute la diffusion."
          valeur={r.mentionPublicite}
          onChange={(v) => maj("mentionPublicite", v)}
        />

        <div className="border-t border-[#26262B] py-6">
          <p className="text-sm font-medium">
            Le visuel a-t-il été retouché ou filtré ?
          </p>
          <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
            On parle ici des modifications de silhouette ou de visage, filtres compris.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              { v: "non" as const, t: "Non" },
              { v: "oui_signale" as const, t: "Oui, et c'est signalé" },
              { v: "oui_non_signale" as const, t: "Oui, sans mention" },
            ].map((opt) => (
              <button
                key={opt.v}
                type="button"
                onClick={() => maj("imagesRetouchees", opt.v)}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  r.imagesRetouchees === opt.v
                    ? "border-[#D4FF3F] bg-[#D4FF3F] font-semibold text-[#0B0B0C]"
                    : "border-[#26262B] bg-[#131316] text-[#A1A1AA] hover:border-[#3a3a42]"
                }`}
              >
                {opt.t}
              </button>
            ))}
          </div>
        </div>

        <Oui_Non
          label="Le produit relève-t-il d'un secteur sensible ?"
          aide="Produits financiers spéculatifs ou cryptoactifs, jeux d'argent, alcool, tabac ou nicotine, médicaments, chirurgie et actes esthétiques."
          valeur={r.secteurSensible}
          onChange={(v) => maj("secteurSensible", v)}
        />

        <Oui_Non
          label="Tu as une structure déclarée pour facturer ?"
          aide="Micro-entreprise, société, ou portage. Sans structure, tu ne peux pas émettre de facture valable."
          valeur={r.declare}
          onChange={(v) => maj("declare", v)}
        />
      </div>

      <div className="h-fit lg:sticky lg:top-28">
        <div className="cadre-plein relative border border-[#26262B] bg-[#131316] p-8">
          <span className="coin coin-hg" />
          <span className="coin coin-hd" />
          <span className="coin coin-bg" />
          <span className="coin coin-bd" />

          <p className="text-sm text-[#A1A1AA]">Résultat</p>
          <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight">
            {bloquants === 0
              ? "Rien de bloquant sur les points contrôlés."
              : `${bloquants} point${bloquants > 1 ? "s" : ""} à régler avant de publier.`}
          </p>

          <ul className="mt-8 space-y-5">
            {constats.map((c) => (
              <li key={c.titre} className={`border-l-2 pl-5 ${COULEURS[c.gravite].bord}`}>
                <p
                  className={`text-xs font-semibold uppercase tracking-widest ${COULEURS[c.gravite].texte}`}
                >
                  {LIBELLES_GRAVITE[c.gravite]}
                </p>
                <p className="mt-2 text-sm font-medium">{c.titre}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                  {c.explication}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-[#26262B] pt-6 text-xs leading-relaxed text-[#A1A1AA]">
            Ce diagnostic porte sur des points de contrôle courants. Il ne couvre pas
            toutes les situations et ne constitue pas un avis juridique.
          </p>
        </div>

        <Link
          href="/generateur"
          className="mt-6 block rounded-full bg-[#D4FF3F] px-6 py-3.5 text-center text-sm font-semibold text-[#0B0B0C] transition hover:bg-[#c2ef2c]"
        >
          Générer un contrat qui coche ces cases
        </Link>
      </div>
    </div>
  );
}
