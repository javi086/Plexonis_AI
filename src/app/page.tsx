import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import UseCases from "@/components/UseCases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
        <UseCases />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
