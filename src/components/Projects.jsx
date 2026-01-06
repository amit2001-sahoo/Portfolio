import { motion } from "framer-motion"

const projects = [
  {
    title: "Intelligent Document Processor",
    description:
      "AI-powered system to classify documents and extract structured data with human-in-the-loop feedback.",
    tech: ["Python", "LayoutLM", "FastAPI", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "Invoice Automation SaaS",
    description:
      "End-to-end invoice extraction and validation platform that improves accuracy over time.",
    tech: ["OCR", "ML", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Review Analyzer",
    description:
      "NLP-based tool that analyzes customer reviews and provides actionable insights via dashboards.",
    tech: ["NLP", "Python", "LLMs", "Data Analytics"],
    github: "#",
    live: "#",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black px-6 pt-32 pb-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x:-120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
>
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full border border-gray-700 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  className="text-sm text-gray-300 hover:text-white transition"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  className="text-sm text-indigo-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
