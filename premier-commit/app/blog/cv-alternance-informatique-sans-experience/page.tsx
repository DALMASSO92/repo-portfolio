import type { Metadata } from "next";
import { ArticleOutro } from "@/components/ArticleOutro";
import { Prose, ProseHeader, ProseNote } from "@/components/Prose";
import { Section } from "@/components/ui";

const slug = "cv-alternance-informatique-sans-experience";

export const metadata: Metadata = {
  title: {
    absolute: "CV alternance informatique sans expérience : le guide",
  },
  description:
    "Tu candidates en alternance dev ou data sans expérience pro ? Voici comment construire un CV que l'ATS et le recruteur tech lisent vraiment.",
};

export default function ArticleCv() {
  return (
    <>
      <ProseHeader
        kicker="blog · cv"
        title="CV d'alternance en informatique : comment faire quand on n'a « pas d'expérience »"
        meta="Août 2026 · 7 min de lecture"
      />

      <Section>
        <Prose>
          <p>
            Tu candidates depuis des semaines pour une alternance en
            développement, en data ou en cybersécurité, et il ne se passe rien. À
            chaque fois que tu relis ton CV, la même phrase revient :{" "}
            <em>je n&apos;ai pas d&apos;expérience</em>.
          </p>
          <p>
            Tordons le cou à cette idée, parce qu&apos;elle t&apos;empêche de
            travailler.{" "}
            <strong>
              Personne n&apos;attend d&apos;expérience professionnelle d&apos;un
              candidat en alternance
            </strong>{" "}
            — si c&apos;était le critère, l&apos;alternance n&apos;existerait
            pas. Ce que le recruteur cherche, c&apos;est{" "}
            <strong>une preuve que tu sais faire quelque chose de concret</strong>
            . Cette preuve, tu l&apos;as déjà : elle est juste mal rangée.
          </p>

          <h2 id="test">Étape 0 : le test que personne ne fait</h2>
          <p>
            Avant toute réécriture, fais ceci — il te faut deux minutes.
          </p>
          <ol>
            <li>Ouvre ton CV en PDF.</li>
            <li>Sélectionne tout le contenu (Ctrl+A), copie (Ctrl+C).</li>
            <li>
              Colle dans un bloc-notes brut : Bloc-notes sous Windows, TextEdit
              en mode texte seul sur Mac, ou n&apos;importe quel éditeur de code.
            </li>
          </ol>
          <p>
            <strong>
              Ce que tu vois, c&apos;est approximativement ce que lit la machine.
            </strong>{" "}
            Trois résultats possibles :
          </p>
          <ul>
            <li>
              <strong>Rien ne se colle.</strong> Ton CV a été exporté en image,
              ou en PDF non textuel. Pour un logiciel de tri, c&apos;est une page
              blanche.
            </li>
            <li>
              <strong>Le texte sort dans le désordre</strong>, colonnes
              entrelacées et mots collés. Typique des modèles à deux colonnes et
              des zones de texte flottantes.
            </li>
            <li>
              <strong>Le texte sort proprement, dans l&apos;ordre.</strong>{" "}
              C&apos;est ce qu&apos;on vise.
            </li>
          </ul>
          <p>
            Ce test règle à lui seul une bonne partie des CV « invisibles ».
          </p>

          <h2 id="ats">
            Ce qu&apos;un ATS fait vraiment (et ce qu&apos;il ne fait pas)
          </h2>
          <p>
            Un ATS — <em>Applicant Tracking System</em> — fait principalement
            trois choses : il <strong>extrait du texte</strong> de ton fichier,
            il le <strong>range dans des champs</strong> (formation,
            expériences, compétences), et il permet au recruteur de{" "}
            <strong>chercher</strong> dans la base.
          </p>
          <p>
            Ce qu&apos;il ne fait pas, malgré la légende : il ne te note pas sur
            100 et il ne jette pas ton CV automatiquement. Dans l&apos;immense
            majorité des cas, un CV mal lu n&apos;est pas rejeté —{" "}
            <strong>il est mal rangé</strong>, donc il ne remonte pas quand le
            recruteur cherche <code>React</code> ou « alternance BUT
            informatique », donc il n&apos;est jamais ouvert.
          </p>
          <p>
            La conséquence est plus rassurante qu&apos;il n&apos;y paraît :{" "}
            <strong>
              tu ne joues pas contre un algorithme, tu joues contre une recherche
              par mots-clés.
            </strong>{" "}
            Ça, ça se prépare.
          </p>

          <h3 id="mots-cles">
            Les mots-clés, sans tomber dans le bourrage
          </h3>
          <p>
            Le principe est simple :{" "}
            <strong>
              les technologies que tu maîtrises doivent apparaître écrites, en
              toutes lettres, dans le texte de ton CV.
            </strong>{" "}
            Si l&apos;offre dit « Java / Spring Boot » et que ton CV dit seulement
            « développement backend », tu ne remontes pas.
          </p>
          <p>Trois règles concrètes :</p>
          <ul>
            <li>
              <strong>Écris les noms exacts</strong> tels qu&apos;ils figurent
              dans l&apos;offre : <code>PostgreSQL</code> et pas « bases de
              données », <code>Docker</code> et pas « conteneurisation »,{" "}
              <code>React</code> et pas « framework front ».
            </li>
            <li>
              <strong>Donne les deux formes</strong> quand elles coexistent :{" "}
              <code>JavaScript (JS)</code>,{" "}
              <code>Intégration continue (CI/CD)</code>.
            </li>
            <li>
              <strong>
                N&apos;écris jamais une techno que tu ne sais pas défendre.
              </strong>{" "}
              Un entretien technique d&apos;alternance démarre systématiquement
              par les mots de ton CV. Mentir ici, c&apos;est acheter un entretien
              pour le perdre en trois questions.
            </li>
          </ul>
          <p>
            Le bourrage de mots-clés en blanc sur fond blanc, ou la liste de
            quarante technologies : c&apos;est visible, c&apos;est daté, et ça se
            retourne contre toi dès qu&apos;un humain ouvre le fichier.
          </p>

          <h2 id="projets">
            Transformer un projet d&apos;école en ligne crédible
          </h2>
          <p>
            C&apos;est ici que tout se joue, et c&apos;est ici que la
            quasi-totalité des CV d&apos;étudiants perd le recruteur.
          </p>
          <p>Le réflexe habituel donne ceci :</p>
          <blockquote>
            <p>
              <strong>Projet de groupe — Site web</strong> — Création d&apos;un
              site web en groupe dans le cadre du BTS. Technologies : HTML, CSS,
              PHP.
            </p>
          </blockquote>
          <p>
            Ce n&apos;est pas faux. C&apos;est simplement{" "}
            <strong>indistinguable des trente autres CV</strong> reçus le même
            jour, et ça ne dit rien de ce que <em>toi</em> tu as fait.
          </p>
          <p>
            La version qui fonctionne répond à quatre questions :{" "}
            <strong>
              quoi, pour qui, avec quoi, et quel a été mon rôle exact.
            </strong>
          </p>
          <blockquote>
            <p>
              <strong>Application de gestion de réservations</strong> — projet de
              groupe (4 personnes), 3 mois, BUT Informatique.
            </p>
            <p>
              Développement de l&apos;API REST (Node.js / Express) et du schéma
              PostgreSQL — 7 tables, authentification par JWT.
            </p>
            <p>
              Mise en place de l&apos;intégration continue avec GitHub Actions
              (tests automatiques à chaque <em>push</em>).
            </p>
            <p>
              Code : <code>github.com/…</code>
            </p>
          </blockquote>
          <p>
            La deuxième version n&apos;invente rien : c&apos;est le{" "}
            <strong>même</strong> projet. La différence tient à quatre choses —
            le rôle personnel est explicite, les technologies sont nommées
            précisément, il y a des éléments chiffrés vérifiables, et le code est
            consultable.
          </p>

          <h3 id="projet-nul">« Mais mon projet est nul »</h3>
          <p>
            Il ne l&apos;est pas — il est <em>scolaire</em>, ce qui n&apos;est pas
            la même chose, et le recruteur le sait. Il n&apos;attend pas un
            produit en production. Il vérifie <strong>trois choses</strong> : que
            tu sais nommer ce que tu as fait, que tu sais expliquer pourquoi tu
            l&apos;as fait ainsi, et que tu es capable de finir quelque chose. Un
            petit projet fini, propre et documenté bat un gros projet abandonné à
            60 %. À chaque fois.
          </p>

          <h3 id="github">Le lien GitHub : un pari à double tranchant</h3>
          <p>
            Mettre son GitHub sur son CV en informatique est presque
            obligatoire. Mais un dépôt ouvert est un pari :{" "}
            <strong>le recruteur va cliquer</strong>, et il va tomber sur ce que
            tu y as laissé.
          </p>
          <p>
            Avant de mettre le lien, vérifie trois points sur les deux ou trois
            dépôts que tu mets en avant :
          </p>
          <ul>
            <li>
              Un <strong>README</strong> existe et explique, en cinq lignes, ce
              que fait le projet, comment le lancer, et ce que tu as fait toi.
            </li>
            <li>
              Le dépôt <strong>n&apos;est pas</strong> une décharge de fichiers{" "}
              <code>test-final-v2-vrai.zip</code>.
            </li>
            <li>
              Il n&apos;y a <strong>aucun secret</strong> dans l&apos;historique :
              mot de passe, clé d&apos;API, fichier <code>.env</code>. C&apos;est
              fréquent, c&apos;est éliminatoire, et c&apos;est le premier truc
              qu&apos;un profil sécurité regarde.
            </li>
          </ul>
          <p>
            Si tes dépôts ne sont pas prêts, ne mets pas le lien tout de suite.
            Un lien absent est neutre ; un lien vers un dépôt vide est un point
            négatif.
          </p>

          <h2 id="erreurs">Les cinq erreurs qui reviennent le plus</h2>
          <ul>
            <li>
              <strong>Le CV à deux colonnes avec barre latérale colorée.</strong>{" "}
              Joli à l&apos;œil, souvent illisible pour la machine. Si tu y
              tiens, refais le test de l&apos;étape 0 : s&apos;il passe,
              garde-le.
            </li>
            <li>
              <strong>Les barres de compétences</strong> (« Python ★★★☆☆ »). Tes
              trois étoiles ne veulent rien dire pour le lecteur, et elles ne
              s&apos;extraient pas en texte. Remplace-les par un contexte :
              « Python — 2 projets, dont un scraper avec gestion des erreurs ».
            </li>
            <li>
              <strong>La photo, l&apos;âge, l&apos;adresse complète.</strong>{" "}
              Aucune valeur ajoutée sur un CV tech. La ville et la mobilité
              suffisent, et sont utiles : la contrainte géographique de
              l&apos;alternance est réelle.
            </li>
            <li>
              <strong>Le même CV envoyé partout.</strong> Réordonner les
              compétences et adapter trois lignes suffit dans la majorité des
              cas.
            </li>
            <li>
              <strong>L&apos;oubli du rythme d&apos;alternance.</strong>{" "}
              Écris-le en haut :{" "}
              <code>
                Alternance — rythme 3 semaines entreprise / 1 semaine école, à
                partir de septembre 2026
              </code>
              . Le recruteur a besoin de cette information pour savoir s&apos;il
              peut te prendre.
            </li>
          </ul>

          <h2 id="limites">Ce que ce travail ne réglera pas</h2>
          <p>
            Un CV bien construit{" "}
            <strong>enlève des raisons de t&apos;écarter</strong>. Il ne crée pas
            de poste et ne compense pas un ciblage à côté de la plaque. Si tu
            envoies un excellent CV à cent entreprises qui ne recrutent pas
            d&apos;alternant sur ton profil, il ne se passera rien.
          </p>
          <p>
            L&apos;Apec chiffrait en mars 2025 à{" "}
            <strong>
              67 % la part d&apos;étudiants du supérieur ayant rencontré des
              difficultés à trouver une entreprise d&apos;accueil
            </strong>
            . Ce n&apos;est pas une statistique sur ton CV : c&apos;est une
            statistique sur un marché tendu. Ton CV est{" "}
            <strong>le maillon que tu contrôles entièrement</strong> — raison
            suffisante pour le traiter sérieusement, et raison suffisante pour ne
            pas t&apos;arrêter là.
          </p>

          <h2 id="recap">Le récapitulatif, dans l&apos;ordre</h2>
          <ol>
            <li>
              Faire le test du copier-coller ; corriger la structure si le texte
              sort en désordre.
            </li>
            <li>
              Reprendre chaque projet et répondre aux quatre questions : quoi,
              pour qui, avec quoi, mon rôle exact.
            </li>
            <li>
              Nommer les technologies avec les mots exacts des offres visées —
              sans jamais en ajouter une qu&apos;on ne sait pas défendre.
            </li>
            <li>
              Nettoyer les deux ou trois dépôts GitHub mis en avant, README
              compris, avant de mettre le lien.
            </li>
            <li>
              Afficher en haut le rythme d&apos;alternance et la date de
              disponibilité.
            </li>
            <li>Refaire le test du copier-coller sur la version finale.</li>
          </ol>

          <ProseNote tone="accent">
            <p>
              Rien là-dedans ne prend plus d&apos;une soirée. Et à la différence
              du nombre de candidatures envoyées, c&apos;est un travail qui reste
              valable pour toutes les suivantes.
            </p>
          </ProseNote>
        </Prose>
      </Section>

      <ArticleOutro slug={slug} />
    </>
  );
}
