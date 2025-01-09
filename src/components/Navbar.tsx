'use client';
import { useState } from "react";
import { motion } from "framer-motion"; // Asegúrate de importar desde 'framer-motion'

const Navbar = () => {

    const [activeSection, setActiveSection] = useState<string>("#about"); // Inicializar como '#about'
    const [hoveredSection, setHoveredSection] = useState<string>("");

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(targetId); // Actualiza la sección activa al hacer clic
        }
    };

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                <li>
                    <motion.a
                        className={`group flex items-center py-3 ${activeSection === "#about" || hoveredSection === "#about" ? "text-slate-200" : "text-slate-500"}`}
                        href="#about"
                        onClick={(e) => handleScroll(e, "#about")}
                        onMouseEnter={() => setHoveredSection("#about")}
                        onMouseLeave={() => setHoveredSection("")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span
                            className={`nav-indicator mr-4 h-px w-8 ${activeSection === "#about" || hoveredSection === "#about" ? "bg-slate-200" : "bg-slate-600"} transition-all group-hover:w-16 group-focus-visible:w-16`}
                        ></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Acerca de mí
                        </span>
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        className={`group flex items-center py-3 ${activeSection === "#experience" || hoveredSection === "#experience" ? "text-slate-200" : "text-slate-500"}`}
                        href="#experience"
                        onClick={(e) => handleScroll(e, "#experience")}
                        onMouseEnter={() => setHoveredSection("#experience")}
                        onMouseLeave={() => setHoveredSection("")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span
                            className={`nav-indicator mr-4 h-px w-8 ${activeSection === "#experience" || hoveredSection === "#experience" ? "bg-slate-200" : "bg-slate-600"} transition-all group-hover:w-16 group-focus-visible:w-16`}
                        ></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Experiencia Laboral
                        </span>
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        className={`group flex items-center py-3 ${activeSection === "#projects" || hoveredSection === "#projects" ? "text-slate-200" : "text-slate-500"}`}
                        href="#projects"
                        onClick={(e) => handleScroll(e, "#projects")}
                        onMouseEnter={() => setHoveredSection("#projects")}
                        onMouseLeave={() => setHoveredSection("")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span
                            className={`nav-indicator mr-4 h-px w-8 ${activeSection === "#projects" || hoveredSection === "#projects" ? "bg-slate-200" : "bg-slate-600"} transition-all group-hover:w-16 group-focus-visible:w-16`}
                        ></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Proyectos
                        </span>
                    </motion.a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
