import { HeroSection } from "@/components/home/HeroSection";
import { ServiceTimesCard } from "@/components/home/ServiceTimesCard";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { GivingSection } from "@/components/home/GivingSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceTimesCard />
      <WelcomeSection />
      <GivingSection />
    </>
  );
}
