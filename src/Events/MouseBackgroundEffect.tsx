'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseBackgroundEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            setMousePosition({ x, y });
        };

        // Añadir el evento de movimiento del mouse
        document.addEventListener("mousemove", handleMouseMove);

        // Limpiar el evento al desmontar el componente
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 30,
                pointerEvents: "none",
                transition: "background 0.3s ease",
            }}
            animate={{
                background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
            }}
            transition={{
                type: "tween",
                duration: 0.2
            }}
        />
    );
};

export default MouseBackgroundEffect;
