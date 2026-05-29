import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturedVideos from "@/components/FeaturedVideos";
import GallerySection from "@/components/GallerySection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <FeaturedVideos />
      <GallerySection />
      <DifferentialsSection />
      <CTASection />
      <ContactForm />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
