import type { Metadata } from "next";
import { OffreCard } from "@/components/OffreCard";
import { CTA, Cmd, Section, SectionTitle } from "@/components/ui";
import { offres } from "@/lib/offres";

export const metadata: Metadata = {
  title: { absolute: "Pas d'entreprise à la rentrée — Le Rattrapage" },
  description:
    "Sans alternance à la rentrée, la fenêtre n'est pas fermée : le contrat peut souvent être signé jusqu'à environ 3 mois après le début de la formation.",
};

const semaines = [
  {
    t: "Semaine 1 — remettre le dossier d'aplomb",
    d: "CV reconstruit pour passer les outils de tri automatique, GitHub nettoyé et présenté (README, projets récents mis en avant, noms de dépôts lisibles), LinkedIn aligné sur le même discours. Tant que ce socle n'est pas propre, chaque candidature envoyée est une candidature gâchée.",
  },
  {
    t: "Semaine 2 — construire ta liste de cibles toi-même",
    d: "Une méthode de ciblage, des sources publiques et gratuites, des critères de sélection. Tu produis ta propre liste, adaptée à ta ville, ta filière et ton niveau. Je ne te vends aucune liste toute faite.",
  },
  {
    t: "Semaines 3 à 6 — candidater, tracer, relancer, corriger",
    d: "Un rythme tenable en parallèle des cours, un tableau de suivi qui te dit quoi relancer et quand, des modèles de relance, et une révision du dossier dès les premiers retours. Un refus qui t'apprend quelque chose vaut mieux que trente refus muets.",
  },
];

const questions = [
  {
    q: "J'ai déjà envoyé des centaines de candidatures cet été. Pourquoi ça changerait ?",
    a: "Parce que le volume n'a jamais été le levier. Des témoignages de presse documentent des parcours à 944 candidatures pour 3 entretiens et 0 contrat : ces personnes n'ont pas manqué d'effort. Ce qui change, c'est ce que contient chaque candidature et où elle est envoyée. Si tu as envoyé 300 fois le même CV, tu n'as pas testé 300 hypothèses, tu en as testé une.",
  },
  {
    q: "Est-ce que je dois arrêter de regarder les job boards ?",
    a: "Non, mais arrête d'en faire ton activité principale. Garde deux alertes actives et consacre l'essentiel de ton temps aux entreprises qui n'ont pas publié d'annonce. Sur cette période de l'année, c'est là que se trouve le volume restant.",
  },
  {
    q: "Et si je ne signe pas dans les délais ?",
    a: "C'est une possibilité réelle, et il vaut mieux la regarder maintenant que fin novembre. Les options existent — statut étudiant maintenu selon les cas, décalage d'entrée, changement de rythme, alternance visée pour l'année suivante avec un stage d'ici là. Ton école est la bonne interlocutrice. Poser cette question ne porte pas malheur : ça te retire la peur du vide, et un candidat qui n'a plus peur passe de meilleurs entretiens.",
  },
  {
    q: "Mes parents veulent comprendre avant de payer.",
    a: "C'est légitime, et cette page est écrite pour être lue par eux. Ce qu'ils achètent est écrit noir sur blanc : des documents et un temps de travail défini. Ce qu'ils n'achètent pas l'est tout aussi clairement : aucun contrat promis, aucune mise en relation. Mon identité et mon SIRET [SIRET] sont affichés sur le site. Ils peuvent m'écrire à [EMAIL_CONTACT] avant tout paiement.",
  },
  {
    q: "Je peux être remboursé ?",
    a: "Tu as un droit de rétractation de 14 jours. Pour Le Kit, accessible immédiatement, tu renonces expressément à ce droit si tu demandes l'accès instantané — c'est la règle légale pour les contenus numériques, et c'est indiqué au moment du paiement ; si tu préfères garder tes 14 jours, tu attends la fin du délai pour recevoir l'accès. Pour les prestations avec rendez-vous, la rétractation porte sur les séances non réalisées. Détail complet dans les CGV.",
  },
];

export default function Rattrapage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <div className="bg-nuit text-papier">
        <Section className="!py-20">
          <div className="max-w-3xl">
            <Cmd>rattrapage · campagne août-novembre</Cmd>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Tu n&apos;as pas d&apos;entreprise à la rentrée.
              <br />
              <span className="text-indigo-clair">Ce n&apos;est pas fini.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-papier/75">
              Le contrat d&apos;apprentissage peut, dans la plupart des cas, être
              signé jusqu&apos;à <strong>environ trois mois après le début de ta
              formation</strong>. La fenêtre n&apos;est pas fermée — elle est
              juste plus étroite, et elle demande une autre façon de chercher
              qu&apos;en mai.
            </p>
            <div className="mt-9">
              <CTA href="/#offres">Voir les offres</CTA>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-papier/55">
              Ce délai comporte des exceptions et dépend de ta formation.
              Fais-le confirmer par ton école ou ton CFA — c&apos;est la première
              chose à faire, et c&apos;est gratuit.
            </p>
          </div>
        </Section>
      </div>

      {/* ─── Diagnostic ─── */}
      <Section>
        <SectionTitle
          kicker="D'abord"
          title="Ce qui t'arrive est courant."
          intro="Tu n'as pas raté un examen et tu n'es pas passé à côté d'une information que tout le monde avait."
        />
        <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-gris">
          <p>
            En mars 2025, l&apos;Apec chiffrait à <strong>67 %</strong> la part
            d&apos;étudiants du supérieur ayant rencontré des difficultés à
            trouver une entreprise d&apos;accueil. Le nombre de contrats signés
            en 2025 recule de 5 % (−7,8 % dans le supérieur), et les offres
            publiées sur Indeed ont baissé de <strong>32 % en un an</strong>.
          </p>
          <p>
            Autrement dit : plus de candidats par offre, sur un stock d&apos;offres
            réduit. Ce n&apos;est pas une consolation, c&apos;est un diagnostic —
            et un diagnostic, ça se traite autrement qu&apos;une malchance.
          </p>
        </div>
      </Section>

      {/* ─── Ce qui a changé ─── */}
      <div className="bg-papier-2">
        <Section>
          <SectionTitle
            kicker="Le calendrier"
            title="Il a bougé. Ta méthode doit bouger avec lui."
            intro="Environ la moitié des offres de l'année paraissent entre mai et juillet, et selon l'Apec plus de la moitié des entreprises ont choisi leur alternant à la mi-juin. En septembre, il ne paraît plus que 9 % des offres de l'année."
          />
          <div className="mt-8 max-w-2xl">
            <p className="leading-relaxed">
              Conclusion très concrète : à partir de la rentrée,{" "}
              <strong>
                continuer à rafraîchir les job boards est la stratégie la moins
                rentable de l&apos;année
              </strong>
              . Ce n&apos;est pas une question de motivation, c&apos;est une
              question de stock. Le gisement qui reste est ailleurs :
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "les entreprises qui n'ont pas publié d'annonce et qui ne se sont pas encore décidées ;",
                "les postes qui se libèrent après une rupture de période d'essai — ça arrive en septembre et octobre, chaque année ;",
                "les structures qui ne recrutent pas « une alternance » mais qui ont un besoin technique identifiable, à qui il faut expliquer ce que tu peux faire.",
              ].map((x) => (
                <li
                  key={x}
                  className="flex gap-3 rounded-xl border border-ligne bg-white p-4 text-sm leading-relaxed"
                >
                  <span className="font-mono text-indigo">→</span>
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-gris">
              Ces trois pistes ont un point commun : elles ne se traitent pas avec
              un CV générique envoyé en masse. Elles demandent un dossier lisible
              et une candidature écrite pour une entreprise précise.
            </p>
          </div>
        </Section>
      </div>

      {/* ─── Règle des 3 mois ─── */}
      <Section>
        <SectionTitle
          kicker="Le délai"
          title="Combien de temps il te reste, réellement."
        />
        <div className="mt-8 max-w-2xl space-y-5 leading-relaxed">
          <p className="text-gris">
            La règle générale est écrite dans le Code du travail{" "}
            <span className="font-mono text-sm text-indigo">(art. L6222-12-1)</span> :
            tu peux{" "}
            <strong className="text-nuit">
              débuter ton cycle sans employeur, dans la limite de trois mois
            </strong>
            , sous le statut de stagiaire de la formation professionnelle, et
            signer ton contrat d&apos;apprentissage à tout moment pendant cette
            période — la durée du contrat étant alors réduite du nombre de mois
            écoulés. Pour une rentrée en septembre, cela ouvre une fenêtre qui
            court jusque vers décembre. Ton établissement a par ailleurs
            l&apos;obligation de t&apos;assister dans cette recherche.
          </p>
          <p className="text-gris">
            Trois précautions, parce que je préfère être utile qu&apos;affirmatif :
          </p>
          <ol className="space-y-3">
            {[
              "C'est un cadre général, pas une garantie individuelle. Il existe des cas particuliers, et les règles de l'alternance ont bougé plusieurs fois ces dernières années.",
              "Ta formation a le dernier mot pratique. Ton école ou ton CFA sait à quelle date limite tu dois être inscrit et signé pour rester dans le cursus — cette date peut être antérieure au maximum légal.",
              "Le contrat de professionnalisation obéit à ses propres règles. Si c'est ton cas, ne transpose pas.",
            ].map((x, i) => (
              <li
                key={x}
                className="flex gap-3 rounded-xl border border-ligne bg-white p-4 text-sm leading-relaxed"
              >
                <span className="font-mono font-bold text-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {x}
              </li>
            ))}
          </ol>
          <div className="rounded-xl border-l-4 border-vert bg-papier-2 p-5">
            <p className="text-sm leading-relaxed">
              <strong className="text-nuit">
                La première action à faire, avant d&apos;acheter quoi que ce soit
                ici :
              </strong>{" "}
              écris à ton référent alternance et demande-lui, noir sur blanc, ta
              date limite réelle de signature et ce qui se passe si tu la dépasses
              (statut étudiant maintenu, report, réorientation). C&apos;est
              gratuit, ça prend cinq minutes, et ça remplace beaucoup
              d&apos;angoisse par une date.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Plan 6 semaines ─── */}
      <div className="bg-papier-2">
        <Section>
          <SectionTitle
            kicker="Le plan"
            title="Six semaines, pas une course."
            intro="L'erreur classique de la rentrée, c'est d'accélérer : passer de 20 candidatures par semaine à 60, en dégradant chacune. Sur une fenêtre courte, c'est le contraire qui tient."
          />
          <ol className="mt-10 space-y-4">
            {semaines.map((s) => (
              <li
                key={s.t}
                className="rounded-2xl border border-ligne bg-white p-6"
              >
                <h3 className="font-display text-lg font-bold text-nuit">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gris">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gris">
            Et en parallèle, la préparation aux entretiens techniques — parce que
            la pire façon de perdre la seule opportunité de l&apos;automne, c&apos;est
            d&apos;arriver non préparé à l&apos;entretien qu&apos;on a mis six
            semaines à obtenir.
          </p>
        </Section>
      </div>

      {/* ─── Offres ─── */}
      <Section id="offres">
        <SectionTitle
          kicker="Les offres"
          title="Les mêmes que le reste de l'année."
          intro="Pas de « pack rentrée » à prix gonflé, pas de tarif de crise."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offres.map((o) => (
            <OffreCard key={o.nom} offre={o} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl rounded-xl border border-ligne bg-white p-5 text-sm leading-relaxed text-gris">
          <strong className="text-nuit">Si tu ne sais pas quoi prendre :</strong>{" "}
          commence par Le Kit. Si après l&apos;avoir appliqué tu veux un regard sur
          ton dossier réel, La Méthode existe et la différence de prix peut être
          réglée à ce moment-là — écris-moi. Le Suivi n&apos;a de sens que si tu
          comptes candidater sérieusement pendant les six semaines qui suivent ;
          sinon tu paies un accompagnement que tu n&apos;utiliseras pas.
        </p>
      </Section>

      {/* ─── Ce que ce n'est pas ─── */}
      <div className="bg-nuit text-papier">
        <Section>
          <SectionTitle
            light
            kicker="À lire avant de payer"
            title="Ce que Le Rattrapage n'est pas."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                t: "Je ne te trouve pas d'entreprise.",
                d: "Aucune mise en relation, aucune recommandation auprès d'un employeur, aucun CV transmis. L'article L5321-3 du Code du travail interdit de faire payer une personne en recherche d'emploi pour du placement. Ce que la loi autorise, et ce que je fais, c'est du conseil et de la méthode (art. L5321-2).",
              },
              {
                t: "Je ne vends aucune liste d'entreprises.",
                d: "Je t'apprends à construire la tienne, adaptée à ta ville, ta filière et ton niveau.",
              },
              {
                t: "Je ne garantis aucun contrat.",
                d: "Ni avant la fin de la fenêtre, ni après. Un contrat dépend d'une décision d'employeur que je ne contrôle pas.",
              },
              {
                t: "Ce n'est pas une opération de dernière minute.",
                d: "Il n'y a ni compte à rebours, ni tarif qui augmente, ni places limitées. Si tu préfères prendre deux jours pour y réfléchir ou en parler à tes parents, la page sera la même dans deux jours.",
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

      {/* ─── FAQ de saison ─── */}
      <Section>
        <SectionTitle kicker="FAQ" title="Questions propres à cette période." />
        <div className="mt-10 max-w-3xl divide-y divide-ligne rounded-2xl border border-ligne bg-white">
          {questions.map((item) => (
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
              <p className="mt-3 text-sm leading-relaxed text-gris">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ─── Bandeau final ─── */}
      <div className="bg-nuit text-papier">
        <Section className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Une date, un dossier propre, une liste de cibles.
            <br />
            <span className="text-indigo-clair">Dans cet ordre.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-papier/75">
            Écris à ton école aujourd&apos;hui pour connaître ta date limite
            réelle. Reprends ton CV et ton GitHub cette semaine. Construis ta liste
            la semaine prochaine. Le reste, c&apos;est de la répétition — et cette
            partie-là, tu sais déjà la faire.
          </p>
          <div className="mt-9">
            <CTA href="/#offres">Voir les offres</CTA>
          </div>
          <p className="mt-4 font-mono text-xs text-papier/45">
            Aucune promesse de contrat. Aucune mise en relation. Aucun compte à
            rebours sur cette page.
          </p>
        </Section>
      </div>
    </>
  );
}
