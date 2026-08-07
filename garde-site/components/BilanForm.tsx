"use client";

import { useState } from "react";

// Formulaire sans backend : construit un e-mail pré-rempli (mailto) côté client.
// Zéro donnée stockée, zéro service tiers, zéro cookie — fonctionne dès le
// déploiement statique. Pour passer à un envoi serveur plus tard : brancher
// l'action sur un endpoint FastAPI du VPS (voir README du projet).
const CONTACT_EMAIL = "[EMAIL_CONTACT]";

const technos = [
  "WordPress",
  "Next.js ou React",
  "Webflow",
  "Généré par IA",
  "Autre",
  "Je ne sais pas",
];

export function BilanForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Bilan de santé gratuit — ${data.get("site")}`,
    );
    const body = encodeURIComponent(
      [
        `Site : ${data.get("site")}`,
        `Nom : ${data.get("nom")}`,
        `E-mail : ${data.get("email")}`,
        `Technologie : ${data.get("techno")}`,
        `Point d'inquiétude : ${data.get("inquietude") || "—"}`,
        "",
        "Demande envoyée depuis la page Bilan de santé gratuit.",
      ].join("\n"),
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-ligne bg-white px-4 py-3 text-encre placeholder:text-ardoise/60 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="site" className="mb-1.5 block text-sm font-semibold">
          Adresse de votre site <span className="text-signal">*</span>
        </label>
        <input
          id="site"
          name="site"
          type="url"
          required
          placeholder="https://…"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Votre e-mail <span className="text-signal">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="pour vous envoyer le bilan"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="nom" className="mb-1.5 block text-sm font-semibold">
          Votre prénom et nom <span className="text-signal">*</span>
        </label>
        <input id="nom" name="nom" type="text" required className={field} />
      </div>
      <div>
        <label htmlFor="techno" className="mb-1.5 block text-sm font-semibold">
          Technologie du site
        </label>
        <select id="techno" name="techno" className={field} defaultValue="Je ne sais pas">
          {technos.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="inquietude"
          className="mb-1.5 block text-sm font-semibold"
        >
          Un point qui vous inquiète ?{" "}
          <span className="font-normal text-ardoise">(facultatif)</span>
        </label>
        <textarea
          id="inquietude"
          name="inquietude"
          rows={3}
          placeholder="ex. « lent », « plus mis à jour depuis 2023 », « e-mails du formulaire perdus »"
          className={field}
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-ardoise">
        <input type="checkbox" required className="mt-1 accent-signal" />
        <span>
          J&apos;accepte que mes données soient utilisées pour établir et
          m&apos;envoyer ce bilan.{" "}
          <a href="/confidentialite/" className="underline hover:text-encre">
            Politique de confidentialité
          </a>
        </span>
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-signal px-6 py-3.5 font-semibold text-white shadow-md shadow-signal/25 transition-colors hover:bg-signal-dark"
      >
        Recevoir mon bilan gratuit
      </button>
      {sent && (
        <p className="rounded-xl border border-balise/40 bg-balise/10 p-4 text-sm text-encre">
          Votre logiciel de messagerie vient de s&apos;ouvrir avec la demande
          pré-remplie — il ne reste qu&apos;à cliquer sur « Envoyer ». Rien ne
          s&apos;est ouvert ? Écrivez-nous directement à {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
