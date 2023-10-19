import BreadCrumb from "../components/BreadCrumb";
import CTABanner from "../components/CTABanner";
import EvaluationBanner from "../components/EvaluationBanner";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Basic from "../layout/Basic";

export default function Home() {
  return (
    <Basic>
      <Hero />
      <BreadCrumb list={["ACCUEIL", "ESTIMATION"]} />
      <EvaluationBanner />
      <Faq />
      <CTABanner />
    </Basic>
  );
}
