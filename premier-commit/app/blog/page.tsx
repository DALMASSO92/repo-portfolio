import type { Metadata } from "next";
import Link from "next/link";
import { ProseHeader } from "@/components/Prose";
import { CTA, Section, SectionTitle } from "@/components/ui";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: "Ressources — Premier Commit" },
  description:
    "Des articles gratuits sur la recherche d'alternance en informatique : CV lisible par les ATS, diagnostic des candidatures sans réponse, rentrée sans entreprise.",
};

export default function Blog() {
  return (
    <>
      <ProseHeader
        kicker="git log --stat ressources"
        title="Les ressources gratuites."
        intro="Une partie de la méthode est publiée ici, en accès libre, sans e-mail à laisser et sans inscription. Lis, applique, et décide ensuite si tu as besoin de quoi que ce soit d'autre."
        meta="Aucune promesse de contrat. Aucune mise en relation. Aucune liste d'entreprises."
      />

      <Section>
        <SectionTitle
          kicker="Juge sur pièces"
          title="Le meilleur moyen de savoir si ma méthode vaut quelque chose."
          intro="Ces articles ne sont pas des teasers. Ils contiennent des tests reproductibles et des procédures complètes, utilisables seul, sans rien acheter. C'est volontaire : le service démarre, je n'ai ni témoignage ni chiffre à te montrer, donc je préfère te laisser vérifier le travail avant de te demander quoi que ce soit."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {articles.map((a) => (
            <li key={a.slug} className="flex">
              <article className="flex flex-1 flex-col rounded-2xl border border-ligne bg-white p-7 transition-colors hover:border-nuit/25">
                <p className="font-mono text-xs text-indigo">
                  <span className="opacity-50">$ cat </span>
                  {a.tag}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-nuit">
                  <Link
                    href={`/blog/${a.slug}/`}
                    className="transition-colors hover:text-indigo"
                  >
                    {a.titreCourt}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gris">
                  {a.extrait}
                </p>
                <p className="mt-6 flex items-center gap-2 font-mono text-xs text-gris">
                  <span>{a.date}</span>
                  <span aria-hidden="true" className="text-ligne">
                    ·
                  </span>
                  <span>{a.minutes} min de lecture</span>
                </p>
                <p className="mt-4">
                  <Link
                    href={`/blog/${a.slug}/`}
                    className="text-sm font-semibold text-indigo transition-colors hover:text-nuit"
                  >
                    Lire l&apos;article →
                  </Link>
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl rounded-xl border border-ligne bg-papier-2 p-5 text-sm leading-relaxed text-gris">
          <strong className="text-nuit">
            Ce que tu ne trouveras pas dans ces articles :
          </strong>{" "}
          une liste d&apos;entreprises à contacter, une promesse de contrat, ou
          un compte à rebours. Ce que tu y trouveras : des tests que tu peux
          faire ce soir sur ton propre dossier, et le raisonnement derrière
          chacun.
        </p>
      </Section>

      <div className="bg-nuit text-papier">
        <Section className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tu as tout lu et tu veux un regard sur ton dossier réel ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-papier/75">
            Les offres reprennent cette méthode sous une forme appliquée à ton
            CV, ton GitHub et tes candidatures. Si les articles t&apos;ont suffi,
            tant mieux — c&apos;est un résultat parfaitement acceptable.
          </p>
          <div className="mt-9">
            <CTA href="/#offres" variant="ghost-light">
              Voir les offres
            </CTA>
          </div>
        </Section>
      </div>
    </>
  );
}
