import type { Metadata } from "next";
import { CommitGraph } from "@/components/CommitGraph";
import { OffreCard } from "@/components/OffreCard";
import { CTA, Cmd, Section, SectionTitle } from "@/components/ui";
import { faq, offres } from "@/lib/offres";

export const metadata: Metadata = {
  title: { absolute: "Premier Commit — Alternance en informatique : la méthode" },
  description:
    "Tu envoies des candidatures sans réponse ? Ce n'est pas un problème d'effort, c'est un problème de méthode. Accompagnement pour étudiants en informatique.",
};

const maillons = [
  {
    n: "01",
    t: "Ton CV n'est pas lu par un humain",
    d: "Il passe d'abord dans un logiciel de tri. Deux colonnes, une icône, un tableau, un PDF exporté en image : le texte devient illisible pour la machine, et ta candidature meurt avant d'avoir été vue.",
  },
  {
    n: "02",
    t: "Ton GitHub ne raconte rien",
    d: "Douze dépôts sans description, un README vide, des commits nommés « update ». Un recruteur technique regarde ton profil 90 secondes. En 90 secondes, il ne trouve rien à quoi se raccrocher.",
  },
  {
    n: "03",
    t: "Tu candidates sans cibler",
    d: "Le même message envoyé à deux cents entreprises est deux cents fois ignoré. Une candidature qui montre que tu as compris ce que fait l'entreprise obtient une réponse — même négative, et une réponse négative t'apprend quelque chose.",
  },
  {
    n: "04",
    t: "Tu ne relances jamais",
    d: "Le silence n'est presque jamais un refus. C'est une pile d'e-mails, un recruteur débordé, une offre oubliée. Une relance écrite au bon moment débloque une part réelle des dossiers.",
  },
  {
    n: "05",
    t: "L'entretien technique te surprend",
    d: "Tu sais coder, mais parler de ton code est un autre exercice. Raconter un projet en deux minutes, dire « je ne sais pas » sans te saborder : ça se prépare, comme le reste.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <div className="bg-nuit text-papier">
        <Section className="!py-20 sm:!py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Cmd>git log --oneline</Cmd>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
                Ce n&apos;est pas un problème d&apos;effort.
                <br />
                <span className="text-indigo-clair">
                  C&apos;est un problème de méthode.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-papier/75">
                Tu cherches une alternance en informatique et tu envoies des
                candidatures dans le vide. Le problème n&apos;est presque jamais
                ton niveau technique — c&apos;est la façon dont ton dossier est
                construit et envoyé. Ça, ça se corrige.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CTA href="/#offres">Voir les offres</CTA>
                <CTA href="/#methode" variant="ghost-light">
                  Comprendre la méthode
                </CTA>
              </div>
              <p className="mt-4 font-mono text-xs text-papier/50">
                Aucune promesse de contrat. Aucune mise en relation. Une méthode
                et du travail.
              </p>
            </div>

            <div className="rounded-2xl border border-papier/15 bg-nuit-2 p-7">
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-papier/45">
                Ton historique
              </p>
              <CommitGraph />
            </div>
          </div>
        </Section>
      </div>

      {/* ─── Le constat ─── */}
      <Section>
        <SectionTitle
          kicker="Le constat"
          title="Tu n'es pas en train d'échouer tout seul."
          intro="D'après l'Apec (mars 2025), 67 % des étudiants du supérieur ont rencontré des difficultés à trouver leur entreprise d'accueil. Et le marché s'est tendu : les offres d'alternance ont reculé d'environ un tiers sur Indeed en un an."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              chiffre: "67 %",
              texte:
                "des étudiants du supérieur en difficulté pour trouver une entreprise (Apec, mars 2025).",
            },
            {
              chiffre: "944",
              texte:
                "candidatures envoyées par une étudiante citée dans la presse, pour 3 entretiens et aucun contrat.",
            },
            {
              chiffre: "−32 %",
              texte:
                "d'offres d'alternance publiées sur Indeed en un an. Le marché est plus dur, pas toi plus mauvais.",
            },
          ].map((s) => (
            <div
              key={s.chiffre}
              className="rounded-2xl border border-ligne bg-white p-6"
            >
              <p className="font-display text-4xl font-bold text-indigo">
                {s.chiffre}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gris">{s.texte}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">
          Le réflexe, quand rien ne répond, c&apos;est d&apos;envoyer plus. C&apos;est
          exactement l&apos;inverse qu&apos;il faut faire.{" "}
          <strong>
            On ne gagne pas au volume, on gagne à la précision.
          </strong>{" "}
          Quarante candidatures ciblées et bien construites battent neuf cents
          envois automatiques — et coûtent moins cher en énergie.
        </p>
      </Section>

      {/* ─── La méthode ─── */}
      <div className="bg-papier-2">
        <Section id="methode">
          <SectionTitle
            kicker="La méthode"
            title="Cinq maillons. Il suffit qu'un seul casse."
            intro="Une recherche d'alternance est une chaîne. Si un maillon lâche, tout le reste ne sert à rien — et c'est pour ça qu'on peut envoyer des centaines de candidatures sans jamais rien obtenir."
          />
          <ol className="mt-10 space-y-4">
            {maillons.map((m) => (
              <li
                key={m.n}
                className="flex flex-col gap-4 rounded-2xl border border-ligne bg-white p-6 sm:flex-row sm:gap-7"
              >
                <span className="font-mono text-sm font-bold text-indigo sm:pt-1">
                  {m.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-nuit">
                    {m.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gris">{m.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl leading-relaxed text-gris">
            Le travail consiste à réparer ces cinq maillons, dans cet ordre.
            C&apos;est méthodique, c&apos;est vérifiable, et ça ne demande aucun
            talent particulier — juste de savoir où regarder.
          </p>
        </Section>
      </div>

      {/* ─── Offres ─── */}
      <Section id="offres">
        <SectionTitle
          kicker="Les offres"
          title="Trois niveaux. Prix nets."
          intro="TVA non applicable, art. 293 B du CGI. Le prix affiché est le prix payé."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offres.map((o) => (
            <OffreCard key={o.nom} offre={o} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-gris">
          Le Suivi est volontairement limité en nombre de places : je ne peux pas
          accompagner sérieusement plus de deux ou trois personnes en parallèle
          sans dégrader la qualité. Si les créneaux sont pleins, je te le dirai
          plutôt que de te vendre une place.
        </p>
      </Section>

      {/* ─── Ce que ce n'est pas ─── */}
      <div className="bg-nuit text-papier">
        <Section id="limites">
          <SectionTitle
            light
            kicker="Transparence"
            title="Ce que ce n'est pas."
            intro="Un périmètre clair vaut mieux qu'une promesse large. Voici ce que Premier Commit ne fait pas — et pourquoi."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                t: "Je ne te trouve pas d'entreprise.",
                d: "La loi française interdit de facturer une personne en recherche d'emploi pour des services de placement (art. L5321-3 du Code du travail). Je t'apprends à construire ta liste de cibles ; tu candidates toi-même.",
              },
              {
                t: "Je ne transmets ton CV à personne.",
                d: "Tes documents servent uniquement à ton audit. Ils ne sont envoyés à aucune entreprise, à aucun partenaire, à aucun recruteur.",
              },
              {
                t: "Je ne vends aucune liste d'entreprises.",
                d: "Un carnet d'adresses revendu, c'est du placement déguisé — et ça ne marche pas : ce qui fonctionne, c'est un ciblage que tu construis pour ton profil.",
              },
              {
                t: "Je ne garantis aucun contrat, ni aucun délai.",
                d: "Personne ne le peut honnêtement. Je m'engage sur un livrable et un temps de travail, pas sur une signature qui dépend d'un marché et d'un recruteur.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-papier/15 bg-nuit-2 p-6"
              >
                <h3 className="font-display text-lg font-bold text-papier">
                  {x.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-papier/65">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ─── Qui ─── */}
      <Section>
        <div className="max-w-2xl">
          <SectionTitle kicker="Qui écrit ça" title="Bonjour, moi c'est [PRÉNOM NOM]." />
          <div className="mt-6 space-y-4 leading-relaxed text-gris">
            <p>
              Je suis alternant en informatique à [ÉCOLE], et développeur. J&apos;ai
              cherché mon alternance comme tout le monde : en envoyant beaucoup,
              puis en comprenant que le problème n&apos;était pas la quantité.
            </p>
            <p>
              Premier Commit, c&apos;est la méthode que j&apos;aurais voulu avoir
              au début, remise au propre et applicable en quelques heures. Je la
              propose uniquement pour l&apos;informatique, parce que c&apos;est le
              seul domaine où je suis légitime — pour le reste, je ne vaux pas
              mieux qu&apos;un guide gratuit.
            </p>
            <p className="rounded-xl border border-ligne bg-papier-2 p-5 text-sm">
              <strong className="text-nuit">Le service démarre.</strong> Tu ne
              trouveras donc ici ni témoignage ni compteur de clients : je préfère
              n&apos;afficher que ce qui est vérifiable. En attendant, les
              ressources gratuites publiées sur ce site te donnent déjà une bonne
              partie de la méthode — juge sur pièces.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <div className="bg-papier-2">
        <Section id="faq">
          <SectionTitle kicker="FAQ" title="Les questions qu'on me pose." />
          <div className="mt-10 max-w-3xl divide-y divide-ligne rounded-2xl border border-ligne bg-white">
            {faq.map((item) => (
              <details key={item.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-nuit [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    viewBox="0 0 20 20"
                    className="h-5 w-5 shrink-0 fill-gris transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M9 3h2v6h6v2h-6v6H9v-6H3V9h6V3Z" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gris">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Section>
      </div>

      {/* ─── CTA final ─── */}
      <div className="bg-nuit text-papier">
        <Section className="text-center">
          <Cmd>git commit -m &quot;premier contrat&quot;</Cmd>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Reprends ta recherche par le bon bout.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-papier/75">
            Le Kit coûte 49 € et se lit en une soirée. Si tu n&apos;en tires rien,
            tu auras au moins compris pourquoi — et ça vaut déjà mieux que
            d&apos;envoyer cent candidatures de plus.
          </p>
          <div className="mt-9">
            <CTA href="/#offres">Voir les offres</CTA>
          </div>
        </Section>
      </div>
    </>
  );
}
