'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
      setIsVisible(true)
    }

    const mouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseleave', mouseLeave)

    // Add hover effects for interactive elements
    const addHoverEffect = () => {
      const links = document.querySelectorAll('a, button, [role="button"]')
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => setCursorVariant('hover'))
        link.addEventListener('mouseleave', () => setCursorVariant('default'))
      })
    }

    addHoverEffect()

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseleave', mouseLeave)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      mixBlendMode: 'difference' as const,
    }
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-full h-full bg-primary-500 rounded-full opacity-50 blur-sm" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.3
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-lg" />
      </motion.div>
    </>
  )
}

export default CustomCursor
