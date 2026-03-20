import { motion } from 'framer-motion'
import { contact as data } from '../../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 bg-calm-50 border-t border-calm-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-calm-500">
          © {year} Mitesh Ladva. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${data.email}`} className="font-body text-sm text-calm-500 hover:text-primary-500 transition">
            Email
          </a>
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-calm-500 hover:text-primary-500 transition">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
