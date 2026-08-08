import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-nuit text-papier">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-papier/65">
              Accompagnement méthodologique pour les étudiants en informatique
              qui cherchent une alternance. Une méthode, pas une promesse.
            </p>
            <p className="mt-4 font-mono text-xs text-papier/45">
              Site sans cookies ni traceurs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold">Le service</p>
              <ul className="mt-3 space-y-2 text-papier/65">
                <li><Link className="hover:text-papier" href="/#methode">La méthode</Link></li>
                <li><Link className="hover:text-papier" href="/#offres">Offres et tarifs</Link></li>
                <li><Link className="hover:text-papier" href="/#limites">Ce que ce n&apos;est pas</Link></li>
                <li><Link className="hover:text-papier" href="/rattrapage/">Le Rattrapage</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Ressources</p>
              <ul className="mt-3 space-y-2 text-papier/65">
                <li><Link className="hover:text-papier" href="/blog/">Articles</Link></li>
                <li><Link className="hover:text-papier" href="/#faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Légal</p>
              <ul className="mt-3 space-y-2 text-papier/65">
                <li><Link className="hover:text-papier" href="/mentions-legales/">Mentions légales</Link></li>
                <li><Link className="hover:text-papier" href="/cgv/">CGV</Link></li>
                <li><Link className="hover:text-papier" href="/confidentialite/">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-2 border-t border-papier/15 pt-6 text-xs text-papier/50">
          <p>
            © {new Date().getFullYear()} Premier Commit — [PRÉNOM NOM] EI,
            entrepreneur individuel. SIRET [SIRET]. TVA non applicable, art. 293 B
            du CGI.
          </p>
          <p>
            Premier Commit est un service de conseil et d&apos;accompagnement
            méthodologique. Il ne réalise aucune mise en relation avec des
            employeurs, ne transmet aucune candidature à des entreprises et ne
            garantit l&apos;obtention d&apos;aucun contrat.
          </p>
        </div>
      </div>
    </footer>
  );
}
