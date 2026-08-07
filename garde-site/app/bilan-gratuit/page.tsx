import type { Metadata } from "next";
import { BilanForm } from "@/components/BilanForm";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Bilan de santé gratuit de votre site web — Garde-Site" },
  description:
    "Audit gratuit de votre site : disponibilité, sécurité, mises à jour, vitesse. Résultat clair sous 24 h ouvrées, sans engagement ni carte bancaire.",
};

const reassurance = [
  {
    t: "Gratuit et sans engagement",
    d: "le bilan ne vous oblige à rien.",
  },
  {
    t: "Réponse < 24 h ouvrées",
    d: "un bilan rédigé par un humain, pas un PDF automatique illisible.",
  },
  {
    t: "Vos données restent à quai",
    d: "utilisées uniquement pour ce bilan, jamais revendues. Suppression sur simple demande à [EMAIL_CONTACT].",
  },
  {
    t: "« Je ne sais pas ce qu'est ma techno »",
    d: "aucun souci : nous l'identifions pour vous, c'est compris dans le bilan.",
  },
];

export default function BilanGratuit() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-encre sm:text-5xl">
            Où en est votre site, exactement ?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ardoise">
            Audit automatisé et gratuit : disponibilité, mises à jour,
            sécurité, sauvegardes, vitesse. Vous recevez un état des lieux
            clair sous 24 h ouvrées. Sans engagement, sans carte bancaire, sans
            relance insistante.
          </p>
          <ul className="mt-8 space-y-4">
            {reassurance.map((r) => (
              <li key={r.t} className="flex gap-3 text-sm leading-relaxed">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-5 w-5 shrink-0 fill-balise"
                  aria-hidden="true"
                >
                  <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm4.7 7.4-5.3 5.9a1 1 0 0 1-1.5 0L5.3 10.5a1 1 0 1 1 1.5-1.3l1.9 2 4.5-5.1a1 1 0 0 1 1.5 1.3Z" />
                </svg>
                <span>
                  <strong className="text-encre">{r.t}</strong>{" "}
                  <span className="text-ardoise">— {r.d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-ligne bg-white p-7 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-encre">
            Demander mon bilan de santé
          </h2>
          <div className="mt-6">
            <BilanForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
