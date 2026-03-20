import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

import { about as data } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="pt-6 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-calm-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p variants={item} className="font-body text-calm-600 leading-relaxed">
            {data.intro}
          </motion.p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-6">
            {data.highlights.map((point, i) => (
              <motion.li
                key={i}
                variants={item}
                className="flex items-start gap-2 text-calm-600"
              >
                <span className="text-primary-500 mt-1">•</span>
                <span className="font-body">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
