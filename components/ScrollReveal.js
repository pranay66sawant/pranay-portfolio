'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            e.target.querySelectorAll('.skill-bar').forEach(bar => {
              const w = bar.dataset.w || 0.8
              setTimeout(() => {
                bar.style.transform = `scaleX(${w})`
                bar.classList.add('animated')
              }, 200)
            })
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return null
}
