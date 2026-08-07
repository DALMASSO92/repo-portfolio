import type { Metadata } from "next";
import Link from "next/link";
import { Prose, TableScroll } from "@/components/Prose";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente et d'utilisation du service Garde-Site : offres, tarifs, résiliation sans engagement, rétractation, données personnelles.",
};

export default function CGV() {
  return (
    <Section>
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-encre sm:text-4xl">
          Conditions générales de vente et d&apos;utilisation (CGV/CGU)
        </h1>
        <p className="mt-4 text-sm font-medium text-ardoise">
          Version en vigueur au [DATE] — applicable à toute commande passée à
          compter de cette date.
        </p>

        <Prose className="mt-8">
          <h2>Article 1 — Identité du prestataire</h2>
          <p>
            Le service <strong>Garde-Site</strong> est exploité par{" "}
            <strong>[PRÉNOM NOM], entrepreneur individuel (EI)</strong>,
            micro-entrepreneur, SIRET <strong>[SIRET]</strong>, domicilié{" "}
            <strong>[ADRESSE]</strong> (ci-après « le Prestataire »).
            <br />
            Contact : <strong>[EMAIL_CONTACT]</strong> —{" "}
            <strong>[TELEPHONE]</strong> — site : <strong>[DOMAINE]</strong>.
            <br />
            <strong>TVA non applicable, art. 293 B du CGI.</strong>
          </p>

          <h2>Article 2 — Objet et champ d&apos;application</h2>
          <p>
            2.1. Les présentes conditions générales de vente et
            d&apos;utilisation (« CGV ») régissent la fourniture par le
            Prestataire de services de{" "}
            <strong>
              maintenance de sites web par abonnement mensuel sans engagement
            </strong>
            , ainsi que de prestations ponctuelles, à tout client professionnel
            ou consommateur (« le Client »).
          </p>
          <p>
            2.2. Toute souscription implique l&apos;acceptation préalable,
            expresse et sans réserve des présentes CGV. Elles prévalent sur
            tout autre document du Client. Le Prestataire peut les modifier ;
            la version applicable est celle en vigueur au jour de la commande,
            puis, pour l&apos;abonnement en cours, toute modification est
            notifiée au Client au moins <strong>30 jours</strong> avant son
            entrée en vigueur — le Client restant libre de résilier à tout
            moment (article 10).
          </p>
          <p>
            2.3. « Consommateur » s&apos;entend au sens de l&apos;article
            liminaire du Code de la consommation : toute personne physique
            agissant à des fins n&apos;entrant pas dans le cadre de son
            activité commerciale, industrielle, artisanale, libérale ou
            agricole. Les clauses propres aux consommateurs (articles 14 et 15)
            ne s&apos;appliquent qu&apos;à eux.
          </p>

          <h2>Article 3 — Description des offres et tarifs</h2>
          <p>
            3.1. Prix exprimés <strong>nets de taxes</strong> — TVA non
            applicable, art. 293 B du CGI.
          </p>
          <TableScroll>
            <table>
              <thead>
                <tr>
                  <th>Offre</th>
                  <th>Cible</th>
                  <th>Prix</th>
                  <th>Contenu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Vigie</strong>
                  </td>
                  <td>WordPress</td>
                  <td>
                    <strong>49 €/mois</strong>
                  </td>
                  <td>
                    Mises à jour cœur et extensions (hebdomadaires),
                    sauvegardes quotidiennes externalisées, surveillance de
                    disponibilité (uptime) 24/7, scan de sécurité, rapport
                    mensuel
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Capitaine</strong>
                  </td>
                  <td>WordPress</td>
                  <td>
                    <strong>89 €/mois</strong>
                  </td>
                  <td>
                    Tout Vigie + 1 h de retouches/mois (article 4), support
                    prioritaire sous 24 h ouvrées, optimisation de vitesse
                    trimestrielle
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phare</strong>
                  </td>
                  <td>Next.js / React / Webflow / sites générés par IA</td>
                  <td>
                    <strong>129 €/mois</strong>
                  </td>
                  <td>
                    Surveillance avancée (uptime, SSL, formulaires, erreurs
                    JS), mises à jour de dépendances mensuelles, correctifs,
                    1 h de retouches/mois (article 4), rapport technique
                    mensuel
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Remise en état</strong> (prestation ponctuelle,
                    hors abonnement)
                  </td>
                  <td>Tous sites</td>
                  <td>
                    <strong>149 €</strong> (forfait unique)
                  </td>
                  <td>
                    Remise en fonctionnement d&apos;un site dégradé : mises à
                    jour en retard, corrections d&apos;urgence, nettoyage de
                    malware léger. Montant <strong>crédité</strong> sur le
                    premier mois en cas de souscription d&apos;un abonnement
                    dans les 30 jours suivant la prestation.
                  </td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
          <p>
            3.2. La surveillance « 24h/24 » désigne une{" "}
            <strong>surveillance automatisée continue</strong> ; les
            interventions humaines sont réalisées aux jours et heures ouvrés,
            dans les délais indicatifs annoncés.
          </p>
          <p>
            3.3. Le « Bilan de santé » gratuit est un audit automatisé, sans
            engagement, fourni à titre purement indicatif.
          </p>

          <h2>Article 4 — Quota de retouches (offres Capitaine et Phare)</h2>
          <p>
            4.1. Le quota de retouches est de{" "}
            <strong>1 heure par mois civil</strong>, composé de tâches
            unitaires n&apos;excédant pas <strong>30 minutes</strong> chacune
            (ex. : modification de texte ou d&apos;image, ajustement CSS
            mineur, correction d&apos;un lien).
          </p>
          <p>
            4.2. Le quota est <strong>non reportable</strong> d&apos;un mois
            sur l&apos;autre, non cessible et non remboursable s&apos;il
            n&apos;est pas consommé.
          </p>
          <p>
            4.3. Toute demande excédant le quota ou la durée unitaire fait
            l&apos;objet d&apos;un devis séparé, que le Client est libre
            d&apos;accepter ou non.
          </p>

          <h2>Article 5 — Exclusions de périmètre</h2>
          <p>
            Sont expressément <strong>exclus</strong> de tous les abonnements,
            sauf devis séparé accepté :
          </p>
          <ul>
            <li>
              la refonte totale ou partielle du site (design, structure,
              migration de technologie) ;
            </li>
            <li>
              le développement de <strong>nouvelles fonctionnalités</strong>{" "}
              (module, e-commerce, espace membre, API, etc.) ;
            </li>
            <li>la création de contenus (rédaction, photos, vidéos) ;</li>
            <li>
              le référencement (SEO/SEA), la publicité et le community
              management ;
            </li>
            <li>
              la résolution d&apos;incidents imputables à l&apos;hébergeur du
              Client, au registrar, à des services tiers ou à des
              interventions du Client ou d&apos;un tiers sur le site ;
            </li>
            <li>
              la désinfection lourde d&apos;un site compromis (au-delà du
              « malware léger » couvert par la Remise en état).
            </li>
          </ul>

          <h2>Article 6 — Prérequis et obligations du Client</h2>
          <p>
            6.1. Le Client fournit au Prestataire, avant le démarrage, des{" "}
            <strong>accès valides</strong> : administration du site,
            hébergement (FTP/SSH ou panneau), et le cas échéant nom de domaine
            et base de données. Les identifiants sont transmis par un moyen
            sécurisé indiqué par le Prestataire (jamais en clair dans un
            e-mail).
          </p>
          <p>
            6.2. Le Client garantit être titulaire des droits sur le site et
            ses contenus, et maintenir en vigueur ses contrats
            d&apos;hébergement et de nom de domaine.
          </p>
          <p>
            6.3. Tout retard ou impossibilité d&apos;exécution imputable à des
            accès manquants, invalides ou révoqués suspend les obligations du
            Prestataire sans suspendre la facturation, après notification au
            Client et un délai de régularisation de <strong>7 jours</strong>.
          </p>
          <p>
            6.4. Le Client informe le Prestataire de toute intervention
            qu&apos;il réalise lui-même (ou fait réaliser) sur le site.
          </p>

          <h2>Article 7 — Sauvegardes</h2>
          <p>
            7.1. Le Prestataire réalise les sauvegardes prévues par
            l&apos;offre souscrite et les conserve sur un stockage externalisé
            distinct de l&apos;hébergement du site, avec une profondeur de
            rétention de <strong>[X jours — à préciser, ex. 30 jours]</strong>.
          </p>
          <p>
            7.2. Les sauvegardes constituent une mesure de précaution
            raisonnable et non une garantie absolue de restitution : le Client
            demeure responsable de conserver ses propres copies des contenus
            sources qu&apos;il détient (médias originaux, exports).
          </p>
          <p>
            7.3. En fin de contrat, les sauvegardes détenues par le Prestataire
            sont restituées sur demande formulée sous <strong>30 jours</strong>
            , puis supprimées (voir article 17).
          </p>

          <h2>Article 8 — Obligation de moyens</h2>
          <p>
            Le Prestataire est tenu d&apos;une{" "}
            <strong>obligation de moyens</strong> et non de résultat. Il
            exécute les prestations avec diligence et selon les règles de
            l&apos;art, mais ne garantit ni l&apos;absence totale
            d&apos;interruption, de faille ou d&apos;incident de sécurité, ni
            un niveau de disponibilité chiffré du site, lequel dépend notamment
            de l&apos;hébergeur du Client et de facteurs tiers.
          </p>

          <h2>Article 9 — Commande, durée, facturation et paiement</h2>
          <p>
            9.1. La souscription prend effet à l&apos;acceptation du devis/bon
            de commande ou à la validation en ligne, sous réserve de
            l&apos;article 14 pour les consommateurs.
          </p>
          <p>
            9.2. L&apos;abonnement est conclu pour une durée d&apos;
            <strong>un mois, tacitement renouvelable</strong>,{" "}
            <strong>sans engagement de durée</strong>.
          </p>
          <p>
            9.3. La facturation est <strong>mensuelle</strong>, d&apos;avance,
            par prélèvement ou virement ; une facture conforme est émise à
            chaque échéance, portant la mention « TVA non applicable, art.
            293 B du CGI ». Paiement exigible à réception, au plus tard sous{" "}
            <strong>[X jours — ex. 8 jours]</strong>.
          </p>
          <p>
            9.4. <strong>Retard de paiement.</strong>
          </p>
          <ul>
            <li>
              <strong>Client professionnel</strong> : pénalités de retard
              exigibles de plein droit dès le lendemain de l&apos;échéance,
              sans mise en demeure préalable, au taux de{" "}
              <strong>trois fois le taux d&apos;intérêt légal</strong> en
              vigueur, ainsi qu&apos;une{" "}
              <strong>indemnité forfaitaire de recouvrement de 40 €</strong>{" "}
              par facture impayée (art. L.441-10 et D.441-5 C. com.) ; si les
              frais réels de recouvrement sont supérieurs, une indemnisation
              complémentaire pourra être demandée sur justificatifs. Aucun
              escompte pour paiement anticipé.
            </li>
            <li>
              <strong>Client consommateur</strong> : intérêts de retard au{" "}
              <strong>taux d&apos;intérêt légal</strong> après mise en demeure
              restée infructueuse ; l&apos;indemnité forfaitaire de 40 € ne
              s&apos;applique pas.
            </li>
          </ul>
          <p>
            9.5. En cas d&apos;impayé persistant plus de{" "}
            <strong>15 jours</strong> après mise en demeure, le Prestataire
            peut suspendre les prestations puis résilier le contrat, sans
            préjudice des sommes dues.
          </p>

          <h2>Article 10 — Résiliation</h2>
          <p>
            10.1. <strong>Par le Client</strong> : à tout moment,{" "}
            <strong>
              sans motif, sans frais et sans préavis autre que celui-ci
            </strong>
            , par simple e-mail à <strong>[EMAIL_CONTACT]</strong> (ou via le
            dispositif de résiliation en ligne si la souscription a été faite
            en ligne). La résiliation prend effet à la{" "}
            <strong>fin du mois d&apos;abonnement en cours</strong> ; aucune
            échéance ultérieure n&apos;est due. Les sommes déjà versées pour le
            mois en cours restent acquises, le mois étant entamé.
          </p>
          <p>
            10.2. <strong>Par le Prestataire</strong> : à tout moment avec un
            préavis de <strong>30 jours</strong> par e-mail, ou sans préavis en
            cas de manquement grave du Client (impayé — article 9.5, accès
            frauduleux, contenus illicites hébergés sur le site maintenu).
          </p>
          <p>
            10.3. À la fin du contrat, le Prestataire restitue les accès,
            transmet la dernière sauvegarde sur demande (article 7.3) et cesse
            tout traitement de données pour le compte du Client (article 17).
          </p>

          <h2>
            Article 11 — Consommateurs : reconduction tacite (information
            Chatel)
          </h2>
          <p>
            Pour les contrats à tacite reconduction conclus avec des
            consommateurs, l&apos;article L.215-1 du Code de la consommation
            impose au professionnel d&apos;informer le consommateur de sa
            faculté de ne pas reconduire le contrat.{" "}
            <strong>
              Le présent abonnement étant résiliable à tout moment, sans
              engagement ni période minimale (article 10.1), le Client peut y
              mettre fin par simple e-mail, à tout moment, avec effet à la fin
              du mois en cours.
            </strong>{" "}
            Cette faculté permanente de résiliation est rappelée dans chaque
            rapport mensuel.
          </p>

          <h2>Article 12 — Responsabilité</h2>
          <p>
            12.1. La responsabilité du Prestataire ne peut être engagée
            qu&apos;en cas de faute prouvée dans l&apos;exécution de ses
            obligations de moyens, et seulement pour les{" "}
            <strong>dommages directs</strong> en résultant.
          </p>
          <p>
            12.2. <strong>Vis-à-vis des clients professionnels</strong>, la
            responsabilité totale du Prestataire, toutes causes confondues, est
            plafonnée au montant des sommes effectivement versées par le Client
            au titre des <strong>douze (12) derniers mois</strong>{" "}
            d&apos;abonnement (ou au montant du forfait pour une prestation
            ponctuelle). Sont exclus les dommages indirects : perte de chiffre
            d&apos;affaires, de clientèle, de données non couvertes par
            l&apos;article 7, préjudice d&apos;image.
          </p>
          <p>
            12.3. <strong>Vis-à-vis des consommateurs</strong>, les limitations
            ci-dessus ne s&apos;appliquent que dans la mesure permise par la
            loi ; rien dans les présentes ne limite la responsabilité du
            Prestataire en cas de dol, de faute lourde ou de dommage corporel,
            ni ne prive le consommateur des garanties légales.
          </p>
          <p>
            12.4. Le Prestataire n&apos;est pas responsable des défaillances
            imputables à l&apos;hébergeur du Client, aux éditeurs de CMS,
            thèmes, extensions ou dépendances tiers, ni des cas de force
            majeure (art. 1218 C. civ.).
          </p>

          <h2>Article 13 — Propriété intellectuelle</h2>
          <p>
            Les correctifs, scripts et configurations produits dans le cadre
            des prestations sont, après complet paiement, utilisables par le
            Client pour les besoins du site maintenu. Le Prestataire conserve
            la propriété de ses outils, méthodes et savoir-faire génériques.
            Chaque partie conserve la propriété de ses éléments préexistants.
          </p>

          <h2>Article 14 — Droit de rétractation (consommateurs uniquement)</h2>
          <p>
            14.1. Conformément à l&apos;article L.221-18 du Code de la
            consommation, le consommateur qui souscrit à distance dispose
            d&apos;un délai de <strong>quatorze (14) jours</strong> à compter
            de la conclusion du contrat pour se rétracter, sans motif ni
            pénalité, en notifiant sa décision par déclaration dénuée
            d&apos;ambiguïté (e-mail à <strong>[EMAIL_CONTACT]</strong>) ou au
            moyen du formulaire type reproduit en annexe.
          </p>
          <p>
            14.2. <strong>Exécution anticipée sur demande expresse.</strong> Si
            le consommateur souhaite que le service commence{" "}
            <strong>avant l&apos;expiration du délai de rétractation</strong>,
            il en fait la <strong>demande expresse</strong> (case à cocher ou
            mention datée et signée sur le devis). En cas de rétractation
            ultérieure dans le délai, il devra au Prestataire un montant{" "}
            <strong>proportionnel au service déjà fourni</strong>{" "}
            jusqu&apos;à la notification de sa rétractation (art. L.221-25 C.
            conso).
          </p>
          <p>
            14.3. <strong>Perte du droit de rétractation.</strong> Le droit de
            rétractation ne peut plus être exercé pour un service{" "}
            <strong>pleinement exécuté</strong> avant la fin du délai, lorsque
            l&apos;exécution a commencé avec l&apos;
            <strong>accord préalable exprès</strong> du consommateur et sa{" "}
            <strong>
              reconnaissance expresse de la perte de son droit de rétractation
            </strong>{" "}
            une fois le contrat pleinement exécuté (art. L.221-28, 1° C.
            conso). Cette double mention est recueillie lors de la commande
            (notamment pour la prestation ponctuelle « Remise en état »
            exécutée immédiatement).
          </p>
          <p>
            14.4. En cas de rétractation, le remboursement des sommes versées
            (déduction faite, le cas échéant, du prorata de l&apos;article
            14.2) intervient au plus tard sous <strong>14 jours</strong>, par
            le même moyen de paiement.
          </p>
          <p>
            <strong>Annexe — Formulaire type de rétractation</strong> (à
            compléter uniquement si vous souhaitez vous rétracter) :
          </p>
          <blockquote>
            <p>
              À l&apos;attention de [PRÉNOM NOM] — Garde-Site, [ADRESSE],
              [EMAIL_CONTACT] :
              <br />
              Je vous notifie par la présente ma rétractation du contrat
              portant sur la prestation de services ci-dessous :
              <br />— Commandée le : …… / Nom du consommateur : …… / Adresse :
              ……
              <br />— Signature (en cas d&apos;envoi papier) : …… / Date : ……
            </p>
          </blockquote>

          <h2>Article 15 — Médiation de la consommation et réclamations</h2>
          <p>
            15.1. Toute réclamation est adressée d&apos;abord au Prestataire :{" "}
            <strong>[EMAIL_CONTACT]</strong> ou <strong>[ADRESSE]</strong>. Le
            Prestataire s&apos;efforce d&apos;y répondre sous 15 jours.
          </p>
          <p>
            15.2. Conformément aux articles L.612-1 et suivants du Code de la
            consommation, si la réclamation écrite n&apos;a pas abouti, le{" "}
            <strong>consommateur</strong> peut recourir gratuitement au
            médiateur de la consommation dont relève le Prestataire, dans un
            délai d&apos;un an à compter de sa réclamation écrite :
          </p>
          <blockquote>
            <p>
              <strong>[MÉDIATEUR — NOM]</strong>
              <br />
              <strong>[MÉDIATEUR — ADRESSE POSTALE]</strong>
              <br />
              <strong>[MÉDIATEUR — SITE WEB / FORMULAIRE DE SAISINE]</strong>
            </p>
          </blockquote>
          <p>
            15.3. Plateforme européenne de règlement en ligne des litiges
            (RLL) :{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>

          <h2>Article 16 — Données personnelles</h2>
          <p>
            Le Prestataire traite les données du Client (contact, facturation)
            conformément au RGPD et à sa{" "}
            <Link href="/confidentialite/">Politique de confidentialité</Link>,
            qui précise finalités, bases légales, durées de conservation et
            droits des personnes.
          </p>

          <h2>
            Article 17 — Sous-traitance de données personnelles (art. 28 RGPD)
          </h2>
          <p>
            17.1. Dans le cadre de la maintenance, le Prestataire peut être
            amené à accéder à des données personnelles contenues dans le site
            du Client (comptes utilisateurs, messages de formulaires,
            commandes…). Pour ces traitements, le{" "}
            <strong>Client est responsable du traitement</strong> et le{" "}
            <strong>Prestataire agit en qualité de sous-traitant</strong> au
            sens de l&apos;article 28 du RGPD.
          </p>
          <p>17.2. À ce titre, le Prestataire s&apos;engage à :</p>
          <ul>
            <li>
              a) ne traiter les données que sur{" "}
              <strong>instruction documentée</strong> du Client et aux seules
              fins d&apos;exécution des prestations ;
            </li>
            <li>
              b) garantir la <strong>confidentialité</strong> (engagement
              personnel, aucun personnel tiers sans information du Client) ;
            </li>
            <li>
              c) mettre en œuvre les{" "}
              <strong>
                mesures techniques et organisationnelles appropriées
              </strong>{" "}
              (art. 32 RGPD) : accès chiffrés, gestionnaire de mots de passe,
              authentification forte lorsque disponible, sauvegardes chiffrées
              hébergées dans l&apos;Union européenne{" "}
              <strong>[à vérifier selon votre solution]</strong> ;
            </li>
            <li>
              d) ne recruter un <strong>sous-traitant ultérieur</strong> (ex.
              hébergeur des sauvegardes) qu&apos;avec l&apos;autorisation
              écrite générale du Client, la liste à jour étant tenue à
              disposition, le Client pouvant s&apos;opposer à tout changement ;
            </li>
            <li>
              e) <strong>assister</strong> le Client dans la réponse aux
              demandes d&apos;exercice de droits des personnes et dans le
              respect de ses obligations (sécurité, notification de violation,
              analyses d&apos;impact) ;
            </li>
            <li>
              f) <strong>notifier</strong> au Client toute violation de données
              dans les meilleurs délais après en avoir eu connaissance ;
            </li>
            <li>
              g) au terme du contrat,{" "}
              <strong>supprimer ou restituer</strong> l&apos;ensemble des
              données, au choix du Client, et détruire les copies existantes
              sauf obligation légale de conservation ;
            </li>
            <li>
              h) mettre à disposition les informations nécessaires pour
              démontrer le respect du présent article et permettre les{" "}
              <strong>audits</strong> raisonnables du Client.
            </li>
          </ul>
          <p>
            17.3. Aucun transfert de données hors Union européenne n&apos;est
            réalisé à l&apos;initiative du Prestataire sans garanties
            appropriées (art. 44 et s. RGPD) et information préalable du
            Client.
          </p>

          <h2>Article 18 — Droit applicable et litiges</h2>
          <p>
            18.1. Les présentes CGV sont soumises au{" "}
            <strong>droit français</strong>.
          </p>
          <p>
            18.2. <strong>Clients professionnels</strong> : tout litige relève
            des tribunaux compétents dans le ressort du domicile du
            Prestataire, nonobstant pluralité de défendeurs ou appel en
            garantie.
          </p>
          <p>
            18.3. <strong>Consommateurs</strong> : le consommateur peut saisir,
            outre la médiation de l&apos;article 15, soit l&apos;une des
            juridictions territorialement compétentes en vertu du Code de
            procédure civile, soit la juridiction du lieu où il demeurait au
            moment de la conclusion du contrat ou de la survenance du fait
            dommageable (art. R.631-3 C. conso).
          </p>
        </Prose>
      </div>
    </Section>
  );
}
