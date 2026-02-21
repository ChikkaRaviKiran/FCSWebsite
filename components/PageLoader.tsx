'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-gradient-to-br from-primary-900 via-purple-900 to-pink-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Animated logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 flex flex-col items-center"
            >
              <img src="/images/fcs-logo.svg" alt="FCS" className="h-16 w-16 mb-3" />
              <h1 className="text-3xl font-bold text-white">FCS</h1>
            </motion.div>

            {/* Loading spinner */}
            <div className="relative w-20 h-20 mx-auto">
              <motion.div
                className="absolute inset-0 border-4 border-white/20 rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-2 border-4 border-transparent border-t-yellow-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="mt-8 text-white/80 text-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Loading amazing experience...
            </motion.p>
          </div>

          {/* Animated particles */}
          {[...Array(20)].map((_, i) => {
            const startY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
            const endY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
            const startX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
            const startOpacity = Math.random()
            const midOpacity = Math.random()
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: startX,
                  y: startY,
                  opacity: startOpacity,
                }}
                animate={{
                  y: endY,
                  opacity: [startOpacity, midOpacity, startOpacity],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
