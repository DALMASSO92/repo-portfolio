import Link from "next/link";
import { CTA, Section } from "./ui";
import { autresArticles } from "@/lib/articles";

/**
 * Pied d'article : signature, articles voisins, et un appel discret vers les
 * offres. Volontairement non insistant — l'article doit rester utile à
 * quelqu'un qui n'achètera jamais rien.
 */
export function ArticleOutro({ slug }: { slug: string }) {
  const suite = autresArticles(slug);
  return (
    <>
      <Section className="!pt-0">
        <div className="max-w-[68ch] rounded-2xl border border-ligne bg-papier-2 p-6 text-sm leading-relaxed text-gris">
          Cet article fait partie d&apos;une série sur la recherche
          d&apos;alternance en informatique, écrite par{" "}
          <strong className="text-nuit">[PRÉNOM NOM]</strong>, alternant en
          informatique à [ÉCOLE]. Il est conçu pour être appliqué seul, sans
          rien acheter.
        </div>

        <div className="mt-12 max-w-[68ch]">
          <h2 className="font-display text-xl font-bold tracking-tight text-nuit">
            Les autres articles de la série
          </h2>
          <ul className="mt-5 space-y-3">
            {suite.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}/`}
                  className="flex flex-col gap-1 rounded-xl border border-ligne bg-white p-5 transition-colors hover:border-nuit/25"
                >
                  <span className="font-display font-bold text-nuit">
                    {a.titreCourt}
                  </span>
                  <span className="text-sm leading-relaxed text-gris">
                    {a.extrait}
                  </span>
                  <span className="mt-1 font-mono text-xs text-gris">
                    {a.minutes} min de lecture
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <div className="border-t border-ligne bg-papier-2">
        <Section className="!py-14">
          <div className="max-w-[68ch]">
            <h2 className="font-display text-2xl font-bold tracking-tight text-nuit">
              Si tu veux aller plus loin
            </h2>
            <p className="mt-4 leading-relaxed text-gris">
              Premier Commit propose un accompagnement méthodologique payant qui
              applique cette démarche à ton dossier réel : ton CV, ton GitHub,
              tes candidatures. Ce n&apos;est ni obligatoire ni urgent — les
              ressources publiées ici restent gratuites et fonctionnent seules.
              Aucune mise en relation avec des entreprises n&apos;est proposée,
              et aucun contrat n&apos;est promis.
            </p>
            <div className="mt-7">
              <CTA href="/#offres" variant="ghost">
                Voir les offres
              </CTA>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
