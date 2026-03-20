import { motion } from 'framer-motion'
import { skills as data } from '../data/portfolioData'
import { useMemo, useState } from 'react'

const categories = [
  { key: 'frontend', title: 'Data & Visualization', icon: '📊' },
  { key: 'backend', title: 'Analytics & Data Engineering', icon: '🔧' },
  { key: 'tools', title: 'ERP & Cloud', icon: '☁️' },
  { key: 'process', title: 'Process & Strategy', icon: '📈' },
]

function clampLevel(level) {
  return Math.max(0, Math.min(100, Number(level) || 0))
}

function levelLabel(level) {
  const v = clampLevel(level)
  if (v >= 90) return 'Expert'
  if (v >= 80) return 'Advanced'
  if (v >= 70) return 'Proficient'
  return 'Working'
}

export default function Skills() {
  const [activeKey, setActiveKey] = useState(categories[0]?.key ?? 'frontend')

  const activeCategory = useMemo(
    () => categories.find((c) => c.key === activeKey) ?? categories[0],
    [activeKey]
  )

  const activeSkills = data[activeCategory.key] ?? []

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-calm-50/50 to-white">
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-calm-700 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = cat.key === activeCategory.key
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveKey(cat.key)}
                className={[
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition border',
                  isActive
                    ? 'bg-primary-500 text-white border-primary-500 shadow-soft'
                    : 'bg-white/80 text-calm-600 border-calm-200 hover:border-primary-300 hover:text-primary-600',
                ].join(' ')}
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.title}
              </button>
            )
          })}
        </div>

        <motion.div
          key={activeCategory.key}
          className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-soft"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <p className="font-body text-sm text-primary-500 uppercase tracking-wider mb-2">
                {activeCategory.icon} {activeCategory.title}
              </p>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-calm-700">
                Skills overview
              </h3>
            </div>
            <span className="text-xs font-medium text-primary-700 bg-primary-50/80 rounded-full px-3 py-1 w-fit">
              {activeSkills.length} skills
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {activeSkills.map((skill, i) => (
              <div
                key={`${activeCategory.key}-${skill.name}`}
                className="rounded-2xl border border-calm-100 bg-white/70 px-4 py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-body text-sm md:text-base text-calm-700 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold text-primary-700">
                    {levelLabel(skill.level)}
                  </span>
                </div>
                <div className="mt-3 h-2 bg-calm-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-300 to-primary-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${clampLevel(skill.level)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.05 + i * 0.04 }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-calm-500">
                  <span>Proficiency</span>
                  <span className="font-medium text-calm-600">{clampLevel(skill.level)}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
