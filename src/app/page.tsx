import FeaturedCourses from "@/components/FeaturedCourses";
import TestimmonialCards from "@/components/TestimmonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimmonialCards />
    </main>
  );
}
