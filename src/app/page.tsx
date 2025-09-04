import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <ContactSection />
    </div>
  );
}
