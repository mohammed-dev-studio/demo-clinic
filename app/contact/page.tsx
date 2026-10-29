import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Contact — Smile Studio Dental, Jogeshwari West",
  description:
    "Book a dental appointment at Smile Studio, Jogeshwari West, Mumbai. Walk-ins welcome when the chair is free.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
