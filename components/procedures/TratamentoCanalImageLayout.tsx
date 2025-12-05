import { ProcedureImages } from "@/type/procedures";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

interface TratamentoCanalImageLayoutProps {
    images: ProcedureImages[];
}

export default function TratamentoCanalImageLayout ({images}: TratamentoCanalImageLayoutProps) {
    return (
        <div>
            {images.map((item, key) => (
                <div className="mb-6 md:mb-8" key={key}>
                    {item.title !== "" &&
                        <ScrollReveal direction="up" delay={0.1}>
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-4 text-center">
                                {item.title}
                            </h3>
                        </ScrollReveal>
                    }
                    <div className="space-y-4 md:space-y-6">
                        <ScrollReveal direction="up" delay={0.2}>
                            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                                {item.imgs.map((img, key2) => (
                                    <div key={key2} className="flex flex-col items-center">
                                        <p className="text-xs md:text-sm font-semibold text-gray-600 mb-2 uppercase text-center">
                                            {img.label}
                                        </p>
                                        <div
                                            className="relative bg-[#f5f5f5] border-2 md:border-3 border-[#C9A961] rounded-lg flex items-center justify-center aspect-square hover:shadow-lg transition-all duration-300 hover:scale-101 
                                            w-[70%] h-auto sm:w-[275px] sm:h-60 md:w-[330px] md:h-70 lg:w-[450px] lg:h-80 
                                            overflow-hidden"
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
                        </ScrollReveal>
                    </div>
            </div>
            ))}
        </div>
    );
}