import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
      >
        <h1 className="text-3xl font-bold">
          Resume <span className="text-indigo-500">Overview</span>
        </h1>

        <div className="flex gap-4">
          <a
            href="/amit_latest_resume.pdf"
            download
            className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            Download PDF
          </a>

          <Link
            to="/"
            className="px-4 py-2 border border-gray-600 rounded-lg hover:border-white transition"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>

      {/* Resume Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-6xl mx-auto bg-black/60 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-xl"
      >
        {/* Top bar */}
        <div className="px-6 py-3 border-b border-gray-800 flex items-center gap-2 text-sm text-gray-400">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4">amit_latest_resume.pdf</span>
        </div>

        {/* PDF Viewer */}
        <iframe
          src="/amit_latest_resume.pdf"
          title="Resume PDF"
          className="w-full h-[85vh]"
        />
      </motion.div>

    </div>
  )
}

export default Resume
