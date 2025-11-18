import { ProcedureImages } from "@/type/procedures";
import Image from "next/image";

interface SisoImageLayoutProps {
    images: ProcedureImages[];
}

export default function SisoImageLayout ({images}: SisoImageLayoutProps) {
    return (
        <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-6 text-center scroll-reveal">
                Antes e Depois
            </h3>
            <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-2 gap-3 md:gap-4 scroll-reveal">
                    {images.map((item, key) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
}