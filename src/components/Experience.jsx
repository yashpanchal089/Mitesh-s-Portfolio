import { motion } from 'framer-motion'
import { experience as data } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-white to-calm-50/50">
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-calm-700 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-calm-200 -translate-x-px md:-translate-x-1/2" />
        {data.map((job, i) => (
          <motion.div
            key={job.id}
            className={`relative pl-12 md:pl-0 md:flex md:items-start gap-8 mb-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-primary-400 border-4 border-white shadow-soft -translate-x-1/2 top-1 mt-1.5" />
            <div className={`md:w-1/2 ${i % 2 === 1 ? 'md:text-right md:pr-8' : 'md:ml-auto md:pl-8 md:text-left'}`}>
              <p className="font-body text-sm text-primary-500">{job.period}</p>
              <h3 className="font-heading text-lg font-semibold text-calm-700 mt-1">
                {job.role}
              </h3>
              <p className="font-body text-calm-600 font-medium">{job.company}</p>
              <p className="font-body text-sm text-calm-500">{job.location}</p>
            </div>
            <div className={`md:w-1/2 mt-2 md:mt-0 ${i % 2 === 1 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
              <ul className="space-y-1 text-sm font-body text-calm-600">
                {job.points.slice(0, 3).map((point, j) => (
                  <li key={j} className="flex gap-2">
                    {i % 2 === 1 && <span className="md:order-2">•</span>}
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
