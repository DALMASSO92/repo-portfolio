# Garde-Site — site vitrine

Site vitrine du service **Garde-Site** : maintenance de sites web par abonnement (49/89/129 €/mois, sans engagement), WordPress et sites custom (Next.js, React, Webflow, générés par IA).
Site 100 % statique : aucun backend, aucun cookie, aucun service tiers. Le formulaire de bilan fonctionne en `mailto` (voir plus bas pour passer à un envoi serveur).
Les textes sources et documents d'exploitation sont dans `../outputs/` (marketing, légal, ops).

## Stack

- **Next.js 16** (App Router) en **export statique** (`output: "export"` dans `next.config.ts`) — le build produit un dossier `out/` de fichiers HTML/CSS/JS purs.
- **Tailwind CSS v4** (via `@tailwindcss/postcss`).
- **Aucune dépendance runtime** côté serveur : rien à faire tourner en production, un simple serveur de fichiers statiques suffit.

## Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:3000)
npm run lint       # ESLint
npm run build      # build de production → dossier out/
```

## Déploiement (VPS OVH)

1. Builder en local : `npm run build` → le site complet est dans `out/`.
2. Copier `out/` sur le VPS, par exemple :
   ```bash
   rsync -avz --delete out/ vps:/var/www/garde-site/
   ```
3. Ajouter un vhost Nginx statique minimal (SSL via votre configuration wildcard existante) :
   ```nginx
   server {
       listen 443 ssl;
       server_name garde-site.fr;
       # ssl_certificate / ssl_certificate_key : votre config SSL habituelle

       root /var/www/garde-site;
       index index.html;

       location / {
           try_files $uri $uri/ $uri.html =404;
       }
   }
   ```
4. Vérifier chaque page en production (accueil, forfaits, bilan, blog, pages légales).

## Placeholders à remplacer AVANT le build

Détection exhaustive : `grep -rn "\[" app components lib --include="*.tsx" --include="*.ts"`.

- **`components/BilanForm.tsx`** — `[EMAIL_CONTACT]` (ligne ~9) : c'est le `mailto` du CTA principal. **S'il n'est pas remplacé, le formulaire est mort.**
- `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` — remplacer `https://garde-site.example` par le domaine réel.
- Pages légales et footer : `[PRÉNOM NOM]`, `[SIRET]`, `[ADRESSE]`, `[EMAIL_CONTACT]`, `[TELEPHONE]`, `[DOMAINE]`, `[DATE]`, `[X jours …]`, `[MÉDIATEUR — NOM/ADRESSE/SITE]`, ainsi que les mentions `[à vérifier…]` / `[à confirmer…]`.

## Formulaire : passer du mailto à un envoi serveur

Le formulaire (`components/BilanForm.tsx`) construit aujourd'hui un e-mail pré-rempli côté client. Pour un envoi serveur plus fiable : un petit endpoint FastAPI sur le VPS, et remplacer le `window.location.href = mailto:…` par un `fetch`.

Esquisse côté serveur :

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Bilan(BaseModel):
    site: str
    nom: str
    email: str
    techno: str = ""
    inquietude: str = ""

@app.post("/api/bilan")
def bilan(b: Bilan):
    # envoyer un e-mail (smtplib / API du fournisseur) ou consigner la demande
    return {"ok": True}
```

Côté client, dans `handleSubmit` :

```ts
await fetch("https://garde-site.fr/api/bilan", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(Object.fromEntries(data)),
});
```

Servir l'endpoint derrière Nginx (`location /api/ { proxy_pass http://127.0.0.1:8000; }`) et adapter la politique de confidentialité si des données sont alors stockées côté serveur.
