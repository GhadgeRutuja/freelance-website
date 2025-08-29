import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;
