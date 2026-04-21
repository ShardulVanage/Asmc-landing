'use client';

import { Suspense } from 'react';
import { Globe, Instagram, Twitter, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnomalousMatterHero } from './GenerativeArtScene';

export default function Hero() {
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
  }

  return (
    <Suspense fallback={<div className="w-full h-screen bg-black" />}>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Generative Art Background */}
        <AnomalousMatterHero
          title=""
          subtitle=""
          description=""
        />

        {/* Navbar */}
        <nav className="absolute top-6 left-0 right-0 z-50 px-6">
          <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center gap-3">
              <Globe size={24} className="text-white" />
              <span className="text-white font-semibold text-lg">Asme</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <button className="text-white text-sm font-medium hover:text-white/80 transition-colors">
                Sign Up
              </button>
              <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Black Overlay */}
        <div className="absolute inset-0 z-20 bg-black/40" />

        {/* Hero Content - Bottom Center */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col items-center px-6 py-16 text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight font-serif"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            Know it then <em className="italic">all</em>
          </motion.h1>

          {/* Email Input */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleEmailSubmit}
            className="mt-8 max-w-xl w-full"
          >
            <div className="liquid-glass rounded-full px-6 py-2 flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors flex-shrink-0"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.form>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white text-sm leading-relaxed px-4 mt-6 max-w-xl"
          >
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </motion.p>

          {/* Manifesto Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors mt-6"
          >
            Manifesto
          </motion.button>
        </div>

        {/* Social Icons Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute -bottom-4 left-0 right-0 z-30 flex justify-center gap-4"
        >
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Instagram size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Twitter size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Globe size={20} />
          </button>
        </motion.div>
      </section>
    </Suspense>
  )
}
