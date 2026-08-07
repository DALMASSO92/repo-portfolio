import type { Metadata } from "next";
import { PlanCard } from "@/components/PlanCard";
import { CTA, Section, SectionTitle, WaveDivider } from "@/components/ui";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  // 50 caractères
  title: { absolute: "Maintenance WordPress sans engagement — Garde-Site" },
  // 152 caractères
  description:
    "Maintenance WordPress dès 49 €/mois : mises à jour hebdomadaires, sauvegardes quotidiennes, surveillance 24/7. Sans engagement, résiliation par e-mail.",
};

const inclus = [
  {
    t: "Mises à jour hebdomadaires",
    d: "Cœur WordPress, thème et extensions, chaque semaine — avec vérification que le site fonctionne après, pas une mise à jour lancée en masse par un robot.",
  },
  {
    t: "Sauvegardes quotidiennes externalisées",
    d: "Stockées hors de votre hébergement. Si votre hébergeur a un incident, votre sauvegarde, elle, est à l'abri — et restaurable.",
  },
  {
    t: "Surveillance de disponibilité 24h/24",
    d: "Si votre site tombe un dimanche à 3 h du matin, l'alerte part immédiatement. Vous ne l'apprenez pas par un client.",
  },
  {
    t: "Scan de sécurité",
    d: "Détection de malware et de failles connues sur vos extensions, avant qu'elles ne soient exploitées.",
  },
  {
    t: "Rapport mensuel lisible",
    d: "Ce qui a été mis à jour, sauvegardé, surveillé, corrigé. Noir sur blanc, sans jargon.",
  },
  {
    t: "Retouches humaines (forfait Capitaine)",
    d: "1 h par mois pour changer un texte, une image, un numéro de téléphone. Réponse sous 24 h ouvrées.",
  },
];

export default function MaintenanceWordPress() {
  const wpPlans = plans.filter((p) => p.name === "Vigie" || p.name === "Capitaine");

  return (
    <>
      {/* ─── Hero ─── */}
      <div className="bg-encre text-ecume">
        <Section className="!py-16 sm:!py-24">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-sm font-medium text-ecume/70">
              <span className="dot-balise inline-block h-2.5 w-2.5 rounded-full bg-balise" />
              Vigie 49 €/mois · Capitaine 89 €/mois · sans engagement
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Maintenance WordPress : votre site à jour, sauvegardé,{" "}
              <span className="text-signal">surveillé 24h/24</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ecume/80">
              Mises à jour hebdomadaires, sauvegardes quotidiennes externalisées,
              surveillance continue et retouches humaines. Dès 49 €/mois, sans
              engagement — résiliation en 1 clic, par e-mail.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
              <CTA href="#forfaits-wordpress" variant="ghost-light">
                Voir les deux forfaits
              </CTA>
            </div>
          </div>
        </Section>
        <WaveDivider />
      </div>

      {/* ─── Le problème ─── */}
      <Section>
        <SectionTitle
          kicker="Le constat"
          title="Un WordPress sans entretien ne prévient pas avant de casser."
        />
        <div className="mt-8 max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-encre/85">
          <p>
            Environ 1 million de sites français tournent sous WordPress, et
            c&apos;est sa force. C&apos;est aussi sa faiblesse : chaque
            extension, chaque thème, chaque version du cœur reçoit
            régulièrement des correctifs de sécurité. Un site qui n&apos;est
            pas mis à jour accumule des failles connues — publiées, documentées,
            et exploitées automatiquement par des robots qui ne dorment jamais.
          </p>
          <p>
            Le scénario que nous voyons le plus souvent : un site livré il y a
            deux ou trois ans, jamais retouché depuis. Il tient. Puis un jour,
            une mise à jour automatique casse le formulaire de contact, ou un
            malware s&apos;installe discrètement, et vous l&apos;apprenez par
            un client — souvent un dimanche. Sans sauvegarde saine, la remise
            en ligne se compte en jours et en centaines d&apos;euros.
          </p>
          <p>
            La maintenance, c&apos;est l&apos;inverse de ce scénario : des
            gestes réguliers, peu coûteux, faits par quelqu&apos;un qui
            surveille <em>votre</em> site — pas un automate qui traite le vôtre
            comme mille autres.
          </p>
        </div>
      </Section>

      {/* ─── Ce qui est inclus ─── */}
      <div className="bg-ecume-2">
        <Section>
          <SectionTitle
            kicker="Le périmètre"
            title="Ce que la garde WordPress inclut, concrètement."
            intro="Pas de « sécurité renforcée » floue : des gestes précis, à fréquence écrite."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((item) => (
              <li
                key={item.t}
                className="rounded-2xl border border-ligne bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-encre">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ardoise">
                  {item.d}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ─── Forfaits ─── */}
      <Section id="forfaits-wordpress">
        <SectionTitle
          kicker="Les forfaits WordPress"
          title="Deux forfaits, prix nets, sans engagement."
          intro="TVA non applicable, art. 293 B du CGI. Résiliation par simple e-mail, effective à la fin du mois en cours."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {wpPlans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-4xl rounded-2xl border border-signal/40 bg-signal/5 p-5 text-sm leading-relaxed">
          <strong className="text-encre">
            Votre WordPress est déjà cassé, en retard de mises à jour ou
            infecté par un malware léger ?
          </strong>{" "}
          Commencez par la <strong>Remise en état : 149 €</strong>, une fois,
          sans abonnement. Montant intégralement crédité si vous souscrivez un
          forfait dans les 30 jours.
        </p>
      </Section>

      {/* ─── Pour qui ─── */}
      <Section className="!pt-0">
        <SectionTitle
          kicker="Pour qui"
          title="Pensé pour les indépendants et les TPE."
        />
        <div className="mt-8 max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-encre/85">
          <p>
            Artisans, professions libérales, commerces, associations : votre
            site vous amène des contacts, mais vous n&apos;avez ni le temps ni
            l&apos;envie de gérer des mises à jour. Vigie, à 49 €/mois, assure
            la garde de base sérieuse. Capitaine, à 89 €/mois, ajoute un humain
            à bord : retouches incluses et support prioritaire sous 24 h
            ouvrées.
          </p>
          <p>
            Votre site a été créé par quelqu&apos;un d&apos;autre ? Aucun
            problème — c&apos;est le cas de la majorité des sites que nous
            prenons sous garde. Le bilan de santé gratuit nous dit dans quel
            état il arrive, et vous repartez avec un état des lieux clair, même
            si vous ne donnez pas suite.
          </p>
        </div>
      </Section>

      {/* ─── CTA final ─── */}
      <div className="bg-encre text-ecume">
        <WaveDivider flip />
        <Section className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Où en est votre WordPress, exactement ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ecume/80">
            Deux minutes pour demander votre bilan de santé gratuit :
            disponibilité, mises à jour, sécurité, sauvegardes, vitesse. Sans
            engagement, sans carte bancaire.
          </p>
          <div className="mt-8">
            <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
          </div>
        </Section>
      </div>
    </>
  );
}
