import type { Metadata } from "next";
import Link from "next/link";
import { SEUIL_CONTRAT_OBLIGATOIRE } from "@/lib/bareme";

export const metadata: Metadata = {
  title: "Premier partenariat rémunéré : ce qu'il faut savoir",
  description:
    "Déclarer ses revenus de créateur, facturer une marque, signaler une publicité, savoir quand un contrat écrit devient obligatoire. Le guide pour les créateurs français.",
};

const sections = [
  {
    id: "declarer",
    titre: "Oui, tu dois déclarer",
    paragraphes: [
      "Un partenariat rémunéré est un revenu, même s'il est payé en produits plutôt qu'en argent. Le fait qu'il soit ponctuel, modeste, ou versé par une marque étrangère ne change rien.",
      "Les plateformes transmettent désormais à l'administration fiscale les montants qu'elles versent. Le raisonnement « ça passera inaperçu » ne tient plus, et la régularisation coûte toujours plus cher que la déclaration.",
    ],
  },
  {
    id: "statut",
    titre: "Il te faut une structure pour facturer",
    paragraphes: [
      "Une marque a besoin d'une facture pour comptabiliser sa dépense. Sans structure déclarée, tu ne peux pas en émettre valablement — et beaucoup de marques refuseront simplement de travailler avec toi.",
      "La micro-entreprise est la porte d'entrée la plus simple : création en ligne, gratuite, sans capital. Tes cotisations sont calculées en pourcentage de ce que tu encaisses, donc zéro encaissement signifie zéro cotisation.",
      "Tant que tu restes sous le seuil de franchise en base, tu ne factures pas de TVA. La mention « TVA non applicable, art. 293 B du CGI » doit alors figurer sur chacune de tes factures.",
    ],
  },
  {
    id: "publicite",
    titre: "Signaler la publicité n'est pas optionnel",
    paragraphes: [
      "Dès le premier partenariat, quel que soit le montant, ton contenu doit indiquer clairement qu'il s'agit d'une communication commerciale. La mention « Publicité » ou « Collaboration commerciale » doit rester visible pendant toute la diffusion — pas seulement en fin de description, ni cachée derrière un « plus ».",
      "Si le visuel modifie une silhouette ou un visage, filtres compris, cela doit également être signalé.",
      "Certains secteurs sont interdits ou strictement encadrés : produits financiers spéculatifs, jeux d'argent, alcool, nicotine, médicaments, actes esthétiques. Un partenariat dans ces domaines mérite un avis professionnel avant signature.",
    ],
  },
  {
    id: "contrat",
    titre: `Au-delà de ${SEUIL_CONTRAT_OBLIGATOIRE.toLocaleString("fr-FR")} €, le contrat écrit devient obligatoire`,
    paragraphes: [
      `Le seuil s'apprécie par annonceur, avantages en nature compris. Un partenariat payé ${(SEUIL_CONTRAT_OBLIGATOIRE - 200).toLocaleString("fr-FR")} € plus un produit valorisé 400 € dépasse donc le seuil.`,
      "L'enjeu n'est pas administratif. Un contrat qui aurait dû être écrit et qui ne l'est pas peut être privé d'effet : si la marque ne paie pas, tu n'as pratiquement rien pour te retourner.",
      "En dessous du seuil, l'écrit n'est pas imposé — mais le délai de paiement, le périmètre de la mission et la durée pendant laquelle la marque peut réutiliser ton contenu ne sont alors prouvables par rien.",
    ],
  },
  {
    id: "droits",
    titre: "La clause que presque tout le monde oublie",
    paragraphes: [
      "La durée d'exploitation. Beaucoup de contrats laissent à la marque le droit de réutiliser ton contenu sans limite de temps, sur tous les supports, parfois en publicité payante. Ta vidéo peut alors tourner en publicité pendant des années, pour le prix d'un seul post.",
      "Fixe une durée, un territoire et une liste de supports. Toute exploitation au-delà se renégocie et se repaie.",
    ],
  },
];

export default function Guide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">Guide</p>
      <h1 className="mt-5 text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
        Ton premier partenariat rémunéré
      </h1>
      <p className="mt-6 leading-relaxed text-[#A1A1AA]">
        Ce que personne ne t&apos;explique quand une marque t&apos;écrit pour la première
        fois. Cinq points, dans l&apos;ordre où ils vont te tomber dessus.
      </p>

      <nav className="mt-12 border border-[#26262B] bg-[#131316] p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
          Au sommaire
        </p>
        <ol className="mt-4 space-y-2.5 text-sm">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="lien-souligne text-[#F5F5F4]">
                {String(i + 1).padStart(2, "0")} — {s.titre}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-16 space-y-16">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <h2 className="text-xl font-semibold tracking-tight">{s.titre}</h2>
            {s.paragraphes.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-[#A1A1AA]">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="cadre-plein relative mt-20 border border-[#26262B] bg-[#131316] p-8">
        <span className="coin coin-hg" />
        <span className="coin coin-hd" />
        <span className="coin coin-bg" />
        <span className="coin coin-bd" />
        <p className="font-medium">Applique tout ça à ton cas</p>
        <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">
          Le simulateur te dit ce qu&apos;il te reste, le diagnostic te dit ce qui manque.
          Les deux sont gratuits.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/simulateur"
            className="rounded-full bg-[#D4FF3F] px-6 py-3 text-center text-sm font-semibold text-[#0B0B0C] transition hover:bg-[#c2ef2c]"
          >
            Le simulateur
          </Link>
          <Link
            href="/conformite"
            className="rounded-full border border-[#26262B] px-6 py-3 text-center text-sm font-semibold transition hover:border-[#3a3a42]"
          >
            Le diagnostic
          </Link>
        </div>
      </div>

      <p className="mt-14 border-t border-[#26262B] pt-8 text-xs leading-relaxed text-[#A1A1AA]">
        Ce guide présente des principes généraux et ne constitue pas un conseil juridique
        ou fiscal personnalisé. Pour ta situation, adresse-toi à un professionnel ou aux
        organismes officiels : urssaf.fr, impots.gouv.fr, service-public.fr.
      </p>
    </main>
  );
}
