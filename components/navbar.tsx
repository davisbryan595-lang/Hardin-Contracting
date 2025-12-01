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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 bronze-glow">
            <Image src="/images/hardincontracting.jpg" alt="Hardin Contracting Logo" fill className="object-contain" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-white text-base sm:text-lg leading-none">HARDIN</h1>
            <p className="text-[#CD7F32] text-xs">CONTRACTING</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold text-sm lg:text-base"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold text-sm lg:text-base"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold text-sm lg:text-base"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#CD7F32] transition-colors font-semibold text-sm lg:text-base"
          >
            Contact
          </button>
        </div>

        {/* Phone & Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={openPhone}
            className="hidden sm:flex items-center gap-2 bg-[#CD7F32] hover:bg-[#B8860B] text-white font-bold py-2 px-3 sm:px-4 rounded-lg transition-all text-xs sm:text-sm"
          >
            <Phone size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Call Now</span>
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#CD7F32] hover:text-[#B8860B] p-1">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-[#CD7F32] px-3 py-3 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors text-sm"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors text-sm"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors text-sm"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-white hover:text-[#CD7F32] py-2 font-semibold transition-colors text-sm"
          >
            Contact
          </button>
          <button
            onClick={openPhone}
            className="w-full bg-[#CD7F32] hover:bg-[#B8860B] text-white font-bold py-2 sm:py-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base mt-2"
          >
            <Phone size={16} className="sm:w-5 sm:h-5" />
            Call 256-905-5232
          </button>
        </div>
      )}
    </nav>
  )
}
