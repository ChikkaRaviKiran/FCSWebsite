'use client'

import { useEffect, useRef, useState } from 'react'

const Stats = () => {
  const [inView, setInView] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const stats = [
    { number: 500, label: 'Projects Completed', suffix: '+' },
    { number: 200, label: 'Happy Clients', suffix: '+' },
    { number: 50, label: 'Team Members', suffix: '+' },
    { number: 10, label: 'Years Experience', suffix: '+' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      let startTime: number | null = null
      const duration = 2000

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [inView, end])

    return <span>{count}{suffix}</span>
  }

  return (
    <section ref={statsRef} className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-primary-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
