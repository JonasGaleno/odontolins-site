"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { procedures } from "@/data/procedures"
import { IoLogoWhatsapp, IoMdArrowBack } from "react-icons/io";
import Image from "next/image"
import SectionTitle from "@/components/SectionTitle"
import BackButton from "@/components/BackButton"

export default function ProceduresPage() {
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
        <BackButton />
        <SectionTitle title="Nossos Procedimentos" subtitle="Conheça todos os procedimentos oferecidos pela nossa clínica com detalhes e informações"/>

        <div className="space-y-6 md:space-y-8">
          {procedures.map((procedure) => (
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
                    <div className="relative border-2 border-[#c9a961] w-16 h-16 md:w-20 md:h-20 rounded-full flex-shrink-0 mx-auto sm:mx-0 overflow-hidden">
                      <Image 
                        className="object-cover"
                        src={procedure.dentistImage || "/placeholder.svg"}
                        fill
                        alt={procedure.dentist}
                        title={procedure.dentist}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-[#2a2a2a] md:text-xl lg:text-2xl font-semibold mb-2 text-center sm:text-left">
                        {procedure.dentist}
                      </h3>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed text-justify">
                        {procedure.dentistBio}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mb-6 md:mb-8">
                  {procedure.beforeAfter && (
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-6 text-center scroll-reveal">
                      Antes e Depois
                    </h3>
                  )}
                  <div className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-2 gap-3 md:gap-4 scroll-reveal">
                      {procedure.images && (
                        procedure.images.map((item, key) => (
                          <div key={key} className="flex flex-col items-center">
                            <p className="text-xs md:text-sm font-semibold text-gray-600 mb-2 uppercase text-center">
                              {item.label}
                            </p>
                            <div
                              className="relative bg-[#f5f5f5] border-2 md:border-3 border-[#C9A961] rounded-lg flex items-center justify-center aspect-square hover:shadow-lg transition-all duration-300 hover:scale-101 w-80 h-80 md:w-[500px] md:h-96 overflow-hidden"
                            >
                              <Image
                                className="object-cover"
                                src={item.src}
                                fill
                                alt="Imagem Antes"
                                title="Representação do estado anterior ao procedimento"
                              />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#3d3d3d] border-2 border-[#c9a961] text-white font-bold text-sm md:text-base lg:text-lg hover:shadow-lg hover:scale-101 transition-all scroll-reveal cursor-pointer"
                  onClick={() => window.open("https://wa.me/55", "_blank")}
                >
                  <IoLogoWhatsapp className="leading-none" size={64} color="#25D366"/> Fale Conosco via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
