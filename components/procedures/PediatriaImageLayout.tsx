import { ProcedureImages } from "@/type/procedures";
import Image from "next/image";

interface PediatriaImageLayoutProps {
    images: ProcedureImages[];
}

export default function PediatriaImageLayout ({images}: PediatriaImageLayoutProps) {
    return (
        <div>
            {images.map((item, key) => (
                <div className="mb-6 md:mb-8" key={key}>
                    {item.title !== "" &&
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-4 text-center scroll-reveal">
                            {item.title}
                        </h3>
                    }
                    <div className="space-y-4 md:space-y-6">
                        <div className="grid gap-3 md:gap-4 scroll-reveal">
                            {item.imgs.map((img, key2) => (
                                <div key={key2} className="flex flex-col items-center">
                                    <p className="text-xs md:text-sm font-semibold text-gray-600 mb-2 uppercase text-center">
                                        {img.label}
                                    </p>
                                    <div
                                        className="relative bg-[#f5f5f5] border-2 md:border-3 border-[#C9A961] rounded-lg flex items-center justify-center aspect-square hover:shadow-lg transition-all duration-300 hover:scale-101 
                                        w-80 h-80 sm:w-[50%] md:w-[50%] lg:w-[40%] md:h-96 overflow-hidden"
                                    >
                                        <Image
                                            className="object-cover"
                                            src={img.src}
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
            ))}
        </div>
    );
}