import type { Metadata } from "next";
import Simulateur from "./Simulateur";

export const metadata: Metadata = {
  title: "Combien il te reste vraiment sur un partenariat",
  description:
    "Une marque te propose un montant ? Calcule ce que tu gardes réellement après cotisations sociales et impôt, en micro-entreprise. Gratuit, sans compte.",
};

export default function PageSimulateur() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
        Outil gratuit
      </p>
      <h1 className="mt-5 max-w-3xl text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
        Combien il te reste vraiment
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-[#A1A1AA]">
        Le montant qu&apos;une marque annonce n&apos;est pas celui que tu encaisses. Entre
        le montant proposé et ce qui arrive sur ton compte, il y a les cotisations
        sociales et l&apos;impôt. Voici l&apos;écart, chiffré.
      </p>

      <Simulateur />
    </main>
  );
}
