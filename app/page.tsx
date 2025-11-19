"use client"

import { useEffect } from "react"
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

  useEffect(() => {
    const observedElements = new WeakMap()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const hasActive = entry.target.classList.contains("active")

          if (entry.isIntersecting && !hasActive) {
            entry.target.classList.add("active")
            observedElements.set(entry.target, true)
          } else if (!entry.isIntersecting && hasActive) {
            entry.target.classList.remove("active")
            observedElements.set(entry.target, false)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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
