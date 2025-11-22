"use client"

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal";

interface HeroSectionProps {
    handleWhatsAppClick: () => void;
}

export function HeroSection({handleWhatsAppClick}: HeroSectionProps) {
    return (
        <section className="relative w-full h-screen md:h-screen overflow-visible flex items-center justify-center animate-fade-in">
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    background: "linear-gradient(135deg, rgba(20, 29, 75, 1), rgba(24, 34, 87, 0.80))",
                }}
            >
                <div className="w-full h-full flex items-center justify-center px-4">
                    <ScrollReveal
                        delay={0.2}
                        direction="up"
                        className="text-center max-w-4xl"
                    >
                        <div className="w-full flex flex-col items-center mb-8">
                            <div className="relative w-[300px] md:w-[500px] aspect-[5/1] z-10">
                                <Image
                                    className="object-cover"
                                    src={"/img/logo/logov2.png"}
                                    alt={"Logo OdontoLins"}
                                    title={"Logo OdontoLins"}
                                    fill
                                />
                            </div>
                            <div className="w-16 h-0.5 mx-auto mb-4" style={{ backgroundColor: "#c9a961" }}></div>
                            <p className="text-lg md:text-xl text-white/90" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Clínica Odontológica
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <p
                                className="text-xl md:text-2xl font-semibold px-4"
                                style={{ fontFamily: "Poppins, sans-serif", color: "#c9a961" }}
                            >
                                DESCUBRA TUDO QUE PODEMOS FAZER PELO SEU SORRISO
                            </p>
                            <button
                                className="flex flex-row gap-4 items-center justify-center px-10 py-2 bg-[#c9a961] text-[#2a2a2a] font-semibold text-lg h-auto rounded-full shadow-lg hover:shadow-2xl hover:scale-101 transition-all cursor-pointer hover:bg-[#C4B37A]"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                                onClick={handleWhatsAppClick}
                            >
                                <FaWhatsapp className="w-6 h-6" color="#2a2a2a"/> AGENDAR UMA CONSULTA
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
