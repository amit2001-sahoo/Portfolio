import { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"

const Navbar = () => {
   const [open, setOpen] = useState(false)

   const links = [
    {name:"Home", href:"#hero"},
    {name:"About", href:"#about"},
    {name:"Skills", href:"#skills"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#contact"}
   ]

   return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold tracking-wide">
                Amit<span className="text-indigo-500">.</span>
            </motion.div>

            <div className="hidden md:flex gap-8">
                {links.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    className="group relative text-grey-300 hover:text-white transition"
                    >
                    {link.name}
                    <span className="absolute left-0 buttom-1 w-0 h-[2px bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>
        </div>

        <AnimatePresence>
            {open && (
                <motion.div>
                    <div className="px-6 py-6 flex flex-col gap-6 text-gray-300">
                        {links.map((link) => (
                            <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="hover:text-white transition text-lg">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </nav>
   )
}

export default Navbar