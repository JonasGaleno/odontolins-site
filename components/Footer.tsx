"use client"

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white py-4 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center w-fit gap-4">
                <div className="relative w-[280px] aspect-[5/1] overflow-hidden z-10">
                    <Image
                        className="object-cover object-center"
                        src={"/img/logo/logov2.png"}
                        alt={"Logo OdontoLins"}
                        title={"Logo OdontoLins"}
                        fill
                    />
                </div>
                <div className="flex gap-6">
                    <a
                        href="https://www.facebook.com/profile.php?id=61583641703351"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full hover:opacity-80 transition-all hover:scale-110 bg-[#c9a961]"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="w-6 h-6 text-white"/>
                    </a>
                    <a
                        href="https://www.instagram.com/odontolinsbsb?igsh=bWl3cW8xZzJiemFl&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full hover:opacity-80 transition-all hover:scale-110 bg-[#c9a961]"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="w-6 h-6 text-white"/>
                    </a>
                </div>
            </div>
            <div className="text-center text-sm md:text-base w-[90%] md:w-[50%]">
                <span>
                    © 2025   -   Feito por <Link className="underline" href="https://www.jonasgaleno.com/" target="_blank" aria-label="Portifólio">Jonas Galeno</Link> e <Link className="underline" href="https://www.linkedin.com/in/matheus-lima-4ba149182/" target="_blank" aria-label="Linkedin">Matheus Lima</Link>  |  Todos os direitos reservados
                </span>
            </div>
        </div>
    </footer>
  );
}
