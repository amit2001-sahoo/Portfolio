import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        message:""
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)
    try{
        const res = await fetch("api/contact", {
            method: "POST",
            headers: {"Content_Type": "application/json"},
            body: JSON.stringify(form),
        })

        if (!res.ok) throw new Error()
        
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
    }
    catch {
        setStatus("error")
    }
    finally {
        setLoading(false)
    }
    }
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-3"
            />

            <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-3"
            />

            <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="bg-transparent border border-gray-700 rounded-xl px-5 py-3"
            />

            <button
                type="submit"
                disabled={loading}
                className="bg-indigo-500 rounded-xl px-6 py-3 text-white"
            >
                {loading ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Try again.</p>
            )}

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
