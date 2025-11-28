"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const openPhone = () => (window.location.href = "tel:256-905-5232")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b-2 border-[#CD7F32] z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 bronze-glow">
            <Image src="/images/hardincontracting.jpg" alt="Hardin Contracting Logo" fill className="object-contain" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-white text-lg leading-none">HARDIN</h1>
            <p className="text-[#CD7F32] text-xs">CONTRACTING</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold"
          >
            Contact
          </button>
        </div>

        {/* Phone & Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={openPhone}
            className="hidden sm:flex items-center gap-2 bg-[#CD7F32] hover:bg-[#B8860B] text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            <Phone size={18} />
            <span className="text-sm">Call Now</span>
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#CD7F32] hover:text-[#B8860B]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-[#CD7F32] px-4 py-4 space-y-3">
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors"
          >
            Contact
          </button>
          <button
            onClick={openPhone}
            className="w-full bg-[#CD7F32] hover:bg-[#B8860B] text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Call 256-905-5232
          </button>
        </div>
      )}
    </nav>
  )
}
