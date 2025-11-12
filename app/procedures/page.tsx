"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const PROCEDURES = [
  {
    id: "implantes",
    title: "Implantes Dentários",
    dentist: "Dra. Leila",
    dentistImage: "/dentista-mulher.jpg",
    description: "Restauração de dentes perdidos com implantes de alta qualidade",
    dentistBio:
      "A Dra. Leila é cirurgiã-dentista especializada em implantes dentários, atuando com implantes tipo protocolo, carga imediata e implantes unitários. Realiza os procedimentos com sedação assistida, proporcionando maior conforto e tranquilidade ao paciente durante a cirurgia.",
    duration: "3-6 meses",
    price: "A partir de R$ 2.500 por dente",
    details: [
      "Implantes de titânio de excelência",
      "Osseointegração garantida",
      "Aparência e função natural",
      "Durabilidade de até 20 anos",
    ],
    beforeAfterImages: [
      { label1: "Antes", label2: "Depois" },
      { label1: "Unitário", label2: "Protocolo" },
    ],
  },
  {
    id: "lentes",
    title: "Lentes de Contato Dental",
    dentist: "Dr. Bruno",
    dentistImage: "/male-dentist.png",
    description: "Transformação do sorriso com lentes dentárias ultra finas",
    dentistBio:
      "O Dr. Bruno é cirurgião-dentista especialista em lentes de contato dental, oferecendo tratamentos estéticos de alta precisão. Seu foco é proporcionar harmonia, naturalidade e um sorriso perfeito, com técnicas modernas e personalizadas para cada paciente.",
    duration: "2-3 sessões",
    price: "A partir de R$ 1.200 por dente",
    details: [
      "Porcelana de alta resistência",
      "Cor e forma personalizadas",
      "Conservação de estrutura dentária",
      "Resultado imediato",
    ],
    beforeAfterImages: [{ label1: "Antes", label2: "Depois" }],
  },
  {
    id: "harmonizacao",
    title: "Harmonização Facial",
    dentist: "Dra. Leila Lins",
    dentistImage: "/dentista-mulher.jpg",
    description: "Estética facial integrada com procedimentos minimamente invasivos",
    dentistBio:
      "A Dra. Leila Lins é cirurgiã-dentista com expertise em harmonização facial. Realiza procedimentos como preenchimento labial, toxina botulínica (botox), bichectomia, lipo de papada aspirativa, microagulhamento, preenchedores com ácido hialurônico e fios faciais, sempre priorizando naturalidade e equilíbrio estético.",
    duration: "1-2 sessões",
    price: "A partir de R$ 1.500",
    details: [
      "Botox e preenchimento facial",
      "Sorriso mais harmonioso",
      "Resultados naturais",
      "Sem necessidade de cirurgia",
    ],
    beforeAfterImages: [{ label1: "Antes", label2: "Depois" }],
  },
  {
    id: "clareamento",
    title: "Clareamento Dental",
    description:
      "O clareamento dentário devolve o brilho e a beleza do seu sorriso de forma segura e eficaz. Pode ser feito em consultório ou caseiro supervisionado, conforme cada caso. Com o método em consultório, o dente fica mais branco já na primeira sessão!",
    duration: "1 sessão",
    price: "A partir de R$ 800",
    details: ["Técnica de LED profissional", "Sem sensibilidade", "Resultados visíveis", "Efeito duradouro"],
    beforeAfterImages: [{ label1: "Antes", label2: "Depois" }],
  },
  {
    id: "siso",
    title: "Extração de Siso",
    description:
      "Realizamos extração de dentes do siso com técnicas adequadas para cada caso, garantindo segurança e conforto ao paciente. Utilizamos também laserterapia para acelerar a cicatrização e melhorar a regeneração dos tecidos após o procedimento. Nosso objetivo é proporcionar uma recuperação rápida e tranquila, unindo tecnologia e cuidado especializado.",
    duration: "20-40 minutos",
    price: "A partir de R$ 500",
    details: [
      "Cirurgia com mínima invasão",
      "Anestesia confortável",
      "Recuperação rápida",
      "Acompanhamento pós-operatório",
    ],
    beforeAfterImages: [{ label1: "Antes", label2: "Depois" }],
  },
  {
    id: "aparelho",
    title: "Aparelho Ortodôntico",
    dentist: "Dr. Raoney Lima Monteiro",
    dentistImage: "/male-dentist.png",
    description: "Correção de alinhamento dentário para um sorriso perfeito",
    dentistBio:
      "O Dr. Raoney Lima Monteiro é especialista em ortodontia e ortopedia facial. Atua com Alinhador Invisível, aparelhos autoligados estéticos e ortopedia do maxilar, oferecendo tratamentos modernos que aliam eficiência, conforto e estética.",
    duration: "18-24 meses",
    price: "A partir de R$ 3.500",
    details: [
      "Correção de má oclusão e desalinhamento",
      "Melhora na função mastigatória",
      "Técnica moderna e confortável",
      "Acompanhamento mensal",
    ],
    beforeAfterImages: [{ label1: "Antes", label2: "Depois" }],
  },
  {
    id: "plastica",
    title: "Plástica Gengival",
    description:
      "A plástica gengival é um procedimento que corrige a forma e o contorno da gengiva, deixando os dentes aparentarem maiores e mais harmoniosos, sem a necessidade de lentes de contato dental. Além de melhorar a estética do sorriso, trata o excesso de gengiva e proporciona um resultado natural e equilibrado. É um procedimento rápido, seguro e realizado com técnicas modernas para conforto e recuperação tranquila.",
    duration: "45-60 minutos",
    price: "A partir de R$ 1.800",
    details: [
      "Aumento ou redução gengival",
      "Design do sorriso personalizado",
      "Técnica estética e segura",
      "Recuperação rápida",
    ],
    beforeAfterImages: [{ label1: "Antes", label2: "Depois" }],
  },
  {
    id: "pediatria",
    title: "Odontologia Pediátrica",
    description:
      "Na Odontopediatria, cuidamos dos pequenos com carinho e paciência! Fazemos limpezas dentárias, restaurações, tratamentos de canal e aparelhos, tudo para garantir sorrisos saudáveis e uma experiência tranquila e divertida no dentista.",
    duration: "30-45 minutos",
    price: "A partir de R$ 150",
    details: [
      "Ambiente lúdico e acolhedor",
      "Tratamento sem ansiedade",
      "Prevenção e educação",
      "Fluretação e selante",
    ],
    beforeAfterImages: [{ label1: "Antes", label2: "Depois" }],
  },
]

export default function ProceduresPage() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleWidth, setTitleWidth] = useState(0)

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth)
    }
    window.addEventListener("resize", () => {
      if (titleRef.current) {
        setTitleWidth(titleRef.current.offsetWidth)
      }
    })
  }, [])

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

    const procedureCards = document.querySelectorAll(".procedure-card-scroll, .scroll-reveal")
    procedureCards.forEach((card) => observer.observe(card))

    const hash = window.location.hash.slice(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen py-4 md:py-8 px-4" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-4 md:mb-8 hover:bg-gray-200" style={{ color: "#2a2a2a" }}>
            ← Voltar
          </Button>
        </Link>

        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-2 scroll-reveal"
          style={{ color: "#2a2a2a", fontFamily: "Poppins, sans-serif", letterSpacing: "1px" }}
        >
          Nossos Procedimentos
        </h1>
        <div
          className="h-1 mx-auto mb-3 md:mb-4 scroll-reveal transition-all duration-300"
          style={{
            backgroundColor: "#c9a961",
            width: titleWidth > 0 ? `${titleWidth}px` : "80px",
          }}
        ></div>
        <p className="text-center text-gray-600 mb-6 md:mb-12 text-sm md:text-base lg:text-lg scroll-reveal">
          Conheça todos os procedimentos oferecidos pela nossa clínica com detalhes e informações
        </p>

        <div className="space-y-6 md:space-y-8">
          {PROCEDURES.map((procedure) => (
            <div
              key={procedure.id}
              id={procedure.id}
              className="rounded-xl md:rounded-2xl overflow-hidden scroll-mt-20 md:scroll-mt-24 hover:shadow-xl transition-all procedure-card-scroll scroll-reveal max-w-full"
              style={{
                background: "#ffffff",
                border: "2px solid #c9a961",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="p-4 md:p-6 lg:p-8 border-b-2 md:border-b-4 text-center"
                style={{
                  borderColor: "#c9a961",
                  background: "linear-gradient(135deg, #f9f6f0, #fdfcf9)",
                }}
              >
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-light mb-2 text-center w-full"
                  style={{ color: "#2a2a2a", fontFamily: "Poppins, sans-serif" }}
                >
                  {procedure.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg text-center leading-relaxed">
                  {procedure.description}
                </p>
              </div>

              <div className="p-4 md:p-6 lg:p-8">
                {procedure.dentist && (
                  <div className="mb-6 md:mb-8 scroll-reveal flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <img
                      src={procedure.dentistImage || "/placeholder.svg"}
                      alt={procedure.dentist}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0 mx-auto sm:mx-0"
                      style={{ border: "2px solid #c9a961" }}
                    />
                    <div className="flex-1">
                      <h3
                        className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-center sm:text-left"
                        style={{ color: "#2a2a2a" }}
                      >
                        {procedure.dentist}
                      </h3>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed text-justify">
                        {procedure.dentistBio}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mb-6 md:mb-8">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-6 text-center scroll-reveal">
                    Antes e Depois
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    {procedure.beforeAfterImages.map((pair, idx) => (
                      <div key={idx} className="grid grid-cols-2 gap-3 md:gap-4 scroll-reveal">
                        <div>
                          <p className="text-xs md:text-sm font-semibold text-gray-600 mb-2 text-center uppercase">
                            {pair.label1}
                          </p>
                          <div
                            className="w-full rounded-lg flex items-center justify-center aspect-square hover:shadow-lg transition-all"
                            style={{
                              background: "#f5f5f5",
                              border: "2px md:border-3 solid rgba(201, 169, 97, 0.4)",
                            }}
                          >
                            <svg
                              className="w-8 h-8 md:w-12 md:h-12 text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-semibold text-gray-600 mb-2 text-center uppercase">
                            {pair.label2}
                          </p>
                          <div
                            className="w-full rounded-lg flex items-center justify-center aspect-square hover:shadow-lg transition-all"
                            style={{
                              background: "#f5f5f5",
                              border: "2px md:border-3 solid #c9a961",
                            }}
                          >
                            <svg
                              className="w-8 h-8 md:w-12 md:h-12 text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full text-white font-bold text-sm md:text-base lg:text-lg hover:shadow-lg hover:scale-105 transition-all scroll-reveal"
                  style={{
                    background: "#3d3d3d",
                    border: "2px solid #c9a961",
                  }}
                  onClick={() => window.open("https://wa.me/55", "_blank")}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 fill-white" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-3h-8V9h8v2zm0-3H4V4h14v4z" />
                  </svg>
                  Fale Conosco via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
