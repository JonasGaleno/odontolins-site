"use client"

import { procedures } from "@/data/procedures"
import { IoLogoWhatsapp } from "react-icons/io";
import SectionTitle from "@/components/SectionTitle"
import BackButton from "@/components/BackButton"
import DentistInfo from "@/components/procedures/DentistInfo"
import { ProcedureDetail } from "@/type/procedures"
import ImplantesImageLayout from "@/components/procedures/ImplantesImageLayout";
import LentesImageLayout from "@/components/procedures/LentesImageLayout";
import HarmonizacaoImageLayout from "@/components/procedures/HarmonizacaoImageLayout";
import ClareamentoImageLayout from "@/components/procedures/ClareamentoImageLayout";
import SisoImageLayout from "@/components/procedures/SisoImageLayout";
import AparelhoImageLayout from "@/components/procedures/AparelhoImageLayout";
import PlasticaImageLayout from "@/components/procedures/PlasticaImageLayout";
import PediatriaImageLayout from "@/components/procedures/PediatriaImageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { FaWhatsapp } from "react-icons/fa";

const ProcedureImages = ({ procedure }: {procedure: ProcedureDetail}) => {
  switch (procedure.id) {
    case 'implantes':
      return <ImplantesImageLayout images={procedure.images} />;
    case 'lentes':
      return <LentesImageLayout images={procedure.images} />;
    case 'harmonizacao':
      return <HarmonizacaoImageLayout images={procedure.images} />;
    case 'clareamento':
      return <ClareamentoImageLayout images={procedure.images} />;
    case 'siso':
      return <SisoImageLayout images={procedure.images} />;
    case 'aparelho':
      return <AparelhoImageLayout images={procedure.images} />;
    case 'plastica':
      return <PlasticaImageLayout images={procedure.images} />;
    case 'pediatria':
      return <PediatriaImageLayout images={procedure.images} />;
  }
}

export default function ProceduresPage() {
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
        <SectionTitle title="Nossos Procedimentos" subtitle="Conheça todos os procedimentos oferecidos pela nossa clínica com detalhes e informações"/>

        <div className="space-y-8 md:space-y-10">
          {procedures.map((procedure, index) => (
            <ScrollReveal
              key={procedure.id}
              delay={index * 0.1}
              direction="up"
              id={procedure.id}
              className="rounded-xl md:rounded-2xl overflow-hidden scroll-mt-20 md:scroll-mt-24 hover:shadow-xl transition-all max-w-full"
              style={{
                background: "#ffffff",
                border: "2px solid #c9a961",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="p-4 md:p-4 lg:p-6 border-b-2 md:border-b-4 text-center"
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
                {procedure.dentist && 
                  <ScrollReveal direction="left" delay={index * 0.3}>
                    <DentistInfo 
                      dentistName={procedure.dentist} 
                      dentistImageSrc={procedure.dentistImage} 
                      dentistBio={procedure.dentistBio}
                    />
                  </ScrollReveal>
                }

                <ProcedureImages procedure={procedure} />

                <div className="w-full flex items-center justify-center">
                  <ScrollReveal direction="up" delay={0.2}>
                    <button
                      className="flex flex-row gap-2 md:gap-4 items-center justify-center rounded-xl px-10 py-2 md:py-1 bg-[#c9a961] text-[#2a2a2a] font-bold text-xs md:text-base lg:text-lg hover:opacity-80 hover:shadow-lg hover:scale-101 transition-all cursor-pointer"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      onClick={handleWhatsAppClick}
                    >
                      <FaWhatsapp className="w-4 h-4 md:w-6 md:h-6" color="#2a2a2a"/> 
                      <span>Fale Conosco via WhatsApp</span>
                    </button>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  )
}
