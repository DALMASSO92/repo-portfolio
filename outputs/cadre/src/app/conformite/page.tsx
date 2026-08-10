import type { Metadata } from "next";
import Diagnostic from "./Diagnostic";

export const metadata: Metadata = {
  title: "Ton partenariat est-il en règle ?",
  description:
    "Six questions pour savoir si ton partenariat respecte les obligations françaises : contrat écrit, mention publicitaire, secteurs encadrés. Gratuit, sans compte.",
};

export default function PageConformite() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
        Outil gratuit
      </p>
      <h1 className="mt-5 max-w-3xl text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
        Ton partenariat est-il en règle ?
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-[#A1A1AA]">
        Six questions. À la fin, tu sais ce qui manque et ce qui peut te retomber dessus.
        Rien n&apos;est envoyé : tout se calcule dans ton navigateur.
      </p>

      <Diagnostic />
    </main>
  );
}
