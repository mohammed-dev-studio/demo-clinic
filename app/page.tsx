import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroSlider />
        <ServicesPreview />
        <Testimonials />
        <FAQ />
        <EnquiryForm />
        <Contact compact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
