"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import React, { useState } from "react";
import Autoplay from 'embla-carousel-autoplay'
import { clinicImages } from "@/data/clinic";
import SectionTitle from "../SectionTitle";
import ScrollReveal from "../ScrollReveal";

export default function ClinicSection() {
    const [api, setApi] = useState<any>(null)
    
    const plugin = React.useRef(
        Autoplay({ 
            delay: 4000, 
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    )

    const handleMouseEnter = () => {
        if (api) {
            api.plugins().autoplay?.stop?.()
        }
    }

    const handleMouseLeave = () => {
        if (api) {
            api.plugins().autoplay?.play?.()
        }
    }

    return (
        <div className="flex flex-col w-full py-10 md:py-24 px-4 md:px-16 bg-[#e8e8e8]">
            <SectionTitle title="NOSSA CLÍNICA" subtitle="Infraestrutura de ponta para oferecer o melhor atendimento"/>
            <ScrollReveal
                delay={0.2}
                direction="up"
                className="flex items-center justify-center w-full"
            >
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                        align: 'start',
                        loop: true
                    }}
                    className="w-full max-w-4xl rounded-2xl overflow-hidden border-4 border-[#c9a961] shadow-2xl active:cursor-grabbing select-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <CarouselContent>
                    {clinicImages.map((image, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="relative w-full h-[300px] md:h-[450px]">
                                <Image 
                                    src={image.src} 
                                    alt={image.alt}
                                    title={image.alt} 
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </ScrollReveal>
        </div>
    )
}