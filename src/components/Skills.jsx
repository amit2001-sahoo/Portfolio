import { motion } from "framer-motion"
import { FaCode, FaDatabase, FaPalette, FaMobileAlt } from "react-icons/fa"

const skills = [
  {
    title: "Frontend Development",
    icon: <FaCode size={28} />,
    items: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaDatabase size={28} />,
    items: [
      "Node.js & Express",
      "Python & Django",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette size={28} />,
    items: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt size={28} />,
    items: [
      "React Native",
      "Responsive Design",
      "PWA",
      "Mobile-First",
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-5xl font-bold mb-12"
        >
          Skills & <span className="text-indigo-500">Expertise</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-black text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-800"
            >
              {/* Icon */}
              <div>
                <div className="text-indigo-500 mb-4">
                    {skill.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                    {skill.title}
                </h3>
              </div>
              
              {/* Skill List */}
              <ul className="space-y-2 text-white-700">
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
