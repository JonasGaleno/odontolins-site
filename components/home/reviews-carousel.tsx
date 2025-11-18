"use client"

import { testimonials } from "@/data/testimonials"
import type React from "react"
import { useState, useEffect } from "react"

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 2

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerView) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [itemsPerView])

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    if (!touchStart || !touchEnd) return

    if (touchStart - touchEnd > 50) {
      nextReview()
    }
    if (touchEnd - touchStart > 50) {
      prevReview()
    }
  }

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + itemsPerView) % testimonials.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - itemsPerView + testimonials.length) % testimonials.length)
  }

  const getVisibleReviews = () => {
    const reviews = []
    for (let i = 0; i < itemsPerView; i++) {
      reviews.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return reviews
  }

  const visibleReviews = getVisibleReviews()
  const currentPage = Math.floor(currentIndex / itemsPerView)
  const totalPages = Math.ceil(testimonials.length / itemsPerView)

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl p-4 md:p-6 shadow-xl transition-all hover:scale-105"
            style={{
              background: "rgba(42, 42, 42, 0.95)",
              backdropFilter: "blur(10px)",
              border: "2px solid #c9a961",
            }}
          >
            <div className="flex gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-lg" style={{ color: "#c9a961" }}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-white text-sm mb-3 leading-relaxed">{review.text}</p>
            <p className="text-white font-semibold text-center text-sm">{review.author}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentIndex((pageIndex * itemsPerView) % testimonials.length)}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              backgroundColor: pageIndex === currentPage ? "#c9a961" : "rgba(201, 169, 97, 0.3)",
            }}
            aria-label={`Review page ${pageIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
