import { motion, AnimatePresence } from 'framer-motion'

const DURATION = 4

export default function LoadingScreen({ duration = DURATION }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-soft"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-500 mb-2">
          Welcome
        </h1>
        <p className="font-body text-calm-500 text-lg md:text-xl">
          Loading Portfolio...
        </p>
      </motion.div>

      <motion.div
        className="mt-10 w-full max-w-xs md:max-w-sm h-2 bg-calm-200 rounded-full overflow-hidden shadow-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.p
        className="mt-6 font-body text-sm text-calm-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Mitesh Ladva
      </motion.p>
    </motion.div>
  )
}
