"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BackButton from "@/components/BackButton"

const FAQ_CATEGORIES = [
  {
    name: "Tratamentos em Geral",
    questions: [
      {
        question: "Como marcar uma consulta?",
        answer:
          "Você pode agendar uma consulta entrando em contato conosco via WhatsApp, telefone ou visitando nossa clínica presencialmente.",
      },
      {
        question: "Qual é o horário de atendimento?",
        answer:
          "Atendemos de segunda a sexta-feira, de 8:30 às 19h. Durante os finais de semana, a clínica oferece atendimento de urgência, mediante agendamento prévio, para casos de dor intensa ou necessidade de extração dentária.",
      },
      {
        question: "Vocês aceitam plano de saúde?",
        answer: "Não aceitamos planos de saúde.",
      },
    ],
  },
  {
    name: "Aparelho Ortodôntico",
    questions: [
      {
        question: "Quanto tempo leva um tratamento ortodôntico?",
        answer:
          "Somos referência em entregar tratamentos com aparelho dentário no menor tempo possível, unindo eficiência e qualidade.",
      },
      {
        question: "Qual é a idade ideal para começar tratamento ortodôntico?",
        answer:
          "Aos 6 anos, é o momento ideal para a primeira avaliação ortodôntica, permitindo identificar precocemente problemas e garantir um sorriso saudável no futuro.",
      },
      {
        question: "O aparelho dói?",
        answer:
          "Não dói, mas pode causar um leve desconforto nos primeiros dias após a ativação. Isso normalmente passa em poucos dias.",
      },
      {
        question: "Preciso usar contenção após remover o aparelho?",
        answer:
          "Sim, a contenção é essencial para manter os resultados do tratamento. Recomendamos usar permanentemente.",
      },
    ],
  },
  {
    name: "Implantes Dentários",
    questions: [
      {
        question: "Implantes dentários doem?",
        answer:
          "O procedimento é feito com anestesia local, então não há dor durante a cirurgia. Após o procedimento, pode haver um leve desconforto que normalmente passa em alguns dias.",
      },
      {
        question: "Quanto tempo dura um implante dentário?",
        answer:
          "Com os devidos cuidados e higiene oral adequada, um implante pode durar a vida toda. A osseointegração completa leva aproximadamente 6 meses.",
      },
      {
        question: "Quanto custa um implante?",
        answer:
          "O custo varia bastante conforme o tipo de implante e a complexidade do caso. Recomendamos solicitar um orçamento personalizado em nossa clínica.",
      },
      {
        question: "Há contraindicações para implante?",
        answer:
          "Pessoas com doenças ósseas graves ou problemas de coagulação podem ter limitações. Realizamos uma avaliação completa para determinar a viabilidade.",
      },
    ],
  },
  {
    name: "Clareamento Dental",
    questions: [
      {
        question: "O clareamento enfraquece os dentes?",
        answer: "Não, quando feito corretamente não enfraquece os dentes. Pode causar sensibilidade temporária apenas.",
      },
      {
        question: "Qual é o melhor tipo de clareamento?",
        answer: "O clareamento conjugado (caseiro + consultório) feito no consultório com supervisão do dentista.",
      },
      {
        question: "Posso fazer clareamento em casa?",
        answer: "Sim, mas apenas com produtos e orientação do dentista.",
      },
    ],
  },
  {
    name: "Odontologia Infantil",
    questions: [
      {
        question: "Quando começar a levar crianças ao dentista?",
        answer: "A partir do nascimento do primeiro dentinho ou até 1 ano de idade.",
      },
      {
        question: "Como cuidar dos dentes de leite?",
        answer: "Escove com creme dental com flúor e leve ao dentista regularmente.",
      },
      {
        question: "Quando começam a cair os dentes de leite?",
        answer: "Geralmente entre os 5 e 7 anos de idade.",
      },
      {
        question: "É necessário fluoretação para crianças?",
        answer: "Sim, o flúor ajuda a prevenir cáries e fortalecer os dentes.",
      },
    ],
  },
  {
    name: "Extração de Siso",
    questions: [
      {
        question: "A extração de siso é obrigatória?",
        answer: "Não, só se estiver causando dor, inflamação ou falta de espaço.",
      },
      {
        question: "Qual é o tempo de recuperação após extração?",
        answer: "Em média de 3 a 7 dias, dependendo do caso.",
      },
      {
        question: "A extração de siso é dolorosa?",
        answer: "Durante o procedimento não, pois é feita com anestesia. Depois pode haver leve desconforto.",
      },
      {
        question: "Quantos sisos podem ser extraídos de uma vez?",
        answer: "Podem ser retirados até os quatro de uma vez.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<number>(0)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  useEffect(() => {
    const observedElements = new WeakMap()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const hasActive = entry.target.classList.contains("active")

          if (entry.isIntersecting && !hasActive) {
            entry.target.classList.add("active")
            observedElements.set(entry.target, true)
          } else if (!entry.isIntersecting && !hasActive) {
            return
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
    <main className="min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-4xl mx-auto py-8 md:py-16 px-4">
        <BackButton />
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-2 scroll-reveal"
          style={{ fontFamily: "Poppins, sans-serif", color: "#2a2a2a", letterSpacing: "1px" }}
        >
          Perguntas Frequentes
        </h1>
        <div className="w-20 h-1 mx-auto mb-10 scroll-reveal" style={{ backgroundColor: "#c9a961" }}></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {FAQ_CATEGORIES.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setOpenCategory(index)
                setOpenQuestion(null)
              }}
              className="p-3 rounded-lg font-medium transition-all text-center text-sm scroll-reveal"
              style={{
                backgroundColor: openCategory === index ? "#2a2a2a" : "#f0f0f0",
                color: openCategory === index ? "#c9a961" : "#2a2a2a",
                border: `2px solid ${openCategory === index ? "#c9a961" : "#d0d0d0"}`,
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="space-y-3 mb-12">
          {FAQ_CATEGORIES[openCategory].questions.map((item, index) => (
            <div
              key={index}
              className="border-l-4 rounded-lg overflow-hidden scroll-reveal"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#c9a961",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
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
        </div>

        <div
          className="rounded-lg p-8 text-center border-2 scroll-reveal"
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
          <Button
            size="lg"
            className="text-white font-semibold px-8 py-6 rounded-full hover:shadow-lg transition-all"
            style={{ backgroundColor: "#2a2a2a", border: "2px solid #c9a961" }}
            onClick={() => window.open("https://wa.me/55", "_blank")}
          >
            <svg className="w-5 h-5 mr-2 fill-white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-3h-8V9h8v2zm0-3H4V4h14v4z" />
            </svg>
            Fale Conosco via WhatsApp
          </Button>
        </div>
      </div>
    </main>
  )
}
