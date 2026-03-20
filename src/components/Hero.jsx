import { motion } from 'framer-motion'
import { hero as data } from '../data/portfolioData'
import { useState, useEffect } from 'react'

function TypingEffect({ words }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    const word = words[index]
    const timeout = setTimeout(
      () => {
        if (!reverse) {
          if (subIndex < word.length) {
            setSubIndex((s) => s + 1)
          } else {
            setReverse(true)
            setTimeout(() => setReverse(false), 2000)
          }
        } else {
          if (subIndex > 0) {
            setSubIndex((s) => s - 1)
          } else {
            setReverse(false)
            setIndex((i) => (i + 1) % words.length)
          }
        }
      },
      reverse ? 50 : 120
    )
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  return (
    <span className="text-primary-500 font-medium">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="bg-gradient-hero flex flex-col lg:flex-row items-center justify-start gap-12 lg:gap-16 px-6 pt-40 pb-10 lg:py-24"
    >
      <motion.div
        className="flex-1 order-2 lg:order-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-primary-500 text-sm md:text-base mb-2 uppercase tracking-wider">
          Hello, I&apos;m
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-calm-700 mb-3">
          {data.name}
        </h1>
        <p className="font-body text-xl md:text-2xl text-calm-600 mb-2">
          {data.title}
        </p>
        <p className="font-body text-calm-500 mb-6 max-w-lg">
          <TypingEffect words={data.typingWords} />
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <motion.a
            href={data.resumeUrl}
            download
            className="px-6 py-3 rounded-xl bg-primary-500 text-white font-body font-medium shadow-soft hover:bg-primary-400 transition-all hover:scale-105 hover:shadow-glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
          <motion.button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl bg-white/80 backdrop-blur border border-calm-200 text-calm-600 font-body font-medium shadow-soft hover:bg-white hover:border-primary-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center order-1 lg:order-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-glass border border-white/50 bg-white/50 backdrop-blur-sm">
          <img
            src={data.photo}
            alt={data.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  )
}
