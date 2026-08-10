import Link from "next/link";
import { SEUIL_CONTRAT_OBLIGATOIRE } from "@/lib/bareme";

const etapes = [
  {
    numero: "01",
    titre: "Tu sais ce qui te reste",
    texte:
      "Une marque te propose 800 € ? Tu ne toucheras pas 800 €. Le simulateur déduit les cotisations et l'impôt pour t'afficher le chiffre réel, avant que tu dises oui.",
    lien: "/simulateur",
    libelleLien: "Ouvrir le simulateur",
  },
  {
    numero: "02",
    titre: "Tu sais si c'est valable",
    texte:
      "Un partenariat encadré par le droit français impose des mentions précises. Le diagnostic te dit en une minute ce qui manque à ton accord — et ce que tu risques de laisser passer.",
    lien: "/conformite",
    libelleLien: "Lancer le diagnostic",
  },
  {
    numero: "03",
    titre: "Tu envoies des documents propres",
    texte:
      "Contrat de partenariat et facture conforme, remplis à partir de tes réponses, téléchargeables en PDF. Ce que tu envoies à la marque ressemble enfin à celui d'un pro.",
    lien: "/generateur",
    libelleLien: "Voir le générateur",
  },
];

const faq = [
  {
    question: "Je gagne encore très peu. Ça me concerne vraiment ?",
    reponse:
      "Oui, pour une partie. Les obligations de transparence — signaler qu'un contenu est une publicité — s'appliquent dès le premier partenariat, quel que soit le montant. L'obligation de contrat écrit, elle, ne se déclenche qu'au-delà d'un certain seuil. Le diagnostic te dit précisément où tu te situes.",
  },
  {
    question: "C'est du conseil juridique ?",
    reponse:
      "Non, et c'est important. Cadré produit des modèles génériques et des estimations. Ce n'est ni un avocat ni un expert-comptable, et rien ici n'est adapté à ta situation personnelle. Pour un cas particulier ou un contrat à enjeu, consulte un professionnel.",
  },
  {
    question: "Pourquoi payer alors qu'il existe des modèles gratuits ?",
    reponse:
      "Les modèles gratuits que tu trouveras sont soit américains, soit génériques, soit publiés par des plateformes qui veulent te vendre autre chose. Cadré est construit sur le droit français applicable aux partenariats d'influence, et remplit les documents à partir de tes réponses plutôt que de te laisser devant un document à trous.",
  },
  {
    question: "Et si je suis mineur ?",
    reponse:
      "Tu peux utiliser les outils gratuits librement. Pour l'achat, il te faut l'accord de ton représentant légal — c'est une condition de nos conditions de vente. Si tu es mineur et que tu es rémunéré pour créer du contenu, des règles particulières s'appliquent : renseigne-toi avant de signer quoi que ce soit.",
  },
];

export default function Accueil() {
  return (
    <main>
      {/* Hero */}
      <section className="trame border-b border-[#26262B]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#26262B] bg-[#131316] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#A1A1AA]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D4FF3F]" />
            Pour les créateurs français
          </p>

          <h1 className="mt-8 max-w-4xl text-[length:var(--text-affiche)] font-semibold leading-[0.98] tracking-tight">
            Une marque te propose{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">800 €</span>
              <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-[#D4FF3F]/25" />
            </span>
            .
            <br />
            Tu ne toucheras pas 800 €.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#A1A1AA]">
            Cotisations, impôt, mentions obligatoires, contrat écrit. Personne ne te
            l&apos;explique, et c&apos;est pourtant ce qui décide de ce que tu gardes —
            et de ce que tu risques.
          </p>

          <div className="mt-11 flex flex-col gap-3.5 sm:flex-row">
            <Link
              href="/simulateur"
              className="rounded-full bg-[#D4FF3F] px-7 py-3.5 text-center text-sm font-semibold text-[#0B0B0C] transition hover:bg-[#c2ef2c]"
            >
              Calcule ce qu&apos;il te reste — gratuit
            </Link>
            <Link
              href="/conformite"
              className="rounded-full border border-[#26262B] bg-[#131316] px-7 py-3.5 text-center text-sm font-semibold text-[#F5F5F4] transition hover:border-[#3a3a42]"
            >
              Vérifie ton partenariat
            </Link>
          </div>

          <p className="mt-6 text-sm text-[#A1A1AA]">
            Sans compte, sans e-mail à donner. Les deux outils sont gratuits.
          </p>
        </div>
      </section>

      {/* Les trois moments */}
      <section className="border-b border-[#26262B]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="max-w-2xl text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
            Trois questions, dans l&apos;ordre où elles se posent
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {etapes.map((etape) => (
              <div
                key={etape.numero}
                className="cadre-plein relative flex flex-col border border-[#26262B] bg-[#131316] p-8"
              >
                <span className="coin coin-hg" />
                <span className="coin coin-hd" />
                <span className="coin coin-bg" />
                <span className="coin coin-bd" />

                <span className="text-xs font-semibold tracking-[0.2em] text-[#D4FF3F]">
                  {etape.numero}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{etape.titre}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#A1A1AA]">
                  {etape.texte}
                </p>
                <Link
                  href={etape.lien}
                  className="lien-souligne mt-7 text-sm font-medium text-[#D4FF3F]"
                >
                  {etape.libelleLien}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le cadre légal */}
      <section className="border-b border-[#26262B] bg-[#131316]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
              Ce n&apos;est pas un détail administratif. C&apos;est la loi.
            </h2>
            <p className="mt-7 leading-relaxed text-[#A1A1AA]">
              La France encadre l&apos;influence commerciale depuis 2023, et a resserré
              les règles depuis. Deux choses te concernent directement, et elles ne se
              déclenchent pas au même moment.
            </p>
            <p className="mt-5 leading-relaxed text-[#A1A1AA]">
              Le point que presque personne ne dit aux créateurs qui débutent : un
              contrat qui aurait dû être écrit et qui ne l&apos;est pas peut être
              privé d&apos;effet. Autrement dit, tu n&apos;as rien pour te retourner si
              la marque ne paie pas.
            </p>
          </div>

          <div className="space-y-5">
            <div className="border border-[#26262B] bg-[#0B0B0C] p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
                Dès le premier euro
              </p>
              <p className="mt-4 font-medium">
                Signaler que ton contenu est une publicité
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                La mention doit être visible pendant toute la diffusion. Les images
                retouchées doivent également être signalées, et certains secteurs sont
                purement interdits.
              </p>
            </div>

            <div className="border border-[#26262B] bg-[#0B0B0C] p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3F]">
                À partir de {SEUIL_CONTRAT_OBLIGATOIRE.toLocaleString("fr-FR")} € HT
              </p>
              <p className="mt-4 font-medium">Un contrat écrit devient obligatoire</p>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                Par annonceur, avantages en nature compris. Le contrat doit comporter
                des mentions précises : identités, missions, rémunération, cession des
                droits sur tes contenus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offre */}
      <section className="border-b border-[#26262B]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
                Les deux outils de calcul restent gratuits.
              </h2>
              <p className="mt-7 leading-relaxed text-[#A1A1AA]">
                Tu peux simuler ton net et diagnostiquer ton partenariat autant de fois
                que tu veux, sans rien payer et sans créer de compte. Ce qui est payant,
                c&apos;est la production des documents — parce que c&apos;est là que se
                trouve le vrai travail.
              </p>
              <ul className="mt-9 space-y-3.5 text-sm">
                {[
                  "Contrat de partenariat rempli à partir de tes réponses",
                  "Facture conforme au statut d'auto-entrepreneur",
                  "Checklist des mentions obligatoires à afficher",
                  "Téléchargement PDF, mises à jour incluses",
                ].map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <span className="mt-2 inline-block h-1 w-4 shrink-0 bg-[#D4FF3F]" />
                    <span className="text-[#A1A1AA]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cadre-plein relative border border-[#26262B] bg-[#131316] p-10">
              <span className="coin coin-hg" />
              <span className="coin coin-hd" />
              <span className="coin coin-bg" />
              <span className="coin coin-bd" />

              <p className="text-sm text-[#A1A1AA]">Accès unique, à vie</p>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-6xl font-semibold tracking-tight">19</span>
                <span className="text-2xl font-medium text-[#A1A1AA]">€</span>
              </p>
              <p className="mt-3 text-sm text-[#A1A1AA]">
                Pas d&apos;abonnement. Tu paies une fois.
              </p>

              <Link
                href="/generateur"
                className="mt-9 block rounded-full bg-[#D4FF3F] px-6 py-3.5 text-center text-sm font-semibold text-[#0B0B0C] transition hover:bg-[#c2ef2c]"
              >
                Voir ce que ça génère
              </Link>

              <p className="mt-6 text-xs leading-relaxed text-[#A1A1AA]">
                Un partenariat raté, mal cadré ou impayé coûte plus que 19 €. C&apos;est
                le seul argument que nous avons, et il nous paraît suffisant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-[length:var(--text-titre)] font-semibold leading-tight tracking-tight">
            Les questions qu&apos;on nous pose
          </h2>

          <dl className="mt-12 space-y-9">
            {faq.map((item) => (
              <div key={item.question} className="border-t border-[#26262B] pt-8">
                <dt className="font-medium">{item.question}</dt>
                <dd className="mt-3.5 leading-relaxed text-[#A1A1AA]">{item.reponse}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
