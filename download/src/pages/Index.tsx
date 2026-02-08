import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StarterKitSection from "@/components/StarterKitSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductCollection from "@/components/ProductCollection";
import EssentialsSection from "@/components/EssentialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StarterKitSection />
      <BenefitsSection />
      <ProductCollection />
      <EssentialsSection />
      <Footer />
    </div>
  );
};

export default Index;
