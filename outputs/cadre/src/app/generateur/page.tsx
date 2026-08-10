import type { Metadata } from "next";
import Generateur from "./Generateur";

export const metadata: Metadata = {
  title: "Générateur de contrat et de facture",
  description:
    "Remplis tes informations, obtiens un contrat de partenariat et une facture conformes au droit français, en PDF.",
};

export default function PageGenerateur() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
        Accès unique — 19 €
      </p>
      <h1 className="mt-5 max-w-3xl text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
        Tes documents, remplis et prêts à envoyer
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-[#A1A1AA]">
        Remplis une fois, récupère les deux documents. L&apos;aperçu est libre : tu vois
        exactement ce que tu obtiens avant de payer quoi que ce soit.
      </p>

      <Generateur />
    </main>
  );
}
