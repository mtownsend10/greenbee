import { Hero } from "@/components/home/Hero";
import { HeroMarquee } from "@/components/home/Marquee";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BreadBags } from "@/components/home/BreadBags";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Story } from "@/components/home/Story";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroMarquee />
      <FeaturedProducts />
      <BreadBags />
      <HowItWorks />
      <Story />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
