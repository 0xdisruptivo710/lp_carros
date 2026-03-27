import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Problems } from "@/components/sections/problems";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { Results } from "@/components/sections/results";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CtaForm } from "@/components/sections/cta-form";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Problems />
      <Solution />
      <Features />
      <Results />
      <HowItWorks />
      <CtaForm />
      <Footer />
    </>
  );
}
