import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <Services />
      <About />
      <Process />
    </>
  );
}