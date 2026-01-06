import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-6 py-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let’s <span className="text-indigo-500">Connect</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Have a project, role, or idea in mind?  
              I’m always open to discussing new opportunities and collaborations.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                <a
                  href="mailto:amit@example.com"
                  className="text-indigo-500 hover:underline"
                >
                  amit@example.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:amit@example.com"
                  className="text-indigo-500 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="mailto:amit@example.com"
                  className="text-indigo-500 hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-10"
          >
            <form className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-3 focus:outline-none focus:border-indigo-500 transition"
              />

              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-3 focus:outline-none focus:border-indigo-500 transition"
              />

              <textarea
                rows="4"
                placeholder="Tell me about your project or idea"
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-3 focus:outline-none focus:border-indigo-500 transition resize-none"
              />

              <button
                type="submit"
                className="mt-2 bg-indigo-500 hover:bg-indigo-600 transition rounded-xl px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30"
              >
                Send Message →
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
