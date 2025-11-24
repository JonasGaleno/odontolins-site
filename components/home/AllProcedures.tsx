"use client"

import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { Button } from "@/components/ui/button"
import ScrollReveal from "../ScrollReveal";

export function AllProcedures() {
    return (
        <section
            id="procedures-section"
            className="py-16 md:py-24 px-4 bg-[#e8e8e8]"
        >
            <div className="max-w-4xl mx-auto text-center">
                <SectionTitle title="CONHEÇA NOSSOS PROCEDIMENTOS" subtitle="Explore todos os nossos procedimentos especializados"/>
                <ScrollReveal
                    delay={0.2}
                    direction="up"
                    className="flex justify-center"
                >
                    <Link href="/procedures">
                        <Button
                            className="bg-[#c9a961] text-[#2a2a2a] font-semibold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-101 cursor-pointer hover:bg-[#C4B37A]"
                        >
                            VER TODOS OS PROCEDIMENTOS
                        </Button>
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}
