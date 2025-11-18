"use client"

import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { Button } from "@/components/ui/button"

export function AllProcedures() {
    return (
        <section
            id="procedures-section"
            className="py-16 md:py-24 px-4 scroll-reveal"
            style={{
                backgroundColor: "#e8e8e8",
            }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <SectionTitle title="CONHEÇA NOSSOS PROCEDIMENTOS" subtitle="Explore todos os nossos procedimentos especializados"/>
                <div className="flex justify-center">
                    <Link href="/procedures">
                        <Button
                            className="text-white border-2 border-[#c9a961] bg-[#3d3d3d] font-semibold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-101 cursor-pointer"
                        >
                            VER TODOS OS PROCEDIMENTOS
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
