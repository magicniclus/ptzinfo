import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    id: 1,
    question: "Pourquoi est-il important de simuler son PTZ sur notre site ?",
    answer:
      "La simulation de votre PTZ sur notre site vous permet de déterminer avec précision l'ampleur de l'aide que vous pouvez obtenir pour votre projet immobilier. Cela optimise votre plan de financement en prenant en compte les conditions actuelles et les critères spécifiques du PTZ.",
  },
  {
    id: 2,
    question: "Comment notre site assure-t-il une simulation précise du PTZ ?",
    answer:
      "Notre site utilise des données actualisées sur les barèmes du PTZ, les plafonds de ressources, et les zones géographiques concernées. Nos algorithmes sont conçus pour intégrer tous les critères nécessaires afin de vous fournir une estimation précise de votre éligibilité et du montant du PTZ.",
  },
  {
    id: 3,
    question:
      "Quelle est la valeur ajoutée d'une simulation PTZ en ligne sur notre site ?",
    answer:
      "Notre simulation en ligne vous donne un aperçu rapide et personnalisé de votre capacité d'emprunt avec le PTZ. Elle prend en compte les spécificités de votre projet et vous aide à comprendre comment le PTZ peut s'intégrer dans votre financement global.",
  },
  {
    id: 4,
    question:
      "Comment les informations sur le PTZ sont-elles tenues à jour sur notre site ?",
    answer:
      "Nous maintenons des liens étroits avec les institutions financières et suivons les modifications législatives pour actualiser en continu nos simulateurs avec les dernières informations disponibles concernant le PTZ.",
  },
  {
    id: 5,
    question:
      "Les informations fournies pour la simulation du PTZ sont-elles sécurisées sur notre site ?",
    answer:
      "Totalement. Nous appliquons des mesures de sécurité rigoureuses pour assurer la confidentialité et la protection de vos données personnelles. Votre vie privée est respectée et vos informations ne sont utilisées que pour la simulation de votre PTZ.",
  },
  {
    id: 6,
    question:
      "Combien de temps faut-il pour réaliser une simulation de PTZ sur notre site ?",
    answer:
      "Notre simulateur de PTZ est conçu pour être rapide et intuitif. En quelques minutes, vous pouvez obtenir une estimation de votre éligibilité et du montant potentiel de votre PTZ.",
  },
  {
    id: 7,
    question:
      "En quoi la simulation de PTZ sur notre site diffère-t-elle des autres outils disponibles ?",
    answer:
      "Notre simulateur de PTZ se distingue par sa précision, l'actualisation constante de ses données et son ergonomie. Nous visons à fournir une expérience utilisateur sans faille, tout en garantissant des résultats fiables et personnalisés.",
  },
  {
    id: 8,
    question: "La simulation du PTZ est-elle gratuite sur notre site ?",
    answer:
      "Oui, la simulation du PTZ sur notre site est entièrement gratuite. Elle est destinée à vous fournir toutes les informations nécessaires pour planifier votre financement immobilier avec le PTZ.",
  },
  {
    id: 9,
    question:
      "Puis-je me fier aux résultats de la simulation de PTZ proposée par notre site ?",
    answer:
      "Absolument. Nos simulations s'appuient sur les données les plus récentes et sont régulièrement vérifiées pour assurer leur fiabilité. Toutefois, nous recommandons de consulter un conseiller financier pour une analyse approfondie de votre situation.",
  },
  {
    id: 10,
    question:
      "Quels avantages y a-t-il à utiliser notre site pour simuler un PTZ plutôt qu'un autre outil ?",
    answer:
      "Notre site est spécialement conçu pour simplifier la simulation de votre PTZ. Nous offrons une interface utilisateur claire, des conseils personnalisés et des informations à jour, ce qui vous permet de prendre les meilleures décisions pour votre financement immobilier.",
  },
];

const Faq = () => {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-[1250px] px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-[1250px]  divide-y divide-gray-700/10">
          <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
            Questions fréquentes :
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-700">
                        <span className="text-base leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-xs leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
