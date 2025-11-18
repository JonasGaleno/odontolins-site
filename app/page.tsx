"use client"

import { useEffect } from "react"
import { Testimonials } from "@/components/Testimonials"
import { Localization } from "@/components/Localization"
import { ProceduresSection } from "@/components/ProceduresSection"
import { HeroSection } from "@/components/HeroSection"
import { AllProcedures } from "@/components/AllProcedures"

export default function Home() {
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
      <HeroSection />
      <ProceduresSection />
      <AllProcedures />
      <Localization />
      <Testimonials />
    </main>
  )
}
