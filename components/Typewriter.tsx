'use client'

import { useEffect, useState } from 'react'

interface TypewriterProps {
  words: string[]
  className?: string
}

const Typewriter = ({ words, className = '' }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1))
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1))
          if (currentText === '') {
            setIsDeleting(false)
            setCurrentWordIndex((currentWordIndex + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 150
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default Typewriter
