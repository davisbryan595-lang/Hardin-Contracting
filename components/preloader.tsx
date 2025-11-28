"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center">
      {/* Logo with pulsing glow */}
      <div className="mb-8 animate-pulse">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 bronze-glow">
          <Image src="/images/hardincontracting.jpg" alt="Loading" fill className="object-contain" />
        </div>
      </div>

      {/* Loading text */}
      <p className="text-[#CD7F32] font-bold text-lg tracking-widest">HARDIN CONTRACTING</p>
      <p className="text-gray-500 text-sm mt-2">Loading premium content...</p>

      {/* Loading bar */}
      <div className="mt-8 w-24 h-1 bg-[#1E1E1E] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#CD7F32] to-[#B8860B] animate-pulse rounded-full" />
      </div>
    </div>
  )
}
