"use client"

import { services } from "@/data/services";
import SectionTitle from "../SectionTitle";

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
    );
}
