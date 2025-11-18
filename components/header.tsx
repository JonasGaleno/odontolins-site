"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="text-white sticky top-0 z-50 border-b shadow-lg"
      style={{
        backgroundColor: "#2a2a2a",
        borderColor: "#c9a961",
        boxShadow: "0 4px 20px rgba(201, 169, 97, 0.15)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-light text-2xl hover:opacity-80 transition-opacity"
          style={{ color: "#c9a961", letterSpacing: "1px" }}
        >
          <div className="relative w-[280px] aspect-[5/1] overflow-hidden">
            <Image
              className="object-cover object-center"
              src={"/img/logo/logov2.png"}
              alt={"Logo OdontoLins"}
              title={"Logo OdontoLins"}
              fill
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:opacity-80 transition-opacity font-light" style={{ color: "#ffffff" }}>
            INÍCIO
          </Link>
          <Link
            href="/procedures"
            className="hover:opacity-80 transition-opacity font-light"
            style={{ color: "#ffffff" }}
          >
            PROCEDIMENTOS
          </Link>
          <Link href="/faq" className="hover:opacity-80 transition-opacity font-light" style={{ color: "#ffffff" }}>
            FAQ
          </Link>
          <Button
            size="sm"
            className="font-semibold px-6 py-2 rounded-full cursor-pointer bg-[#c9a961] text-[#2a2a2a] border-none hover:bg-[#C4B37A]"
            onClick={() => window.open("https://wa.me/55", "_blank")}
          >
            CONTATO
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 border-b md:hidden"
            style={{
              backgroundColor: "#2a2a2a",
              borderColor: "#c9a961",
            }}
          >
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="/"
                className="hover:opacity-80 transition-opacity font-light"
                style={{ color: "#ffffff" }}
                onClick={() => setIsOpen(false)}
              >
                INÍCIO
              </Link>
              <Link
                href="/procedures"
                className="hover:opacity-80 transition-opacity font-light"
                style={{ color: "#ffffff" }}
                onClick={() => setIsOpen(false)}
              >
                PROCEDIMENTOS
              </Link>
              <Link
                href="/faq"
                className="hover:opacity-80 transition-opacity font-light"
                style={{ color: "#ffffff" }}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Button
                size="sm"
                className="w-full text-white font-semibold rounded-full"
                style={{ backgroundColor: "#c9a961", color: "#2a2a2a", border: "none" }}
                onClick={() => {
                  window.open("https://wa.me/55", "_blank")
                  setIsOpen(false)
                }}
              >
                CONTATO
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
