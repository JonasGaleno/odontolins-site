"use client"

import { Testimonials } from "@/components/home/Testimonials"
import { Localization } from "@/components/home/Localization"
import { ProceduresSection } from "@/components/home/ProceduresSection"
import { HeroSection } from "@/components/home/HeroSection"
import { AllProcedures } from "@/components/home/AllProcedures"

export default function Home() {
  const handleWhatsAppClick = () => {
    const whatsappPhone = "5561992137533";
    const mensagem = encodeURIComponent(
        "Olá, tudo bem? Vim do site Odonto Lins e gostaria de agendar uma consulta."
    );
    
    window.open(`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${mensagem}`,'_blank');
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <HeroSection handleWhatsAppClick={handleWhatsAppClick}/>
      <ProceduresSection />
      <AllProcedures />
      <Localization />
      <Testimonials />
    </main>
  )
}
