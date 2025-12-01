"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Star, ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Preloader from "@/components/preloader"
import OfferPopup from "@/components/offer-popup"

export default function HardinContracting() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")

  const testimonials = [
    {
      name: "John Mitchell",
      role: "Homeowner, Athens AL",
      text: "Hardin Contracting replaced my entire roof in 3 days. Professional crew, pristine workmanship, and they exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Property Manager, Madison County",
      text: "Licensed, insured, and reliable. They installed a complete vinyl fencing system on our commercial property. Highly recommended.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Homeowner, Decatur AL",
      text: "5-star service from start to finish. The team was courteous, professional, and delivered exactly what they promised.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Real Estate Agent, Athens",
      text: "I refer all my clients to Hardin Contracting. Their lifetime warranty gives my clients complete peace of mind.",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!isAutoScroll) return
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoScroll, testimonials.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const openPhone = () => (window.location.href = "tel:256-905-5232")
  const openEmail = () => (window.location.href = "mailto:Jthardin624@gmail.com")

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <Preloader />
      <Navbar />

      <OfferPopup />

      {/* Fixed Call Button */}
      <button
        onClick={openPhone}
        className="fixed bottom-8 right-8 z-50 bg-[#CD7F32] hover:bg-[#B8860B] text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-2xl flex items-center gap-2 group"
      >
        <Phone size={20} className="group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">256-905-5232</span>
      </button>

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative w-full h-screen bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#CD7F32]"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 5}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight text-balance">
            HARDIN CONTRACTING
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-4xl font-bold text-[#CD7F32] mb-4 text-balance">FENCING & ROOFING</h2>

          {/* Service areas banner */}
          <div className="border-t-2 border-b-2 border-[#CD7F32] py-3 mb-8 px-6">
            <p className="text-[#B8860B] font-semibold text-lg tracking-wider">
              Serving Athens • Madison County • Decatur, AL
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="bg-[#CD7F32] hover:bg-[#B8860B] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Get Free Estimate
            </button>
            <button
              onClick={openPhone}
              className="border-2 border-[#B8860B] hover:border-[#CD7F32] text-[#B8860B] hover:text-[#CD7F32] font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Call 256-905-5232
            </button>
          </div>
        </div>
      </section>

      {/* ===== 2. SERVICES SPLIT SECTION ===== */}
      <section id="services" className="w-full bg-[#0A0A0A] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* FENCING */}
          <div className="bg-gradient-to-b from-[#1E1E1E] to-[#0A0A0A] border-r-2 border-[#CD7F32] p-8 sm:p-12">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#CD7F32] mb-8 text-center">FENCING</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "🪵", title: "Wood Fencing", desc: "Premium privacy & style" },
                { icon: "🏗️", title: "Vinyl Fencing", desc: "Low maintenance elegance" },
                { icon: "⛓️", title: "Chain-Link", desc: "Durable & affordable" },
                { icon: "🔩", title: "Metal Fencing", desc: "Strong & secure" },
                { icon: "🎨", title: "Custom Designs", desc: "Your vision realized" },
                { icon: "🚪", title: "Gates & Repairs", desc: "Complete solutions" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="hover-shine bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-6 hover:shadow-lg hover:shadow-[#CD7F32]/50 transition-all"
                >
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h4 className="font-bold text-white text-lg mb-1">{service.title}</h4>
                  <p className="text-[#B8860B] text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROOFING */}
          <div className="bg-[#0A0A0A] p-8 sm:p-12">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#B8860B] mb-8 text-center">ROOFING</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "🏠", title: "New Installation", desc: "Top-quality materials" },
                { icon: "🔄", title: "Replacement", desc: "Complete roof overhaul" },
                { icon: "📦", title: "Shingles", desc: "Premium protection" },
                { icon: "⚙️", title: "Metal Roofing", desc: "Durability & style" },
                { icon: "⏱️", title: "Flat Roofs", desc: "Commercial solutions" },
                { icon: "🔍", title: "Leak Detection", desc: "Expert diagnostics" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="hover-shine bg-[#1E1E1E] border-2 border-[#B8860B] rounded-lg p-6 hover:shadow-lg hover:shadow-[#B8860B]/50 transition-all"
                >
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h4 className="font-bold text-white text-lg mb-1">{service.title}</h4>
                  <p className="text-[#CD7F32] text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. BEFORE/AFTER GALLERY ===== */}
      <section id="gallery" className="w-full bg-[#1E1E1E] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-[#CD7F32]">Our Work Speaks</h3>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Professional installations across Athens, Madison County & Decatur
          </p>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["All", "Split Rail Fencing", "Wood Gates", "Roof Framing", "Roof Installation", "Roof Materials"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-sm sm:text-lg transition-all ${
                  activeCategory === category
                    ? "bg-[#CD7F32] text-white border-2 border-[#CD7F32]"
                    : "bg-transparent text-[#CD7F32] border-2 border-[#CD7F32] hover:bg-[#CD7F32] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Premium Split Rail Fencing", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0071.jpg" },
              { title: "Roof Installation", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0075.jpg" },
              { title: "Wooden Gate", type: "Wood Gates", image: "/hardingallery2/IMG-20251202-WA0074.jpg" },
              { title: "Shingle Roofing", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0080.jpg" },
              { title: "White Rail Fence", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0090.jpg" },
              { title: "Roof Framing Project", type: "Roof Framing", image: "/hardingallery2/IMG-20251202-WA0097.jpg" },
              { title: "Split Rail Installation", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0072.jpg" },
              { title: "Roof Material Preparation", type: "Roof Materials", image: "/hardingallery2/IMG-20251202-WA0098.jpg" },
              { title: "Quality Split Rail", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0073.jpg" },
              { title: "New Roof Construction", type: "Roof Framing", image: "/hardingallery2/IMG-20251202-WA0099.jpg" },
              { title: "Residential Fence", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0074.jpg" },
              { title: "Finished Roofing", type: "Roof Installation", image: "/hardingallery2/IMG-20251202-WA0100.jpg" },
              { title: "Fence Installation", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0076.jpg" },
              { title: "Professional Roof Work", type: "Roof Installation", image: "/hardingallery2/IMG-20251202-WA0101.jpg" },
              { title: "Rail Fence Design", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0077.jpg" },
              { title: "Completed Roof Project", type: "Roof Installation", image: "/hardingallery2/IMG-20251202-WA0102.jpg" },
              { title: "Durable Fencing", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0078.jpg" },
              { title: "Roof Installation Work", type: "Roof Installation", image: "/hardingallery2/IMG-20251202-WA0103.jpg" },
              { title: "Quality Fencing", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0079.jpg" },
              { title: "New Roofing", type: "Roof Installation", image: "/hardingallery2/IMG-20251202-WA0104.jpg" },
              { title: "Residential Fencing", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0081.jpg" },
              { title: "Roof Completion", type: "Roof Installation", image: "/hardingallery2/IMG-20251202-WA0105.jpg" },
              { title: "Professional Fence Work", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0082.jpg" },
              { title: "Custom Fencing", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0083.jpg" },
              { title: "Expert Fencing Services", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0084.jpg" },
              { title: "Premium Fence Work", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0085.jpg" },
              { title: "Quality Fence Installation", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0086.jpg" },
              { title: "Professional Fencing Design", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0087.jpg" },
              { title: "Reliable Fencing", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0088.jpg" },
              { title: "Fencing Solutions", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0089.jpg" },
              { title: "Expert Installation", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0091.jpg" },
              { title: "Fence Project", type: "Split Rail Fencing", image: "/hardingallery1/IMG-20251202-WA0092.jpg" },
              { title: "Wood Gate Installation", type: "Wood Gates", image: "/hardingallery1/IMG-20251202-WA0093.jpg" },
              { title: "Custom Gate", type: "Wood Gates", image: "/hardingallery1/IMG-20251202-WA0094.jpg" },
              { title: "Premium Gate Design", type: "Wood Gates", image: "/hardingallery1/IMG-20251202-WA0095.jpg" },
              { title: "Gate Construction", type: "Wood Gates", image: "/hardingallery1/IMG-20251202-WA0096.jpg" },
              { title: "Roofing Installation", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0097.jpg" },
              { title: "Roof Work", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0098.jpg" },
              { title: "Expert Roofing", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0099.jpg" },
              { title: "Professional Roofing", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0100.jpg" },
              { title: "Shingle Installation", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0101.jpg" },
              { title: "Roof Framing Work", type: "Roof Framing", image: "/hardingallery1/IMG-20251202-WA0102.jpg" },
              { title: "Roofing Project", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0103.jpg" },
              { title: "Roof Services", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0104.jpg" },
              { title: "Complete Roof Installation", type: "Roof Installation", image: "/hardingallery1/IMG-20251202-WA0105.jpg" },
            ].filter((project) => activeCategory === "All" || project.type === activeCategory).map((project, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg border-2 border-[#CD7F32] hover:shadow-lg hover:shadow-[#CD7F32]/50 transition-all"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#CD7F32] to-[#B8860B] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-4">
                    <p className="text-[#CD7F32] font-bold text-sm mb-1">{project.type}</p>
                    <p className="text-white font-bold text-lg text-center">{project.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. WHY CHOOSE HARDIN ===== */}
      <section className="w-full bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#CD7F32]">Why Choose Hardin?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✅",
                title: "Licensed & Insured",
                desc: "Full coverage and professional credentials for peace of mind",
              },
              {
                icon: "⭐",
                title: "5-Star Rated",
                desc: "Consistently top-rated across North Alabama for quality service",
              },
              {
                icon: "🛡️",
                title: "Lifetime Warranty",
                desc: "We stand behind our workmanship with comprehensive protection",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="hover-shine bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-8 text-center hover:shadow-lg hover:shadow-[#CD7F32]/50 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-xl text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. FOUNDER SECTION ===== */}
      <section className="w-full bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#CD7F32]">Meet the Founder</h3>

          <div className="bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Founder Image */}
              <div className="flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden border-2 border-[#CD7F32]">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2Fb0ceac0ba35043d391ca9de683e114b6%2F0adb3a221c7f40999ad9ebd0b2188775?format=webp&width=800"
                    alt="Jonathan Hardin - Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-[#CD7F32] mb-4">Jonathan Hardin</h4>
                <p className="text-[#B8860B] font-semibold text-lg mb-4">Founder & Owner</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 15 years of experience in the construction industry, Jonathan Hardin founded this company with a simple mission: to deliver exceptional quality and professional service to every customer. His dedication to craftsmanship and attention to detail has made Hardin Contracting a trusted name in North Alabama.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When he's not managing projects, Jonathan stays connected with the community and is committed to ensuring every job exceeds expectations. His commitment to excellence has earned consistent 5-star ratings and the loyalty of hundreds of satisfied customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. TESTIMONIALS CAROUSEL ===== */}
      <section id="testimonials" className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#1E1E1E] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#B8860B]">What Our Clients Say</h3>

          <div
            className="bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-8 sm:p-12 relative"
            onMouseEnter={() => setIsAutoScroll(false)}
            onMouseLeave={() => setIsAutoScroll(true)}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={24} className="fill-[#CD7F32] text-[#CD7F32]" />
              ))}
            </div>

            <p className="text-white text-lg sm:text-xl text-center mb-6 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>

            <div className="text-center mb-8">
              <p className="font-bold text-[#CD7F32] text-lg">{testimonials[currentTestimonial].name}</p>
              <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].role}</p>
            </div>

            {/* Carousel controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="bg-[#CD7F32] hover:bg-[#B8860B] text-white p-3 rounded-full transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentTestimonial ? "bg-[#CD7F32] w-6" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="bg-[#CD7F32] hover:bg-[#B8860B] text-white p-3 rounded-full transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. CONTACT SECTION ===== */}
      <section id="contact" className="w-full bg-[#0A0A0A] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-[#CD7F32]">Get Your Free Estimate</h3>
          <p className="text-center text-gray-400 mb-12 text-lg">Contact us today for a no-obligation consultation</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-8">
              <form action="https://formsubmit.co/Hardinscontracting@gmail.com" method="POST" className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#0A0A0A] border-2 border-[#CD7F32] text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-[#0A0A0A] border-2 border-[#CD7F32] text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#0A0A0A] border-2 border-[#CD7F32] text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-all"
                />
                <select name="service" className="w-full bg-[#0A0A0A] border-2 border-[#CD7F32] text-white p-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-all" required>
                  <option value="">Select Service</option>
                  <option value="fencing">Fencing</option>
                  <option value="roofing">Roofing</option>
                  <option value="both">Both Services</option>
                </select>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Zip Code"
                  className="w-full bg-[#0A0A0A] border-2 border-[#CD7F32] text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  required
                  className="w-full bg-[#0A0A0A] border-2 border-[#CD7F32] text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-[#B8860B] transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#B8860B] hover:bg-[#CD7F32] text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact Cards */}
              <div
                className="bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-6 hover:shadow-lg hover:shadow-[#CD7F32]/50 transition-all cursor-pointer"
                onClick={openPhone}
              >
                <div className="flex items-center gap-4">
                  <Phone className="text-[#CD7F32]" size={32} />
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="font-bold text-white text-lg">256-905-5232</p>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-6 hover:shadow-lg hover:shadow-[#CD7F32]/50 transition-all cursor-pointer"
                onClick={openEmail}
              >
                <div className="flex items-center gap-4">
                  <Mail className="text-[#CD7F32]" size={32} />
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="font-bold text-white text-lg">Jthardin624@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E1E1E] border-2 border-[#CD7F32] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#CD7F32] flex-shrink-0 mt-1" size={32} />
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Service Areas</p>
                    <p className="font-bold text-white text-lg leading-relaxed">
                      Athens, AL
                      <br />
                      Madison County, AL
                      <br />
                      Decatur, AL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-[#1E1E1E] border-t-2 border-[#CD7F32] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-[#CD7F32] mb-2">HARDIN CONTRACTING</h4>
              <p className="text-gray-400 text-sm">Premium Roofing & Fencing</p>
            </div>
            <div className="text-center">
              <button
                onClick={openPhone}
                className="text-[#CD7F32] hover:text-[#B8860B] font-bold text-sm transition-all"
              >
                256-905-5232
              </button>
            </div>
            <div className="text-center md:text-right">
              <button
                onClick={openEmail}
                className="text-[#CD7F32] hover:text-[#B8860B] font-bold text-sm transition-all"
              >
                Jthardin624@gmail.com
              </button>
            </div>
          </div>
          <div className="border-t border-[#CD7F32] pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 Hardin Contracting. Licensed & Insured. All Rights Reserved. | Serving Athens • Madison County •
              Decatur, AL
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  )
}
