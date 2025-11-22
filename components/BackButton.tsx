import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IoMdArrowBack } from "react-icons/io";
import ScrollReveal from "./ScrollReveal";

export default function BackButton() {
    return (
      <ScrollReveal
        delay={0.2}
        direction="up"
      >
        <Link href="/">
          <Button variant="ghost" className="mb-4 md:mb-8 hover:bg-gray-200 cursor-pointer text-[#2a2a2a]">
            <IoMdArrowBack /> Voltar
          </Button>
        </Link>
      </ScrollReveal>
    );
}