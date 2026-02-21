'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Gradient glow that follows cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9997] hidden md:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <div 
          className="w-[400px] h-[400px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Smaller, faster gradient */}
      <motion.div
        className="fixed pointer-events-none z-[9996] hidden md:block"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.2
        }}
      >
        <div 
          className="w-[200px] h-[200px] rounded-full opacity-40 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(251,191,36,0.2) 50%, transparent 70%)',
          }}
        />
      </motion.div>
    </>
  )
}

export default MouseFollower
