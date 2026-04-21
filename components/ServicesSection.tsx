'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 1,
    tag: 'Strategy',
    title: 'Research & Insight',
    description: 'We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
  {
    id: 2,
    tag: 'Craft',
    title: 'Design & Execution',
    description: 'From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-serif" style={{ fontFamily: 'Instrument Serif, serif' }}>
            What we do
          </h2>
          <p className="text-white/40 text-sm hidden md:block">Our services</p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="liquid-glass rounded-3xl overflow-hidden group h-full flex flex-col"
            >
              {/* Video Area */}
              <div className="aspect-video relative overflow-hidden bg-black">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  src={service.videoUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="uppercase tracking-widest text-white/40 text-xs mb-4">
                    {service.tag}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif" style={{ fontFamily: 'Instrument Serif, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="mt-6 flex justify-end">
                  <div className="liquid-glass rounded-full p-2">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
