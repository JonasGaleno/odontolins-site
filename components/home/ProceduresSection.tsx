"use client"

import { services } from "@/data/services";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export function ProceduresSection() {
    const handleServiceClick = (serviceId: string) => {
        window.location.href = `/procedures#${serviceId}`
    }
    return (
        <section className="py-16 md:py-24 lg:py-32 px-4" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <SectionTitle title="NOSSOS PROCEDIMENTOS" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.id)}
                            className="rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col hover:scale-105 bg-white border-2 p-6 scroll-reveal"
                            style={{
                                borderColor: "#c9a961",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                            }}
                        >
                            <div className="relative w-full h-40 md:h-48 lg:h-56 bg-gray-100 flex items-center justify-center rounded-lg mb-4 border border-gray-200 overflow-hidden">
                                <Image
                                    className="object-cover"
                                    src={service.image.src}
                                    fill
                                    alt={service.image.alt}
                                    title={service.image.title}
                                />
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
    );
}
