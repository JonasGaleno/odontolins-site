"use client"

import SectionTitle from "../SectionTitle";
import ReviewsCarousel from "./reviews-carousel";

export function Testimonials() {
  return (
    <section className="py-10 md:py-24 px-4 md:px-16 bg-[#e8e8e8]">
        <div className="flex flex-col max-w-4xl mx-auto gap-4">
          <SectionTitle title="O QUE NOSSOS PACIENTES DIZEM"/>
          <ReviewsCarousel />
        </div>
    </section>
  );
}
