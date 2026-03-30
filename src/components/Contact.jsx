import { motion } from 'framer-motion'
import { contact as data } from '../data/portfolioData'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_email: data.email,
    }

    // If env vars not configured, fall back to mailto link
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Contact from ${formState.name}`)
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)
      const mailto = `mailto:${data.email}?subject=${subject}&body=${body}`
      window.alert('message sent')
      window.location.href = mailto
      setSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      return
    }

    try {
      setSending(true)
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitted(true)
      window.alert('message sent')
      setFormState({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Email send error', err)
      setError('Failed to send message — please try mailto fallback or check config.')
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-calm-700 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="font-body text-calm-600 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in touch — I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          className="bg-white/80 backdrop-blur border border-calm-100 rounded-2xl p-6 md:p-8 shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-calm-600 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-calm-200 bg-white font-body text-calm-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-calm-600 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-calm-200 bg-white font-body text-calm-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-calm-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-calm-200 bg-white font-body text-calm-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-primary-500 text-white font-body font-medium shadow-soft hover:bg-primary-400 transition-all"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
            </motion.button>
          </form>
          {sending && (
            <p className="mt-4 text-center font-body text-calm-600 text-sm">Sending…</p>
          )}
          {error && (
            <p className="mt-4 text-center font-body text-red-500 text-sm">{error}</p>
          )}
          {!sending && submitted && !error && (
            <p className="mt-4 text-center font-body text-primary-500 text-sm">message sent</p>
          )}
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${data.email}`}
            className="font-body text-calm-600 hover:text-primary-500 transition"
          >
            {data.email}
          </a>
          <a
            href={`tel:${data.phone.replace(/\s/g, '')}`}
            className="font-body text-calm-600 hover:text-primary-500 transition"
          >
            {data.phone}
          </a>
          {data.linkedin && (
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-calm-600 hover:text-primary-500 transition"
            >
              LinkedIn
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
