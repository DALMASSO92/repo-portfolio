import type { Metadata } from "next";
import { ArticleOutro } from "@/components/ArticleOutro";
import { Prose, ProseHeader, ProseNote } from "@/components/Prose";
import { Section } from "@/components/ui";

const slug = "candidatures-alternance-informatique-sans-reponse";

export const metadata: Metadata = {
  title: {
    absolute: "Candidatures alternance : aucune réponse, pourquoi ?",
  },
  description:
    "Aucune réponse à tes candidatures d'alternance en informatique ? Diagnostic des 5 maillons qui cassent une candidature, et comment les tester.",
};

export default function ArticleDiagnostic() {
  return (
    <>
      <ProseHeader
        kicker="blog · diagnostic"
        title="J'envoie des candidatures d'alternance en informatique et je n'ai aucune réponse : le diagnostic en 5 maillons"
        meta="Août 2026 · 8 min de lecture"
      />

      <Section>
        <Prose>
          <p>
            Tu as envoyé quarante, cent, peut-être trois cents candidatures. Tu
            n&apos;as presque rien reçu : quelques refus automatiques, et surtout
            du silence. Tu commences à te demander si le problème vient de toi.
          </p>
          <p>
            Il faut le dire tout de suite :{" "}
            <strong>le marché est réellement dur.</strong> L&apos;Apec chiffrait
            en mars 2025 à{" "}
            <strong>
              67 % la part d&apos;étudiants du supérieur ayant rencontré des
              difficultés à trouver une entreprise d&apos;accueil
            </strong>
            , et la presse a documenté des cas extrêmes — un témoignage recueilli
            par L&apos;Étudiant fait état de{" "}
            <strong>944 candidatures pour 3 entretiens et 0 contrat</strong>. Le
            volume de contrats a reculé en 2025 (846 700 contrats
            d&apos;apprentissage débutés, soit <strong>−5 %</strong>, et{" "}
            <strong>−7,8 % dans le supérieur</strong>). Tu n&apos;imagines pas la
            difficulté.
          </p>
          <p>
            Mais ces chiffres disent aussi autre chose :{" "}
            <strong>
              quelqu&apos;un qui envoie 944 candidatures n&apos;a pas un problème
              d&apos;effort.
            </strong>{" "}
            Il a un problème quelque part dans la chaîne, et il le répète 944
            fois. Envoyer plus ne corrige rien — ça amplifie.
          </p>
          <p>
            Une candidature qui aboutit à un entretien traverse{" "}
            <strong>cinq maillons</strong>. Si un seul est cassé, la chaîne
            entière ne produit rien, et le symptôme est toujours le même : le
            silence. D&apos;où l&apos;impossibilité de deviner. Il faut tester,
            dans l&apos;ordre.
          </p>

          <h2 id="maillon-1">
            Maillon 1 — Le ciblage : est-ce que tu écris à des gens qui peuvent
            te répondre oui ?
          </h2>
          <p>
            C&apos;est le maillon le plus souvent cassé, et le plus rarement
            soupçonné. On préfère croire que le CV est mauvais : c&apos;est plus
            facile à corriger.
          </p>
          <p>
            <strong>Le test.</strong> Prends tes vingt dernières candidatures.
            Pour chacune, réponds par oui ou non à ces trois questions :
          </p>
          <ol>
            <li>
              L&apos;entreprise a-t-elle <strong>déjà accueilli</strong> un
              alternant en informatique ?
            </li>
            <li>
              Ton <strong>rythme d&apos;alternance</strong> est-il compatible
              avec ce qu&apos;elle cherche ?
            </li>
            <li>
              Le poste correspond-il à ce que tu peux{" "}
              <strong>réellement</strong> faire aujourd&apos;hui, pas dans deux
              ans ?
            </li>
          </ol>
          <p>
            <strong>Le signe que c&apos;est cassé</strong> : moins de quinze
            « oui » sur les vingt lignes. Tu candidates dans le vide.
          </p>
          <p>
            Deux pièges spécifiques à l&apos;informatique. D&apos;abord,{" "}
            <strong>
              les offres d&apos;alternance en tech sont souvent rédigées comme
              des offres de junior confirmé
            </strong>{" "}
            — cinq technologies, deux ans d&apos;expérience demandés. Si tu
            t&apos;auto-élimines à chaque fois, ton volume réel de candidatures
            pertinentes s&apos;effondre sans que tu t&apos;en rendes compte.
            Ensuite,{" "}
            <strong>
              une grande partie du tissu qui recrute des alternants en
              informatique ne publie pas d&apos;offres
            </strong>{" "}
            : PME avec un service informatique de trois personnes, agences web,
            éditeurs locaux. Si tu ne candidates que sur les job boards, tu ne
            les vois jamais.
          </p>
          <ProseNote title="Précision importante" tone="accent">
            <p>
              Personne n&apos;a le droit de te faire payer pour te fournir une
              liste d&apos;entreprises ou te mettre en relation avec elles (art.
              L5321-3 du Code du travail). Ce dont tu as besoin, c&apos;est{" "}
              <strong>
                d&apos;une méthode pour construire ta propre liste
              </strong>{" "}
              — un travail que tu peux faire seul.
            </p>
          </ProseNote>

          <h2 id="maillon-2">
            Maillon 2 — Le canal : est-ce que ton message arrive à quelqu&apos;un
            ?
          </h2>
          <p>
            <strong>Le test.</strong> Sur tes vingt dernières candidatures,
            combien sont parties vers une <strong>personne identifiée</strong>{" "}
            (un prénom, un nom, une fonction) plutôt que vers{" "}
            <code>contact@</code>, <code>recrutement@</code> ou un formulaire ?
          </p>
          <p>
            <strong>Le signe que c&apos;est cassé</strong> : moins de cinq.
          </p>
          <p>
            Une adresse générique dans une PME arrive souvent dans une boîte que
            personne ne relève quotidiennement. Un formulaire de job board dépose
            ta candidature dans une pile. Dans une entreprise de vingt personnes,
            celui qui décide de prendre un alternant en informatique, c&apos;est
            le responsable technique, le lead dev ou le dirigeant — quelqu&apos;un
            dont le nom est très souvent public.
          </p>
          <p>
            En informatique, tu as même un avantage rare :{" "}
            <strong>
              beaucoup de tes futurs interlocuteurs sont visibles publiquement
            </strong>
            , par leur activité professionnelle en ligne ou leurs contributions
            techniques. Écrire à la bonne personne change plus de choses que
            réécrire son CV pour la sixième fois.
          </p>

          <h2 id="maillon-3">
            Maillon 3 — Le CV : est-ce qu&apos;il est seulement lisible ?
          </h2>
          <p>
            <strong>Le test, en deux minutes.</strong> Ouvre ton CV en PDF,
            sélectionne tout, copie, colle dans un bloc-notes brut.
          </p>
          <p>
            <strong>Le signe que c&apos;est cassé</strong> : rien ne se colle
            (ton CV est une image, donc invisible pour un logiciel de tri), ou le
            texte sort dans le désordre avec des colonnes entremêlées.
          </p>
          <p>
            Deuxième test, plus dur :{" "}
            <strong>
              fais lire ton CV à quelqu&apos;un de ta promo pendant trente
              secondes chrono, puis demande-lui ce que tu sais faire.
            </strong>{" "}
            S&apos;il répond « du développement », le recruteur qui te consacre le
            même temps hésitera aussi.
          </p>
          <p>
            Le point spécifique tech : les{" "}
            <strong>technologies doivent être écrites en toutes lettres</strong>,
            telles qu&apos;elles apparaissent dans les offres. Un recruteur qui
            cherche <code>Symfony</code> dans sa base ne trouvera jamais un CV qui
            dit « développement web PHP ».
          </p>

          <h2 id="maillon-4">
            Maillon 4 — La preuve : est-ce qu&apos;on peut vérifier que tu sais
            faire ?
          </h2>
          <p>
            C&apos;est le maillon où l&apos;informatique se distingue vraiment
            des autres secteurs — et celui que les conseils généralistes ignorent
            complètement.
          </p>
          <p>
            Dans la plupart des domaines, un étudiant sans expérience ne peut
            rien prouver. <strong>En informatique, si.</strong> Ton code est
            consultable. Et cette possibilité se retourne contre toi si tu ne
            t&apos;en sers pas : quand deux CV se ressemblent, celui avec un dépôt
            propre et documenté gagne.
          </p>
          <p>
            <strong>Le test.</strong> Ouvre ton profil GitHub en navigation
            privée, comme le ferait quelqu&apos;un qui ne te connaît pas. Trente
            secondes, puis réponds :
          </p>
          <ul>
            <li>
              Les deux ou trois projets mis en avant ont-ils un{" "}
              <strong>README</strong> qui explique ce qu&apos;ils font, comment
              les lancer, et ce que <strong>tu</strong> as fait dedans ?
            </li>
            <li>Le dernier commit date-t-il de moins de trois mois ?</li>
            <li>
              Y a-t-il un secret qui traîne — un <code>.env</code>, une clé
              d&apos;API, un mot de passe en dur ?
            </li>
          </ul>
          <p>
            <strong>Le signe que c&apos;est cassé</strong> : pas de README, un
            profil vide, ou pire, un dépôt qui expose une clé. Ce dernier point
            est éliminatoire, et pas seulement en cybersécurité.
          </p>
          <p>
            Un détail qui compte :{" "}
            <strong>
              la lettre de motivation classique joue un rôle bien moindre en tech
            </strong>
            . Ce qui la remplace utilement, c&apos;est un lien vers quelque chose
            de réel et deux phrases qui expliquent ce que tu y as fait.
          </p>

          <h2 id="maillon-5">
            Maillon 5 — Le message et la relance : le maillon le moins coûteux à
            réparer
          </h2>
          <p>
            <strong>Le test.</strong> Relis les trois premières lignes de ton
            dernier mail de candidature. Est-ce qu&apos;elles parlent de{" "}
            <strong>l&apos;entreprise</strong> ou est-ce qu&apos;elles parlent de{" "}
            <strong>toi</strong> ?
          </p>
          <p>
            <strong>Le signe que c&apos;est cassé</strong> : ton mail commence par
            « Je suis étudiant en… et je recherche une alternance… ». C&apos;est
            le début de l&apos;écrasante majorité des mails reçus, et le lecteur
            décroche à la deuxième ligne. Une accroche qui montre que tu as
            regardé ce que fait l&apos;entreprise — son produit, sa stack
            technique, une offre passée — te distingue immédiatement, et ça prend
            cinq minutes.
          </p>
          <p>
            <strong>Et la relance ?</strong> C&apos;est l&apos;action au meilleur
            rapport effort/résultat de toute ta recherche, et presque personne ne
            la fait. Une relance, une seule, <strong>sept à dix jours</strong>{" "}
            après l&apos;envoi, courte, polie, qui rappelle le poste et ajoute un
            élément nouveau (un projet terminé depuis, une précision sur ta
            disponibilité). Sans réponse ensuite : tu passes à la suivante et tu
            n&apos;y repenses plus.
          </p>
          <ProseNote title="Une nuance utile pour ton moral" tone="vert">
            <p>
              L&apos;absence de réponse ne signifie pas un refus. Les délais
              varient énormément, et beaucoup de petites structures ne répondent
              jamais aux candidatures non retenues — non par mépris, mais parce
              que personne n&apos;est chargé de le faire.{" "}
              <strong>
                Ne lis pas le silence comme un jugement sur ta valeur.
              </strong>{" "}
              Lis-le comme une absence d&apos;information.
            </p>
          </ProseNote>

          <h2 id="ordre">
            Comment utiliser ce diagnostic sans y passer un mois
          </h2>
          <p>
            L&apos;ordre compte. Les maillons 1 et 2 sont en amont : s&apos;ils
            sont cassés, améliorer le CV ne produira rien. Beaucoup
            d&apos;étudiants font l&apos;inverse — ils refont leur CV cinq fois
            parce que c&apos;est la partie visible — et s&apos;épuisent sans rien
            changer.
          </p>
          <p>Un déroulé réaliste sur une semaine :</p>
          <ol>
            <li>
              <strong>Soir 1</strong> — maillons 1 et 2. Les deux tests sur tes
              vingt dernières candidatures. Inconfortable, et de loin le plus
              rentable.
            </li>
            <li>
              <strong>Soir 2</strong> — maillon 3. Test du copier-coller, test
              des trente secondes, corrections.
            </li>
            <li>
              <strong>Soir 3</strong> — maillon 4. Nettoyage de deux dépôts,
              README écrits.
            </li>
            <li>
              <strong>Soir 4</strong> — maillon 5. Réécriture de l&apos;accroche,
              mise en place d&apos;un suivi des relances.
            </li>
            <li>
              <strong>Ensuite</strong> — <strong>vingt candidatures</strong>, pas
              deux cents. Vingt bien faites, tracées, avec relance programmée à
              J+8.
            </li>
          </ol>
          <p>
            <strong>Puis tu mesures.</strong> Vingt candidatures ciblées et
            relancées donnent une information exploitable ; deux cents envoyées à
            l&apos;aveugle n&apos;en donnent aucune, sinon de l&apos;épuisement.
          </p>

          <h2 id="limites">Ce qu&apos;aucune méthode ne peut promettre</h2>
          <p>
            Soyons francs : rien de tout ça ne garantit un contrat. Le nombre
            d&apos;offres a baissé, la concurrence par offre a augmenté, et une
            part du résultat ne dépend pas de toi — le budget d&apos;une
            entreprise, un poste gelé en juillet, un candidat interne déjà
            pressenti.
          </p>
          <p>
            Ce que ce diagnostic permet, en revanche, c&apos;est{" "}
            <strong>
              d&apos;arrêter de répéter la même erreur des centaines de fois
            </strong>
            . C&apos;est très exactement ce qui distingue les 944 candidatures
            sans résultat d&apos;une recherche qui avance.
          </p>
        </Prose>
      </Section>

      <ArticleOutro slug={slug} />
    </>
  );
}
