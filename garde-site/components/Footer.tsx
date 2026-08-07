import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-encre text-ecume">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-ecume/70">
              Maintenance de sites web sans engagement, opérée en France.
              Vous dormez, on veille.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-ecume/60">
              <span className="dot-balise inline-block h-2.5 w-2.5 rounded-full bg-balise" />
              Surveillance active 24h/24
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold">Service</p>
              <ul className="mt-3 space-y-2 text-ecume/70">
                <li><Link className="hover:text-ecume" href="/#forfaits">Forfaits</Link></li>
                <li><Link className="hover:text-ecume" href="/maintenance-wordpress/">Maintenance WordPress</Link></li>
                <li><Link className="hover:text-ecume" href="/maintenance-site-nextjs-react/">Sites Next.js &amp; custom</Link></li>
                <li><Link className="hover:text-ecume" href="/bilan-gratuit/">Bilan de santé gratuit</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Ressources</p>
              <ul className="mt-3 space-y-2 text-ecume/70">
                <li><Link className="hover:text-ecume" href="/blog/">Blog</Link></li>
                <li><Link className="hover:text-ecume" href="/#faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Légal</p>
              <ul className="mt-3 space-y-2 text-ecume/70">
                <li><Link className="hover:text-ecume" href="/mentions-legales/">Mentions légales</Link></li>
                <li><Link className="hover:text-ecume" href="/cgv/">CGV</Link></li>
                <li><Link className="hover:text-ecume" href="/confidentialite/">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-ecume/15 pt-6 text-xs text-ecume/50">
          <p>
            © {new Date().getFullYear()} Garde-Site — [PRÉNOM NOM], auto-entrepreneur.
            TVA non applicable, art. 293 B du CGI. Site sans cookies ni traceurs.
          </p>
        </div>
      </div>
    </footer>
  );
}
