"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
        <Link href="/">
          <Button variant="ghost" className="mb-8 transition-all scroll-reveal" style={{ color: "#2a2a2a" }}>
            ← Voltar
          </Button>
        </Link>

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

      <footer
        className="text-white py-8 px-4 mt-8"
        style={{
          backgroundColor: "#2a2a2a",
        }}
      >
        <div className="max-w-4xl mx-auto flex gap-6 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61583641703351"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:opacity-80 transition-all hover:scale-110"
            style={{
              background: "#c9a961",
            }}
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/odontolinsbsb?igsh=bWl3cW8xZzJiemFl&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:opacity-80 transition-all hover:scale-110"
            style={{
              background: "#c9a961",
            }}
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  )
}
