'use client'

import { useRef, useEffect, useState } from 'react'
import { Globe, Instagram, Twitter, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoOpacity, setVideoOpacity] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const animateOpacity = (from: number, to: number, duration: number) => {
      const startTime = performance.now()
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = from + (to - from) * progress
        setVideoOpacity(current)
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }

    const handleCanPlay = () => {
      video.play()
      animateOpacity(0, 1, 500)
    }

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55) {
        animateOpacity(videoOpacity, 0, 500)
      }
    }

    const handleEnded = () => {
      setVideoOpacity(0)
      setTimeout(() => {
        video.currentTime = 0
        video.play()
        animateOpacity(0, 1, 500)
      }, 100)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [videoOpacity])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-gradient-to-br from-black via-neutral-900 to-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: videoOpacity || 0.5 }}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 z-5" />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
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

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif"
          style={{ fontFamily: 'Instrument Serif, serif' }}
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
        className="relative z-10 flex justify-center gap-4 pb-12"
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
  )
}
