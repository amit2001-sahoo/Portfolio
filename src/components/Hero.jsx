import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
  const {scrollY} = useScroll()
  const y = useTransform(scrollY, [0,500], [0,100])
  return (
    <section
    id="hero"
    className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6 pt-24">
        <motion.div
        style={{ y }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-indigo-500">Amit</span>
          <br />
          Software Engineer
        </h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl">
          I build scalable web applications, APIs and modern user interfaces
          with a strong focus on performance and clean architecture.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#projects"
          className="px-6 py-3 bg-indigo-900 text-white rounded-lg font-medium hover:bg-indigo-900 transition">
            View Projects
          </a>

          <a href="/resume"
          className="px-6 py-3 bg-indigo-600 border border-gray-600 rounded-lg font-medium transition">
            View Resume
          </a>

          <a href="#contact"
          className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:border-white transition">
            Contact me
          </a>
        </div>
        
        </motion.div>
    </section>
  )
}

export default Hero