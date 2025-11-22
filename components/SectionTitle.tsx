import ScrollReveal from "./ScrollReveal";

interface SectionTitle {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({title, subtitle}: SectionTitle) {
    return (
        <ScrollReveal
            delay={0.2}
            direction="up"
            className="text-center"
        >
            <h1
                className="text-3xl md:text-4xl lg:text-5xl font-light mb-2"
                style={{ color: "#2a2a2a", fontFamily: "Poppins, sans-serif", letterSpacing: "1px" }}
            >
                {title}
            </h1>
            <div className="h-1 mx-auto mb-3 md:mb-4 transition-all duration-300 bg-[#c9a961] w-[80px]"></div>
            {subtitle && (
                <p className="text-gray-600 mt-8 mb-6 md:mb-10 text-sm md:text-base lg:text-lg">
                    {subtitle}
                </p>
            )}
        </ScrollReveal>
    );
}