"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { REGIMES, VERIFIE_LE, type RegimeId } from "@/lib/bareme";
import { euros, pourcent, simuler } from "@/lib/calc";

export default function Simulateur() {
  const [montant, setMontant] = useState(800);
  const [regime, setRegime] = useState<RegimeId>("bnc");
  const [versementLiberatoire, setVersementLiberatoire] = useState(false);
  const [autresRevenus, setAutresRevenus] = useState(0);
  const [parts, setParts] = useState(1);

  const resultat = useMemo(
    () => simuler({ montant, regime, versementLiberatoire, autresRevenus, parts }),
    [montant, regime, versementLiberatoire, autresRevenus, parts],
  );

  const lignes = [
    { libelle: "Cotisations sociales", valeur: resultat.cotisations },
    { libelle: "Contribution à la formation", valeur: resultat.formation },
    {
      libelle:
        resultat.methodeImpot === "versement_liberatoire"
          ? "Impôt (versement libératoire)"
          : "Impôt sur le revenu",
      valeur: resultat.impot,
    },
  ];

  return (
    <div className="mt-14">
      {VERIFIE_LE === null && (
        <div className="mb-10 border border-[#FF8A5C]/40 bg-[#FF8A5C]/5 p-6">
          <p className="text-sm font-semibold text-[#FF8A5C]">
            Barèmes non vérifiés — ne pas mettre en ligne en l&apos;état
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">
            Les taux utilisés par ce simulateur n&apos;ont pas encore été contrôlés sur
            une source officielle. Vérifie-les sur urssaf.fr et impots.gouv.fr, puis
            renseigne la date dans <code className="text-[#F5F5F4]">src/lib/bareme.ts</code>{" "}
            pour faire disparaître cet avertissement.
          </p>
        </div>
      )}

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Saisie */}
        <div className="space-y-8">
          <div>
            <label htmlFor="montant" className="block text-sm font-medium">
              Montant proposé par la marque
            </label>
            <div className="mt-3 flex items-center border border-[#26262B] bg-[#131316] focus-within:border-[#D4FF3F]">
              <input
                id="montant"
                type="number"
                min={0}
                step={50}
                value={montant}
                onChange={(e) => setMontant(Number(e.target.value))}
                className="w-full bg-transparent px-4 py-3.5 text-2xl font-semibold outline-none"
              />
              <span className="px-4 text-xl text-[#A1A1AA]">€</span>
            </div>
            <input
              type="range"
              min={0}
              max={5000}
              step={50}
              value={Math.min(montant, 5000)}
              onChange={(e) => setMontant(Number(e.target.value))}
              className="mt-4 w-full accent-[#D4FF3F]"
              aria-label="Ajuster le montant"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-medium">Ton type d&apos;activité</legend>
            <div className="mt-3 space-y-2.5">
              {Object.values(REGIMES).map((r) => (
                <label
                  key={r.id}
                  className={`block cursor-pointer border p-4 transition ${
                    regime === r.id
                      ? "border-[#D4FF3F] bg-[#D4FF3F]/5"
                      : "border-[#26262B] bg-[#131316] hover:border-[#3a3a42]"
                  }`}
                >
                  <input
                    type="radio"
                    name="regime"
                    value={r.id}
                    checked={regime === r.id}
                    onChange={() => setRegime(r.id)}
                    className="sr-only"
                  />
                  <span className="block text-sm font-medium">{r.nom}</span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-[#A1A1AA]">
                    {r.description}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex cursor-pointer items-start gap-3.5 border border-[#26262B] bg-[#131316] p-4">
            <input
              type="checkbox"
              checked={versementLiberatoire}
              onChange={(e) => setVersementLiberatoire(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#D4FF3F]"
            />
            <span>
              <span className="block text-sm font-medium">
                J&apos;ai opté pour le versement libératoire
              </span>
              <span className="mt-1.5 block text-xs leading-relaxed text-[#A1A1AA]">
                Une option qui se demande à l&apos;URSSAF et qui remplace l&apos;impôt
                classique par un prélèvement fixe. Si tu ne sais pas, tu ne l&apos;as
                probablement pas.
              </span>
            </span>
          </label>

          {!versementLiberatoire && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="autres" className="block text-sm font-medium">
                  Tes autres revenus de l&apos;année
                </label>
                <input
                  id="autres"
                  type="number"
                  min={0}
                  step={500}
                  value={autresRevenus}
                  onChange={(e) => setAutresRevenus(Number(e.target.value))}
                  className="mt-3 w-full border border-[#26262B] bg-[#131316] px-4 py-3 outline-none focus:border-[#D4FF3F]"
                />
                <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                  Salaire d&apos;alternance, job étudiant… L&apos;impôt dépend de
                  l&apos;ensemble.
                </p>
              </div>
              <div>
                <label htmlFor="parts" className="block text-sm font-medium">
                  Parts fiscales
                </label>
                <input
                  id="parts"
                  type="number"
                  min={1}
                  step={0.5}
                  value={parts}
                  onChange={(e) => setParts(Number(e.target.value))}
                  className="mt-3 w-full border border-[#26262B] bg-[#131316] px-4 py-3 outline-none focus:border-[#D4FF3F]"
                />
                <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                  1 si tu déclares seul. Si tu es rattaché au foyer de tes parents, le
                  calcul sera différent.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Résultat */}
        <div className="cadre-plein relative h-fit border border-[#26262B] bg-[#131316] p-8 lg:sticky lg:top-28">
          <span className="coin coin-hg" />
          <span className="coin coin-hd" />
          <span className="coin coin-bg" />
          <span className="coin coin-bd" />

          <p className="text-sm text-[#A1A1AA]">Il te reste</p>
          <p className="mt-3 text-5xl font-semibold tracking-tight text-[#D4FF3F]">
            {euros(resultat.net)}
          </p>
          <p className="mt-3 text-sm text-[#A1A1AA]">
            soit {pourcent(resultat.tauxNet)} de ce que la marque annonce
          </p>

          <div className="mt-9 space-y-3.5 border-t border-[#26262B] pt-7">
            <div className="flex justify-between text-sm">
              <span className="text-[#A1A1AA]">Montant proposé</span>
              <span className="font-medium">{euros(resultat.montant)}</span>
            </div>
            {lignes.map((ligne) => (
              <div key={ligne.libelle} className="flex justify-between text-sm">
                <span className="text-[#A1A1AA]">{ligne.libelle}</span>
                <span className="font-medium text-[#FF8A5C]">
                  &minus; {euros(ligne.valeur)}
                </span>
              </div>
            ))}
            <div className="flex justify-between border-t border-[#26262B] pt-3.5 text-sm">
              <span className="font-medium">Ce que tu gardes</span>
              <span className="font-semibold text-[#D4FF3F]">{euros(resultat.net)}</span>
            </div>
          </div>

          <p className="mt-7 text-xs leading-relaxed text-[#A1A1AA]">
            Estimation indicative, calculée sur un montant isolé. Elle ne tient pas
            compte de ta situation complète et ne remplace pas l&apos;avis d&apos;un
            expert-comptable.
          </p>

          <Link
            href="/conformite"
            className="lien-souligne mt-6 inline-block text-sm font-medium text-[#D4FF3F]"
          >
            Étape suivante : ton partenariat est-il en règle ?
          </Link>
        </div>
      </div>
    </div>
  );
}
