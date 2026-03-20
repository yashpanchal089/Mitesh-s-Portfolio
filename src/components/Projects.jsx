import { motion } from 'framer-motion'
import { projects as data } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-calm-700 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project, i) => (
          <motion.article
            key={project.id}
            className="bg-white/80 backdrop-blur border border-calm-100 rounded-2xl p-6 shadow-soft hover:shadow-glass hover:border-primary-100 transition-all"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <p className="font-body text-xs text-primary-500 mb-2">{project.year}</p>
            <h3 className="font-heading text-lg font-semibold text-calm-700 mb-2">
              {project.title}
            </h3>
            <p className="font-body text-sm text-calm-600 mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs font-body rounded-lg bg-primary-50 text-primary-600 border border-primary-100"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-primary-500 hover:text-primary-600"
                >
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-primary-500 hover:text-primary-600"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
