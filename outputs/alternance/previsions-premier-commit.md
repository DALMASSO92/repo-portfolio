# Prévisions — Premier Commit

Hypothèses fondées uniquement sur `recherche-alternance.md` et `branding-premier-commit.md`. Chaque hypothèse indique son statut : **sourcé** (donnée externe vérifiée) ou **posé** (estimation prudente de notre part, à valider par les faits). Établi le 08/08/2026.

## 1. Hypothèses

| Hypothèse | Valeur | Statut |
|---|---|---|
| Le marché paie pour ce type d'accompagnement | Concurrent direct à ~247 € avec ~45 K abonnés Instagram ; coaching Parcoursup vendu 300-1 200 € et jusqu'à 1 496 € | **Sourcé** |
| Taille de la douleur | 67 % des étudiants du supérieur en difficulté pour trouver une entreprise (Apec, mars 2025) | **Sourcé** |
| Marché en contraction | −5 % de contrats en 2025, −7,8 % dans le supérieur, −32 % d'offres sur Indeed en un an | **Sourcé** |
| Saisonnalité | ~50 % des offres publiées mai-juillet ; >50 % des entreprises ont choisi à la mi-juin ; 9 % des offres en septembre | **Sourcé** |
| Fenêtre de rattrapage | Contrat signable jusqu'à ~3 mois après le début du cycle de formation | **Sourcé** (à faire confirmer au cas par cas) |
| Mix de ventes | 60 % Kit / 30 % Méthode / 10 % Suivi | **Posé** |
| Taux de conversion visiteur → acheteur | 1-2 % (fourchette basse du e-commerce d'info-produit sans audience) | **Posé** |
| Conversion du réseau de promo | 3-8 % des personnes touchées | **Posé** |

⚠️ **Inconnue majeure** : la taille du réseau réellement mobilisable (promo, années inférieures, serveurs Discord d'école). Les scénarios supposent 60 / 150 / 300 personnes atteignables. **À corriger dès la première semaine** — c'est la variable qui décide de tout.

## 2. Économie unitaire

| Offre | Prix | Temps porteur | Marge horaire effective |
|---|---|---|---|
| Le Kit | 49 € | 0 h (produit) | ∞ — c'est le levier |
| La Méthode | 149 € | ~1 h 15 | ~119 €/h |
| Le Suivi | 290 € | ~3 h | ~97 €/h |

Le Kit est le cœur économique : il ne consomme aucune heure, il se vend hors saison, et il finance le temps passé sur les offres accompagnées. **Le pilotage consiste à maximiser la part du Kit**, pas à vendre plus de Suivi.

## 3. Trois scénarios

Rappel : nous sommes en **août 2026**, à la fin de la fenêtre chaude mais au pic de la détresse. La première vraie saison est **mars-juin 2027**.

### Pessimiste — réseau limité, campagne de rattrapage peu suivie
- **Août-nov. 2026** : 8 Kits + 2 Méthodes = **690 €**.
- **Déc.-févr.** : ~0 € (désert commercial assumé, période de construction).
- **Mars-juin 2027** : 25 Kits + 6 Méthodes + 1 Suivi = **2 409 €**.
- **Année 1 ≈ 3 100 €.** Verdict : un revenu d'appoint. Mais le coût est quasi nul et le Kit reste un actif réutilisable.

### Réaliste — réseau de ~150 personnes, plan d'acquisition exécuté
- **Août-nov. 2026** : 20 Kits + 6 Méthodes + 1 Suivi = **2 164 €**.
- **Déc.-févr.** : 6 Kits (SEO qui commence à ramener) = **294 €**.
- **Mars-juin 2027** : 60 Kits + 18 Méthodes + 4 Suivis = **6 782 €**.
- **Année 1 ≈ 9 200 €**, dont l'essentiel concentré sur 6 mois. Charge : voir §4.

### Optimiste — un contenu qui perce (TikTok/LinkedIn) + relais d'école
- **Août-nov. 2026** : 45 Kits + 12 Méthodes + 2 Suivis = **4 573 €**.
- **Déc.-févr.** : 15 Kits + 2 Méthodes = **1 033 €**.
- **Mars-juin 2027** : 140 Kits + 35 Méthodes + 8 Suivis = **14 435 €**.
- **Année 1 ≈ 20 000 €.** Borne haute contrainte par le temps disponible sur les offres accompagnées, pas par la demande.

**Lecture honnête** : c'est un **revenu de campagne**, pas un MRR. Deux pics par an, un désert hivernal. Le comparer à un abonnement serait une erreur de lecture.

## 4. Charge hebdomadaire (plafond : 10 h/semaine)

| Période | Livraison | Acquisition | Admin | Total |
|---|---|---|---|---|
| Août-nov. (campagne) | 2-4 h | 2-3 h | 0,5 h | **4,5-7,5 h** ✅ |
| Déc.-févr. (construction) | 0-1 h | 1 h | 0,5 h | **1,5-2,5 h** ✅ |
| Mars-juin (haute saison) | 4-6 h | 2 h | 1 h | **7-9 h** ⚠️ tendu mais tenable |

**Le point de tension est mars-juin.** Garde-fous : plafonner Le Suivi à 2-3 places simultanées, refuser explicitement les demandes hors informatique, et privilégier la vente du Kit (zéro heure) plutôt que des offres accompagnées quand l'agenda se remplit. Si le seuil de 10 h est atteint : **augmenter les prix plutôt que le volume**.

## 5. Budget mois 1 (plafond : 100 €)

| Poste | Coût | Note |
|---|---|---|
| Domaine `premiercommit.fr` | ~10 €/an | Ou sous-domaine existant à 0 € pour tester |
| Hébergement | 0 € | VPS OVH existant, site statique via Nginx |
| E-mail pro | 0-12 € | MX Plan souvent inclus avec le domaine OVH |
| Encaissement | 0 € à l'ouverture | Stripe/PayPal : pas d'abonnement, commission ~1,5-3 % par transaction |
| Visio | 0 € | Jitsi ou Google Meet |
| Enregistrement des audits vidéo | 0 € | OBS Studio, gratuit |
| Hébergement du Kit | 0 € | Fichiers sur le VPS, lien envoyé après paiement |
| **Médiateur de la consommation** | **25-100 €/an** | ⚠️ **Obligatoire AVANT la première vente à un particulier** (art. L612-1). Contrairement à Garde-Site (clients pros), la cible ici est **exclusivement B2C** : cette dépense n'est pas reportable. |
| **Total mois 1** | **≈ 35-122 €** | ⚠️ **Peut dépasser 100 €** selon le médiateur retenu |

**Point d'attention budgétaire honnête** : c'est le seul poste qui peut faire sortir de l'enveloppe des 100 €. Deux façons de rester dedans : choisir un médiateur en entrée de gamme (~25-30 €/an), ou démarrer sur un sous-domaine existant pour économiser le domaine. L'adhésion au médiateur, elle, n'est pas négociable — c'est une obligation légale préalable, pas une bonne pratique.

## 6. Ce qui invaliderait ces prévisions

1. **Réseau plus petit que supposé** → basculer l'effort sur le contenu TikTok/LinkedIn et les serveurs Discord d'écoles, dont le coût reste nul mais le délai plus long.
2. **Aucune vente du Kit malgré du trafic** → le problème est le prix ou la page, pas le produit. Tester 29 € et enrichir la preuve gratuite avant de conclure à l'échec.
3. **Trop de demandes de Suivi** → bon problème, mauvaise réponse si on accepte tout : augmenter le prix du Suivi jusqu'à ce que la demande rentre dans l'agenda.
4. **Requalification en formation professionnelle** → risque juridique, pas commercial, mais il détruirait le modèle « paiement + accès immédiat » (interdiction d'encaisser pendant 10 jours). Tenir les quatre conditions listées dans `branding-premier-commit.md`.
5. **Le concurrent se verticalise sur la tech** → réponse : la crédibilité vérifiable et les avis réels, qu'il ne peut pas fabriquer rapidement. C'est précisément pourquoi il faut collecter des témoignages authentiques dès les premiers clients.
