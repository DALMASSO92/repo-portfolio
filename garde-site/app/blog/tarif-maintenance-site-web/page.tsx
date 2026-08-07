import type { Metadata } from "next";
import Link from "next/link";
import { Prose, TableScroll } from "@/components/Prose";
import { CTA, Section } from "@/components/ui";

export const metadata: Metadata = {
  // 52 caractères
  title: { absolute: "Combien coûte la maintenance d'un site web en 2026 ?" },
  // 140 caractères
  description:
    "Tarifs réels de la maintenance de site web en France : de 12 à 300 €/mois. Ce que cachent les prix bas, et comment choisir sans vous tromper.",
};

export default function ArticleTarifMaintenance() {
  return (
    <Section>
      <article className="mx-auto max-w-prose">
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-signal">
            Blog · Août 2026
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-encre sm:text-4xl">
            Combien coûte la maintenance d&apos;un site web en 2026 ?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ardoise">
            Vous avez un site. Il tourne. Et un jour, quelqu&apos;un vous parle
            de « maintenance » — avec des tarifs qui vont du simple au
            vingtuple. Cet article pose des chiffres vérifiés sur le marché
            français, explique ce que recouvrent réellement les écarts de prix,
            et vous donne une grille de lecture pour choisir. Y compris si ce
            n&apos;est pas chez nous.
          </p>
        </header>

        <Prose className="mt-10">
          <h2>Les fourchettes réelles du marché français</h2>
          <p>
            Notre étude de marché (été 2026, prix publics d&apos;acteurs
            français consolidés notamment via clickdev.fr et smart-agency.fr)
            fait ressortir trois paliers :
          </p>
          <TableScroll>
            <table>
              <thead>
                <tr>
                  <th>Niveau</th>
                  <th>Prix constatés</th>
                  <th>Ce qui est couvert en général</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Basique</strong>
                  </td>
                  <td>29 à 50 €/mois</td>
                  <td>
                    Mises à jour, sauvegardes, surveillance de disponibilité
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Intermédiaire</strong>
                  </td>
                  <td>70 à 170 €/mois</td>
                  <td>
                    Idem + retouches humaines, support, sécurité renforcée
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Complet / agence</strong>
                  </td>
                  <td>170 à 300 €/mois</td>
                  <td>
                    Idem + accompagnement, optimisations, engagements de délai
                  </td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
          <p>
            Aux extrêmes : des offres d&apos;entrée à <strong>12 €/mois</strong>{" "}
            (Wasi) et, côté international, des acteurs comme GoDaddy
            (6-25 $/mois) ou WP Buffs (79 à 247 $/mois avec retouches dites
            « illimitées »). En one-shot, les projets de maintenance déposés
            sur Codeur.com se négocient souvent entre{" "}
            <strong>200 et 500 € par an</strong> — soit l&apos;équivalent de 17
            à 42 €/mois, sans engagement de réactivité.
          </p>
          <p>
            Autrement dit : oui, on trouve de la « maintenance » à moins de
            15 €/mois. La vraie question est ce que ce prix contient.
          </p>

          <h2>Ce que cachent les prix très bas</h2>
          <p>
            Un forfait à 12 ou 19 €/mois n&apos;est pas une arnaque. C&apos;est
            un produit différent, et il faut le savoir avant de signer.
          </p>

          <h3>Des robots, pas des humains</h3>
          <p>
            À ce prix, tout est automatisé : mises à jour lancées en masse,
            sauvegardes programmées, e-mails de rapport générés. C&apos;est
            utile. Mais personne ne regarde <em>votre</em> site. Si une mise à
            jour casse votre formulaire de contact, l&apos;automate ne le voit
            pas — vos prospects, si. Aucune retouche humaine n&apos;est
            incluse : le jour où vous voulez changer un texte ou corriger un
            affichage, c&apos;est un devis à part, souvent facturé à
            l&apos;heure.
          </p>

          <h3>Le « illimité » a toujours des limites</h3>
          <p>
            Les offres « modifications illimitées » plafonnent en pratique par
            la taille des tâches (souvent 30 minutes maximum) et par la file
            d&apos;attente. C&apos;est un modèle légitime — nous appliquons
            nous-mêmes un quota clair d&apos;1 h/mois sur nos forfaits, parce
            qu&apos;un quota honnête vaut mieux qu&apos;un illimité flou.
          </p>

          <h3>La restauration, angle mort fréquent</h3>
          <p>
            Beaucoup d&apos;offres d&apos;entrée sauvegardent… sur le même
            hébergement que le site. Si l&apos;hébergeur a un incident ou si le
            site est compromis, la sauvegarde peut l&apos;être aussi. Questions
            à poser : où sont stockées les sauvegardes ? À quelle fréquence ?
            Qui teste qu&apos;elles sont restaurables, et en combien de temps ?
          </p>

          <h3>L&apos;engagement de durée</h3>
          <p>
            Certains contrats se rattrapent sur la durée : 12 mois
            d&apos;engagement, résiliation par courrier recommandé. Un prix
            mensuel bas multiplié par un engagement long peut coûter plus cher
            qu&apos;un forfait supérieur sans engagement.
          </p>

          <h2>Pourquoi les agences facturent 170-300 €/mois</h2>
          <p>
            À l&apos;autre bout du spectre, les agences ne survendent pas
            forcément. Elles incluent souvent de la gestion de projet, des
            astreintes, des optimisations régulières, parfois de
            l&apos;évolution fonctionnelle. Pour un site e-commerce qui génère
            du chiffre d&apos;affaires, c&apos;est souvent justifié. Pour le
            site vitrine d&apos;un indépendant ou d&apos;une TPE, c&apos;est
            fréquemment surdimensionné : vous payez une structure, pas
            seulement un service.
          </p>

          <h2>La grille de lecture en 6 questions</h2>
          <p>Avant de signer un contrat de maintenance, chez qui que ce soit :</p>
          <ol>
            <li>
              <strong>Qu&apos;est-ce qui est fait, à quelle fréquence ?</strong>{" "}
              Exigez du concret : mises à jour hebdomadaires ou mensuelles ?
              Sauvegardes quotidiennes ? Surveillance 24/7 ?
            </li>
            <li>
              <strong>Que se passe-t-il quand ça casse ?</strong> Délai de
              réponse chiffré et écrit, pas « au plus vite ».
            </li>
            <li>
              <strong>Les retouches humaines sont-elles incluses ?</strong>{" "}
              Combien de temps par mois, et que devient le temps non utilisé ?
            </li>
            <li>
              <strong>
                Où vont les sauvegardes, et qui teste la restauration ?
              </strong>
            </li>
            <li>
              <strong>Quel engagement, quelle résiliation ?</strong> Sans
              engagement et résiliation par simple e-mail = le prestataire
              parie sur votre satisfaction, pas sur votre signature.
            </li>
            <li>
              <strong>Qui sait maintenir VOTRE technologie ?</strong> Un
              forfait WordPress ne sert à rien pour un site Next.js, React ou
              Webflow. C&apos;est un point aveugle de tout le marché — on y a
              consacré{" "}
              <Link href="/blog/maintenance-site-nextjs-react/">
                un article dédié
              </Link>
              .
            </li>
          </ol>

          <h2>Et Garde-Site dans tout ça ?</h2>
          <p>
            Soyons transparents sur notre positionnement, puisque cet article
            compare des prix :
          </p>
          <ul>
            <li>
              <strong>Vigie, 49 €/mois</strong> (WordPress) : mises à jour
              hebdomadaires, sauvegardes quotidiennes externalisées,
              surveillance 24/7, scan sécurité, rapport mensuel. C&apos;est le
              haut de la fourchette « basique » — assumé, parce que les
              sauvegardes sont externalisées et qu&apos;un humain lit les
              rapports.
            </li>
            <li>
              <strong>Capitaine, 89 €/mois</strong> (WordPress) : Vigie + 1 h
              de retouches/mois et support prioritaire sous 24 h ouvrées. Dans
              la fourchette intermédiaire du marché (70-170 €), plutôt vers le
              bas.
            </li>
            <li>
              <strong>Phare, 129 €/mois</strong> (Next.js, React, Webflow,
              sites générés par IA) : surveillance avancée, mises à jour de
              dépendances, correctifs, 1 h de retouches. Peu de points de
              comparaison en France :{" "}
              <Link href="/maintenance-site-nextjs-react/">
                ce segment est quasiment vide
              </Link>
              .
            </li>
          </ul>
          <p>
            Le tout <strong>sans engagement</strong>, résiliation en un e-mail.
            Nous ne sommes ni les moins chers (les robots à 12 € existent et
            ont leur usage), ni une agence à 250 €. Si votre besoin est une
            surveillance automatique pure sur un site sans enjeu, une offre
            low-cost peut suffire. Si votre site mérite qu&apos;un humain le
            connaisse et réponde vite, nous sommes dans la zone de prix
            cohérente du marché — avec des quotas écrits noir sur blanc.
          </p>

          <h2>Le vrai coût, c&apos;est l&apos;absence de maintenance</h2>
          <p>
            Dernier chiffre à garder en tête : notre forfait one-shot «{" "}
            <Link href="/#forfaits">Remise en état</Link> » d&apos;un site
            cassé ou piraté coûte 149 € — et c&apos;est un prix d&apos;appel.
            Sur le marché, un nettoyage de site compromis se facture couramment
            plusieurs centaines d&apos;euros, sans compter les visiteurs perdus
            pendant la panne. Douze mois de maintenance basique coûtent souvent
            moins cher qu&apos;une seule vraie panne. C&apos;est le calcul
            honnête à faire, quel que soit le prestataire que vous choisirez.
          </p>
        </Prose>

        {/* ─── CTA de fin ─── */}
        <aside className="mt-14 rounded-2xl bg-encre p-8 text-ecume">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Où en est votre site, concrètement ?
          </h2>
          <p className="mt-3 leading-relaxed text-ecume/80">
            Faites le point en 5 minutes : notre bilan de santé gratuit vérifie
            mises à jour, sauvegardes, sécurité et vitesse de votre site, et
            vous envoie un rapport clair. Sans engagement, sans carte
            bancaire — et le rapport reste utile même si vous ne travaillez
            jamais avec nous.
          </p>
          <div className="mt-6">
            <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
          </div>
        </aside>
      </article>
    </Section>
  );
}
