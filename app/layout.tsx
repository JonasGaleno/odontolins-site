import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/Footer"
import GTMLoader from "@/components/google/GTMLoader"
import GTMLoaderNoScript from "@/components/google/GTMLoaderNoScript"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Odonto Lins - Clínica Odontológica",
  description: "Clínica de odontologia com serviços de implantes, aparelho, clareamento e muito mais.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <GTMLoader consent={true} />
      </head>
      <body 
        className={`font-sans antialiased ${_poppins.className} text-white`} 
        style={{ backgroundColor: "#0d1b3a" }}
        suppressHydrationWarning
      >
        <GTMLoaderNoScript consent={true} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
