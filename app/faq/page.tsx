"use client"

import { useState } from "react"
import BackButton from "@/components/BackButton"
import { faqs } from "@/data/faq"
import SectionTitle from "@/components/SectionTitle"
import { IoLogoWhatsapp } from "react-icons/io"
import ScrollReveal from "@/components/ScrollReveal"

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<number>(0)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const handleWhatsAppClick = () => {
    const whatsappPhone = "5561992137533";
    const mensagem = encodeURIComponent(
        "Olá, tudo bem? Vim do site Odonto Lins e gostaria de agendar uma consulta."
    );
    
    window.open(`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${mensagem}`,'_blank');
  };

  return (
    <main className="min-h-screen py-4 md:py-8 px-4" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-6xl mx-auto">
        <BackButton />
        <SectionTitle title="Perguntas Frequentes"/>
      </div>
      <div className="max-w-4xl mx-auto pt-10 flex flex-col gap-12">
        <ScrollReveal
          delay={0.2}
          direction="up"
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {faqs.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setOpenCategory(index)
                setOpenQuestion(null)
              }}
              className="p-3 rounded-lg font-medium transition-all text-center text-sm cursor-pointer"
              style={{
                backgroundColor: openCategory === index ? "#2a2a2a" : "#f0f0f0",
                color: openCategory === index ? "#c9a961" : "#2a2a2a",
                border: `2px solid ${openCategory === index ? "#c9a961" : "#d0d0d0"}`,
              }}
            >
              {category.name}
            </button>
          ))}
        </ScrollReveal>

        <ScrollReveal
          delay={0.5}
          direction="up"
          className="flex flex-col gap-3"
        >
          {faqs[openCategory].questions.map((item, index) => (
            <div
              key={index}
              className="border-l-4 rounded-lg overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#c9a961",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left cursor-pointer"
              >
                <p className="font-semibold pr-4 text-balance text-center flex-1" style={{ color: "#2a2a2a" }}>
                  {item.question}
                </p>
                <span
                  style={{
                    color: "#c9a961",
                    transform: openQuestion === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  className="flex-shrink-0 text-lg"
                >
                  ▼
                </span>
              </button>

              {openQuestion === index && (
                <div className="px-6 py-4 border-t-2" style={{ backgroundColor: "#f9f9f9", borderColor: "#e0e0e0" }}>
                  <p className="text-center leading-relaxed" style={{ color: "#666" }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal
          delay={0.8}
          direction="up"
          className="flex flex-col items-center rounded-lg p-8 text-center border-2"
          style={{
            backgroundColor: "#f9f9f9",
            borderColor: "#c9a961",
            boxShadow: "0 4px 15px rgba(201, 169, 97, 0.1)",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ color: "#2a2a2a", letterSpacing: "0.5px" }}>
            Não encontrou a resposta?
          </h2>
          <p className="mb-4" style={{ color: "#666" }}>
            Entre em contato conosco via WhatsApp para tirar mais dúvidas com nossos profissionais
          </p>
          <div className="mb-4 space-y-2">
            <p style={{ color: "#666" }}>
              <strong>Horário de atendimento:</strong> Segunda a sexta, 8:30 às 19h
            </p>
            <p style={{ color: "#dc2626", fontWeight: "bold" }}>NÃO ACEITAMOS PLANOS DE SAÚDE</p>
          </div>
          <button
              className="flex flex-row gap-2 md:gap-4 items-center justify-center px-6 py-3 bg-[#c9a961] text-[#2a2a2a] font-semibold text-sm md:text-base h-auto rounded-full hover:shadow-lg hover:scale-101 transition-all cursor-pointer hover:opacity-90"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={handleWhatsAppClick}
          >
              <IoLogoWhatsapp className="w-4 h-4 md:w-6 md:h-6" color="#2a2a2a"/> Fale Conosco via WhatsApp
          </button>
        </ScrollReveal>
      </div>
    </main>
  )
}
