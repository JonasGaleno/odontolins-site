"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import ReviewsCarousel from "@/components/reviews-carousel"

const SERVICES = [
  { id: "implantes", name: "Implantes" },
  { id: "lentes", name: "Lentes de Contato" },
  { id: "harmonizacao", name: "Harmonização" },
  { id: "clareamento", name: "Clareamento" },
  { id: "siso", name: "Extração de Siso" },
  { id: "aparelho", name: "Aparelho" },
  { id: "plastica", name: "Plástica Gengival" },
  { id: "pediatria", name: "Pediatria" },
]

// teste git

export default function Home() {
  const scrollElementsRef = useRef<HTMLDivElement>(null)
  const [titleWidth, setTitleWidth] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const handleServiceClick = (serviceId: string) => {
    window.location.href = `/procedures#${serviceId}`
  }

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

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen overflow-visible flex items-center justify-center animate-fade-in">
        <img
          src="/clinica-odontologica.jpg"
          alt="Clínica Odontológica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(42, 42, 42, 0.88), rgba(61, 61, 61, 0.80))",
          }}
        >
          <div className="w-full h-full flex items-center justify-center px-4">
            <div className="text-center max-w-4xl scroll-reveal">
              <div className="mb-4">
                <h1
                  className="text-6xl md:text-7xl font-light text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#c9a961", letterSpacing: "2px" }}
                >
                  Ƒ
                </h1>
              </div>
              <h1
                className="text-3xl md:text-5xl font-light text-white mb-2"
                style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "1px" }}
              >
                Odontolins
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Clínica Odontológica
              </p>
              <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: "#c9a961" }}></div>

              <p
                className="text-xl md:text-2xl font-semibold mb-8 px-4"
                style={{ fontFamily: "Poppins, sans-serif", color: "#c9a961" }}
              >
                DESCUBRA TUDO QUE PODEMOS FAZER PELO SEU SORRISO
              </p>

              <Button
                size="lg"
                className="px-10 py-6 text-white font-semibold text-lg h-auto rounded-full shadow-lg hover:shadow-2xl transition-all"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "#c9a961",
                  color: "#2a2a2a",
                }}
                onClick={() => window.open("https://wa.me/55", "_blank")}
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-3h-8V9h8v2zm0-3H4V4h14v4z" />
                </svg>
                AGENDAR UMA CONSULTA
              </Button>

              <p className="text-white/70 text-sm mt-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Agende agora sua consulta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:py-32 px-4" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-2 scroll-reveal"
            style={{ fontFamily: "Poppins, sans-serif", color: "#2a2a2a", letterSpacing: "1px" }}
          >
            NOSSOS PROCEDIMENTOS
          </h2>
          <div
            className="h-1 mb-16 scroll-reveal transition-all duration-300"
            style={{
              backgroundColor: "#c9a961",
              width: titleWidth > 0 ? `${titleWidth}px` : "80px",
            }}
          ></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col hover:scale-105 bg-white border-2 p-6 scroll-reveal"
                style={{
                  borderColor: "#c9a961",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                }}
              >
                <div className="w-full h-40 md:h-48 lg:h-56 bg-gray-100 flex items-center justify-center rounded-lg mb-4 border border-gray-200">
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-semibold group-hover:text-yellow-600 transition-colors text-sm md:text-base text-center flex-1 flex items-center justify-center w-full"
                  style={{ color: "#2a2a2a" }}
                >
                  {service.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures Preview Section */}
      <section
        id="procedures-section"
        className="py-16 md:py-24 px-4 scroll-reveal"
        style={{
          backgroundColor: "#e8e8e8",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-light mb-2 text-center"
            style={{ fontFamily: "Poppins, sans-serif", color: "#2a2a2a", letterSpacing: "1px" }}
          >
            CONHEÇA NOSSOS PROCEDIMENTOS
          </h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: "#c9a961" }}></div>
          <p className="text-gray-600 mb-8 text-lg">Explore todos os nossos procedimentos especializados</p>
          <div className="flex justify-center">
            <Link href="/procedures">
              <Button
                className="text-white font-semibold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                style={{
                  background: "#3d3d3d",
                  border: "2px solid #c9a961",
                }}
              >
                VER TODOS OS PROCEDIMENTOS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 md:py-24 px-4 scroll-reveal" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-center mb-2"
            style={{ fontFamily: "Poppins, sans-serif", color: "#2a2a2a", letterSpacing: "1px" }}
          >
            LOCALIZAÇÃO
          </h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: "#c9a961" }}></div>
          <div
            className="w-full h-96 rounded-2xl overflow-hidden"
            style={{
              border: "3px solid #c9a961",
              boxShadow: "0 8px 30px rgba(201, 169, 97, 0.15)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976147287543!2d-46.65429!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5788789999%3A0x123456789!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Google Reviews & Social */}
      <section
        className="py-16 md:py-24 px-4 scroll-reveal"
        style={{
          backgroundColor: "#e8e8e8",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-center mb-2"
            style={{ fontFamily: "Poppins, sans-serif", color: "#2a2a2a", letterSpacing: "1px" }}
          >
            O QUE NOSSOS PACIENTES DIZEM
          </h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ backgroundColor: "#c9a961" }}></div>
          <ReviewsCarousel />
        </div>
      </section>

      <footer
        className="text-white py-8 px-4"
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
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98-.059-1.28-.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  )
}
