import { AnimatePresence, motion } from 'framer-motion'
import { useLoadingScreen } from './hooks/useLoadingScreen'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'

function App() {
  const { isLoading, duration } = useLoadingScreen()

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" duration={duration / 1000} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </main>
          <BackToTop />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
