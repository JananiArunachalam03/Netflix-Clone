import TresndingCarousel from "../../Components/TrendingCarousel/TrendingCarousel";
import JoinBenefits from "../../Components/JoinBenefits/JoinBenifts";
import HeroSection from "../../Components/HeroSection/HeroSection";
import FAQAccordion from "../../Components/FAQAccordian/FAQAccordion";
import Footer from "../../Components/Footer/Footer";

export default function Landing() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <TresndingCarousel />
      <JoinBenefits />
      <FAQAccordion />
      <Footer />
    </div>
  );
}
