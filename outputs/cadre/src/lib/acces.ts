/**
 * Contrôle d'accès au téléchargement.
 *
 * ÉTAT ACTUEL : aucun paiement n'est branché. Aucun compte n'a été créé et aucune clé
 * d'API n'existe — c'était une limite explicite de la mission de construction.
 * Le bouton « mode démonstration » du générateur contourne donc ce module.
 *
 * POUR BRANCHER LE PAIEMENT (voir README-DEMARRAGE.md, étape « Paddle ») :
 *
 *  1. Créer le compte Paddle et le produit à 19 €, récupérer le token client et
 *     l'identifiant de prix.
 *  2. Charger Paddle.js, puis remplacer `ouvrirPaiement` par l'ouverture de la
 *     surcouche de paiement, en y incluant les DEUX cases à cocher exigées par
 *     l'article L221-28, 13° du code de la consommation (renonciation au droit de
 *     rétractation), plus la case d'autorisation parentale pour les mineurs.
 *  3. Traiter l'événement de paiement validé côté serveur — jamais côté client seul —
 *     via un webhook Paddle, et délivrer une clé de licence.
 *  4. Remplacer `estDebloque` par une vérification de cette clé auprès de ton API.
 *
 * ⚠️ Ne jamais considérer un déblocage purement local comme une preuve de paiement :
 * n'importe qui peut modifier le stockage de son navigateur. La vérification doit
 * être faite côté serveur.
 */

const CLE_STOCKAGE = "cadre.acces";

export function estDebloque(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CLE_STOCKAGE) === "ok";
}

export function memoriserAcces() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CLE_STOCKAGE, "ok");
}

export function ouvrirPaiement() {
  if (typeof window === "undefined") return;
  window.alert(
    "Le paiement n'est pas encore branché.\n\n" +
      "Voir README-DEMARRAGE.md, étape « Brancher Paddle », puis src/lib/acces.ts.",
  );
}
