import React from "react";
import Basic from "../../../layout/Basic";

const index = () => {
  return (
    <Basic
      height="min-h-[calc(100vh-78px)]"
      title="Résultats de Simulation de Prêt à Taux Zéro - Info PTZ | Vos Estimations en Un Clic"
      metaDescription="Découvrez les résultats de votre simulation de prêt à taux zéro avec Info PTZ. Obtenez des estimations claires et précises pour planifier votre projet immobilier en toute confiance. Consultez vos résultats maintenant et avancez vers votre objectif."
    >
      <div className="p-8 text-gray-700">
        <h1 className="text-2xl font-bold mb-4">
          <span className="lg:text-5xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
            ACCESSION A LA PROPRIETE : <br />
          </span>
          <span className="lg:text-6xl text-4xl inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
            PTZ ET TVA REDUITE,
          </span>{" "}
          <span className="lg:text-5xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
            LA COMBINAISON GAGNANTE POUR DEVENIR PROPRIETAIRE.
          </span>
        </h1>
        <div className="bg-yellow-500 w-20 h-2 rounded-full my-5"></div>
        <p className="mb-4">
          Bienvenue dans l'univers de l'accession à la propriété facilitée !
          Chez Signature promotion, nous sommes déterminés à rendre votre rêve
          de devenir propriétaire une réalité. Découvrez comment le Prêt à Taux
          Zéro (PTZ) et la TVA réduite en Zone ANRU peuvent vous ouvrir les
          portes de votre futur logement neuf.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-10">
          Prêt à Taux Zéro (PTZ) : Conditions d'éligibilité et Plafonds
        </h2>
        <p className="mb-4">
          Le Prêt à Taux Zéro (PTZ) offre une opportunité unique aux
          primo-accédants. Avant de vous lancer dans votre projet immobilier,
          comprenez les conditions d'éligibilité et les plafonds de ressources
          qui s'appliquent :
        </p>
        <h2 className="text-lg font-bold mb-4 underline">
          Conditions d'éligibilité au PTZ
        </h2>
        <p className="mb-4">
          Pour bénéficier du PTZ, l'acquéreur doit répondre à certaines
          conditions :
        </p>
        <ul className="mb-4 text-gray-500">
          <li className="mb-2">
            1. Être primo-accédant : Le PTZ est principalement destiné aux
            personnes acquérant leur première résidence principale. Cela
            signifie que vous ne devez pas avoir été propriétaire de votre
            résidence principale au cours des deux dernières années.
          </li>
          <li className="mb-2">
            2. Utilisation comme résidence principale : Le bien financé par le
            PTZ doit être utilisé comme résidence principale.
          </li>
        </ul>
        <p className="mb-4">
          Toutefois, ces conditions ne s’appliquent pas dans certains cas
          particuliers. Vérifiez si vous répondez aux critères d’éligibilité
          grâce à notre outil.
        </p>

        <h2 className="text-lg font-bold mb-4 underline">
          Plafonds de ressources liés au PTZ
        </h2>

        <p className="mb-4">
          Les plafonds de ressources déterminent si vous êtes éligible au PTZ.
          Il prend en compte le total des revenus fiscaux de référence de
          l'année N-2 des personnes qui vont habiter le logement. Pour une
          demande de PTZ faite en 2023, il s'agit du revenu fiscal de référence
          de 2021, inscrit sur l'avis d'imposition de 2022. Si vous avez des
          revenus provenant de l'étranger, ils sont à prendre en compte. Ces
          plafonds varient en fonction de la localisation du bien et du nombre
          de personnes composant le foyer.
        </p>
        <p className="mb-4">
          Tableau - PTZ : montant maximum selon le nombre de personnes logées et
          la zone de la commune
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead class="bg-blue-500 text-white">
              <tr>
                <th class="p-2 w-1/4">Nombre de personnes logées</th>
                <th class="p-2">Zone A</th>
                <th class="p-2">Zone B1</th>
                <th class="p-2">Zone B2</th>
                <th class="p-2">Zone C</th>
              </tr>
            </thead>
            <tbody class="text-gray-700 text-center">
              <tr>
                <td class="p-2">1</td>
                <td class="p-2">37 000 €</td>
                <td class="p-2">30 000 €</td>
                <td class="p-2">27 000 €</td>
                <td class="p-2">24 000 €</td>
              </tr>
              <tr class="bg-gray-100 text-center">
                <td class="p-2">2</td>
                <td class="p-2">51 800 €</td>
                <td class="p-2">42 000 €</td>
                <td class="p-2">37 800 €</td>
                <td class="p-2">33 600 €</td>
              </tr>
              <tr>
                <td class="p-2">3</td>
                <td class="p-2">62 900 €</td>
                <td class="p-2">51 000 €</td>
                <td class="p-2">45 900 €</td>
                <td class="p-2">40 800 €</td>
              </tr>
              <tr class="bg-gray-100 text-center">
                <td class="p-2">4</td>
                <td class="p-2">74 000 €</td>
                <td class="p-2">60 000 €</td>
                <td class="p-2">54 000 €</td>
                <td class="p-2">48 000 €</td>
              </tr>
              <tr>
                <td class="p-2">5</td>
                <td class="p-2">85 100 €</td>
                <td class="p-2">69 000 €</td>
                <td class="p-2">62 100 €</td>
                <td class="p-2">55 200 €</td>
              </tr>
              <tr class="bg-gray-100 text-center">
                <td class="p-2">6</td>
                <td class="p-2">96 200 €</td>
                <td class="p-2">78 000 €</td>
                <td class="p-2">70 200 €</td>
                <td class="p-2">62 400 €</td>
              </tr>
              <tr>
                <td class="p-2">7</td>
                <td class="p-2">107 300 €</td>
                <td class="p-2">87 000 €</td>
                <td class="p-2">78 300 €</td>
                <td class="p-2">69 600 €</td>
              </tr>
              <tr class="bg-gray-100 text-center">
                <td class="p-2">À partir de 8</td>
                <td class="p-2">118 400 €</td>
                <td class="p-2">96 000 €</td>
                <td class="p-2">86 400 €</td>
                <td class="p-2">76 800 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-bold mb-4 underline">
          Localisation du bien : révision du zonage en octobre 2023
        </h2>
        <p className="mb-4">
          La zone dans laquelle se trouve la ville du bien, associé au nombre de
          personnes logées dans le foyer, détermine à la fois :
        </p>
        <ul className="mb-4 text-gray-500">
          <li className="mb-2">1. Le plafond de ressources à respecter</li>
          <li className="mb-2">2. Le montant maximum du prêt à taux zéro.</li>
        </ul>

        <p className="mb-4">
          Pour connaître les plafonds de ressources spécifiques à votre
          situation, nous mettons à votre disposition un outil de simulation en
          ligne. Cet outil vous permettra d'estimer rapidement votre éligibilité
          et le montant du PTZ auquel vous pouvez prétendre.
        </p>
        <img
          src="/image-page-finale.jpg"
          alt="devenez"
          className="mt-5 rounded-lg w-full"
        />
        <h2 className="text-xl font-bold mb-4 mt-10">
          Prix en TVA réduite : les critères d’éligibilité et les plafonds de
          ressources requis
        </h2>
        <p className="mb-4">
          Si vous envisagez l'achat d'un logement neuf en Zone ANRU ou aux
          abords de ce type de zone, la TVA réduite est une option à considérer.
          Voici ce que vous devez savoir :
        </p>
        <h2 className="text-lg font-bold mb-4 underline">
          Conditions pour l'achat en TVA réduite en Zone ANRU
        </h2>
        <ul className="mb-4 text-gray-500">
          <li className="mb-2">
            1. Localisation du bien : L'achat en TVA réduite concerne les zones
            couvertes par l'ANRU, souvent sujettes à des projets de rénovation
            urbaine.
          </li>
          <li className="mb-2">
            2. Type de bien : Le bien doit être neuf pour bénéficier de la TVA
            réduite.
          </li>
          <li className="mb-2">
            3. Occupation à titre de résidence principale : Vous devez occuper
            le bien en tant que résidence principale.
          </li>
        </ul>
        <h2 className="text-lg font-bold mb-4 underline">
          Plafonds de ressources pour l'achat en TVA réduite
        </h2>
        <p className="mb-4">
          Les plafonds de ressources varient en fonction de la zone (Paris, Île
          de France et autres régions) et du nombre de personnes dans le foyer.
          Notre outil de simulation en ligne prend en compte ces facteurs pour
          vous fournir une estimation complète.
        </p>
        <p className="mb-4">
          Plafonds de ressources applicables pour l'année 2023
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th class="border px-4 py-2">Catégorie de ménages</th>
                <th class="border px-4 py-2">
                  Paris et communes limitrophes (en euros)
                </th>
                <th class="border px-4 py-2">
                  Île-de-France, hors Paris et communes limitrophes (en euros)
                </th>
                <th class="border px-4 py-2">Autres régions (en euros)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-gray-100 text-center">
                <td class="p-2">1 personne</td>
                <td class="p-2">36 314</td>
                <td class="p-2">36 314</td>
                <td class="p-2">31 570</td>
              </tr>
              <tr className="text-gray-700 text-center">
                <td class="p-2">2 personnes</td>
                <td class="p-2">54 272</td>
                <td class="p-2">54 272</td>
                <td class="p-2">42 160</td>
              </tr>
              <tr className="bg-gray-100 text-center">
                <td class="p-2">3 personnes</td>
                <td class="p-2">71 144</td>
                <td class="p-2">65 238</td>
                <td class="p-2">50 700</td>
              </tr>
              <tr className="text-gray-700 text-center">
                <td class="p-2">4 personnes</td>
                <td class="p-2">84 943</td>
                <td class="p-2">78 144</td>
                <td class="p-2">61 208</td>
              </tr>
              <tr className="bg-gray-100 text-center">
                <td class="p-2">5 personnes</td>
                <td class="p-2">101 062</td>
                <td class="p-2">92 507</td>
                <td class="p-2">72 002</td>
              </tr>
              <tr className="text-gray-700 text-center">
                <td class="p-2">6 personnes</td>
                <td class="p-2">113 722</td>
                <td class="p-2">104 101</td>
                <td class="p-2">81 149</td>
              </tr>
              <tr className="bg-gray-100 text-center">
                <td class="p-2">Par personne supplémentaire au-delà de 6</td>
                <td class="p-2">12 673</td>
                <td class="p-2">11 598</td>
                <td class="p-2">9 052</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Basic>
  );
};

export default index;
