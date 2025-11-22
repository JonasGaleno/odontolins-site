"use client"

import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";

export function Localization() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#f5f5f5]">
        <ScrollReveal
            delay={0.2}
            direction="up"
            className="max-w-4xl mx-auto"
        >
            <SectionTitle title="LOCALIZAÇÃO" subtitle="Varjão Q 5 Conjunto b Lote 4 - Varjão, Brasília - DF, 71555-136"/>
            <div
                className="w-full h-96 rounded-2xl overflow-hidden"
                style={{
                    border: "3px solid #c9a961",
                    boxShadow: "0 8px 30px rgba(201, 169, 97, 0.15)",
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245738.84183649396!2d-48.08409140546874!3d-15.768618700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a335d383218bf%3A0xb426c8fc336c36d9!2sDentista%20Odonto%20Lins!5e0!3m2!1spt-BR!2sbr!4v1763422081233!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </ScrollReveal>
    </section>
  );
}
