import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import GalleryGrid from "@/components/GalleryGrid";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialCards from "@/components/TestimonialCards";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesGrid />
      <GalleryGrid />
      <ProcessSteps />
      <TestimonialCards />
      <CTABanner />
    </>
  );
}
