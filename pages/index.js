import BreadCrumb from "../components/BreadCrumb";
import CTABanner from "../components/CTABanner";
import EvaluationBanner from "../components/EvaluationBanner";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Basic from "../layout/Basic";

export default function Home() {
  return (
    <Basic
      title="Simulation Prêt à Taux Zéro - Info PTZ | Estimez Votre Éligibilité Facilement"
      metaDescription="Découvrez rapidement votre éligibilité au prêt à taux zéro avec Info PTZ. Notre simulateur facile à utiliser vous aide à estimer votre prêt pour un financement immobilier avantageux. Commencez dès maintenant !"
    >
      <Hero />
      <BreadCrumb list={["ACCUEIL", "ESTIMATION"]} />
      <EvaluationBanner />
      <Faq />
      <CTABanner />
    </Basic>
  );
}
