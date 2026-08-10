# Prévisions

> Ces prévisions sont **délibérément basses**. La recherche de la nuit n'a pas pu prouver
> la demande, et les données disponibles sur le segment sont défavorables. Mieux vaut un
> chiffre pessimiste exact qu'un chiffre optimiste inventé.

---

## 1. Ce sur quoi reposent les calculs

| Donnée | Valeur | Source |
|---|---|---|
| Créateurs monétisant en France | ~348 000 comptes ; ~150 000 influenceurs | [Creator School](https://www.creatorschool.fr/blog/createur-de-contenu-salaire-france) |
| Revenu des créateurs FR | Médiane ~1 600 €/mois ; **56 % sous 1 000 €/mois** ; **85 % sous le SMIC** | Creator School · [Ruche & Pollen](https://ruche-pollen.com/blog-social-media/combien-gagne-createur-contenu-france-2026) |
| Abonnement payant chez les 18-24 ans | **23 %** utilisent une IA payante (16 % chez les lycéens), pour 77 % d'usage régulier | [Ipsos BVA via The Media Leader](https://fr.themedialeader.com/lusage-quotidien-de-lia-generative-explose-chez-les-18-25-ans-en-france/) |
| Produits indépendants à 0 € de chiffre d'affaires | **54 %** (chiffre d'affaires vérifié via Stripe) | ScrapingFish via Indie Hackers |
| Prix de référence observé sur le segment | 0 à 15 € selon les catégories | Recherche §3.7 de `recherche-marche.md` |
| Commission Paddle | ~5 % + 0,50 $ | Recherche §5 |

**Marge unitaire** : prix 19 € → commission ~1,45 € → **~17,55 € nets par vente**. Coût
marginal nul (hébergement déjà payé, aucun appel d'API facturé).

---

## 2. Le tunnel, et pourquoi il est étroit

Le seul canal réaliste est la vidéo courte : le référencement des requêtes principales est
tenu par des acteurs financés (Qonto, Legalstart, cabinets comptables), et il n'y a aucun
budget publicitaire.

```
Vues des vidéos courtes
        └─ 1 à 3 %  ──────────► Visites du site
                └─ 20 à 35 %  ─► Utilisation d'un outil gratuit
                        └─ 1 à 3 %  ─► Achat à 19 €
```

Le taux d'achat de 1 à 3 % est **optimiste** pour ce public : il est calé sur les taux
observés sur des outils créateurs payants, alors que la cible ici est plus jeune et moins
solvable. Le taux réel pourrait être inférieur à 1 %.

---

## 3. Les trois scénarios, à 3 mois

Hypothèse commune : 3 vidéos par semaine, soit ~36 vidéos sur la période, aucune publicité.

### Pessimiste — **0 à 50 €** · probabilité estimée : élevée

Les vidéos plafonnent à quelques centaines de vues, le sujet administratif ne perce pas
auprès d'un public venu se divertir, et personne ne convertit. **C'est le scénario le plus
probable pris isolément** : 54 % des produits indépendants dont le chiffre d'affaires a été
vérifié font zéro euro. Aucune raison de se croire exempté.

- Vues cumulées : ~15 000 · visites : ~250 · achats : **0 à 3**
- Revenu net : **0 à 53 €** — soit moins que le coût du médiateur.

### Réaliste — **50 à 300 €** · probabilité estimée : moyenne

Une ou deux vidéos dépassent les 10 000 vues — le format « une marque te propose 800 €, tu
touches en réalité X » a un ressort de curiosité chiffrée qui fonctionne bien en vidéo
courte. Les outils gratuits tournent, une petite fraction achète.

- Vues cumulées : ~60 000 · visites : ~1 200 · achats : **3 à 17**
- Revenu net : **53 à 298 €**

### Optimiste — **300 à 900 €** · probabilité estimée : faible

Une vidéo dépasse les 200 000 vues, le sujet est repris par un compte de conseil aux
créateurs, et le référencement de longue traîne commence à ramener du trafic passif.

- Vues cumulées : ~300 000 · visites : ~6 000 · achats : **17 à 50**
- Revenu net : **298 à 878 €**

> **Lecture honnête** : même le scénario optimiste ne fait pas un revenu. Il fait la preuve
> qu'un marché existe — ce qui justifierait alors d'y consacrer plus de temps, ou de monter
> en gamme. Ne construis pas ta trésorerie là-dessus.

---

## 4. Le seuil de rentabilité

Coût fixe du premier mois : **30 à 90 €** (essentiellement le médiateur).

> **Il faut 2 à 6 ventes pour rembourser les frais fixes de la première année.**

C'est atteignable. Mais si l'étape 1 du README — le test de validation à 0 € — ne passe pas,
n'engage même pas ces 30 à 90 € : le médiateur ne devient obligatoire qu'à partir du moment
où tu vends, et les outils gratuits seuls ne déclenchent pas cette obligation.

---

## 5. Budget du premier mois

| Poste | Montant | Nature |
|---|---|---|
| Médiateur de la consommation | **30 à 80 €** | Obligatoire dès la première vente |
| Plateforme agréée facturation électronique | 0 à 10 € | Obligation distincte, échéance dépassée |
| Nom de domaine | **0 €** | Sous-domaine déjà possédé |
| Hébergement | **0 €** | VPS OVH déjà payé |
| Paddle — mise en route | 0 € | Aucun frais fixe |
| Documents légaux | 0 € | Rédigés |
| Outils de conception, polices | 0 € | Aucune dépendance externe, aucune police à acheter |
| **TOTAL** | **30 à 90 €** | ✅ **sous les 100 €** |

Variable : ~7,6 % du chiffre d'affaires en commission, donc zéro sans vente.

---

## 6. Charge hebdomadaire

| Activité | Régime de croisière | Pic (première semaine) |
|---|---|---|
| Contenu court (3 vidéos) | 2 à 3 h | 4 h |
| Support et corrections | 0,5 à 1 h | 1 h |
| Contenu de référencement | 1 à 1,5 h | 2 h |
| **Veille juridique** | 0,5 h | 2 h |
| **Total** | **4 à 6 h** | ~9 h |

✅ Compatible avec l'enveloppe de 5 à 10 h/semaine, y compris au démarrage.

**Le poste qui peut déraper est la veille juridique.** Vendre un accès « à vie » adossé à du
droit t'engage à le maintenir à jour sans revenu récurrent pour financer ce travail. C'est
exactement le défaut qui a fait éliminer l'idée d'extension Chrome. Ici il est plus
supportable — le droit bouge moins vite qu'une interface de TikTok — mais il existe. Si le
produit décolle, le passage à un modèle avec une mise à jour annuelle payante devra être
étudié.

---

## 7. Les trois hypothèses qui peuvent tout casser

1. **Le prix de 19 €.** Toute la recherche converge vers un prix de référence de 0 à 15 € sur
   ce segment, et un rapport recommandait explicitement 14 €. J'ai retenu 19 € parce que le
   produit livre un artefact à conséquence financière, pas un fichier décoratif. **C'est
   l'hypothèse la moins solide du dossier.** Teste 14 € contre 19 € dès que tu as du trafic.
2. **Le public n'a pas encore d'argent.** Le produit s'adresse à un créateur qui vient de
   décrocher un partenariat — une minorité de la cible. Si tes vidéos touchent surtout des
   créateurs pré-revenu, la conversion s'effondre quel que soit le prix.
3. **La demande n'est pas démontrée.** Aucun volume de recherche, aucun fil de discussion,
   aucune preuve de vente d'un produit équivalent n'a pu être vérifié. C'est la raison d'être
   du test à 0 € : il coûte 15 heures et tranche la question.
