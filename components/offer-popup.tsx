"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setIsOpen(false)

  const handleGetEstimate = () => {
    setIsOpen(false)
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border-2 border-[#CD7F32] rounded-lg max-w-md w-full p-8 relative shadow-2xl transform animate-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#CD7F32] transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="inline-block bg-[#CD7F32] text-white px-4 py-2 rounded-full text-xs font-bold mb-4 tracking-widest">
            LIMITED TIME OFFER
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">20% OFF</h3>

          <p className="text-[#CD7F32] font-bold text-xl mb-4">Your First Project</p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Get a free estimate and save 20% on your fencing or roofing project when you mention this offer.
          </p>

          {/* Offer Details */}
          <div className="bg-[#0A0A0A] border border-[#CD7F32] rounded-lg p-4 mb-6 text-left">
            <ul className="text-gray-300 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#CD7F32] font-bold">✓</span>
                Licensed & Insured Professionals
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#CD7F32] font-bold">✓</span>
                Free On-Site Consultation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#CD7F32] font-bold">✓</span>
                Lifetime Workmanship Warranty
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleGetEstimate}
              className="w-full bg-[#CD7F32] hover:bg-[#B8860B] text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              Claim Your 20% Off
            </button>
            <button
              onClick={handleClose}
              className="w-full border-2 border-[#CD7F32] text-[#CD7F32] hover:text-[#B8860B] hover:border-[#B8860B] font-bold py-3 px-6 rounded-lg transition-all"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-gray-500 text-xs mt-4">Offer expires soon. Call 256-905-5232 to start today.</p>
        </div>
      </div>
    </div>
  )
}
