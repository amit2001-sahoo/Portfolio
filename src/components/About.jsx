import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 pt-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          About <span className="text-indigo-500">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl text-gray-300 text-lg leading-relaxed"
        >
          <p className="mb-6">
            I’m a software engineer passionate about building scalable web
            applications, APIs, and modern user interfaces. I enjoy turning
            complex problems into simple, elegant solutions.
          </p>

          <p>
            My focus is on clean architecture, performance, and writing
            maintainable code. I’m constantly learning and experimenting with
            new technologies to stay ahead in the fast-moving tech ecosystem.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About
