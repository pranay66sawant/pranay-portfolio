'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    items: [
      { label: 'Figma', w: 0.95 },
      { label: 'Wireframing', w: 0.90 },
      { label: 'Prototyping', w: 0.88 },
      { label: 'User Research', w: 0.78 },
    ],
    delay: '',
  },
  {
    icon: '💻',
    title: 'Frontend Dev',
    items: [
      { label: 'HTML / CSS', w: 0.96 },
      { label: 'JavaScript', w: 0.85 },
      { label: 'React', w: 0.82 },
      { label: 'Next.js', w: 0.75 },
    ],
    delay: 'reveal-delay-1',
  },
  {
    icon: '🛠',
    title: 'Tools & Stack',
    items: [
      { label: 'Git / GitHub', w: 0.88 },
      { label: 'Tailwind CSS', w: 0.86 },
      { label: 'Vercel', w: 0.80 },
      { label: 'Framer Motion', w: 0.70 },
    ],
    delay: 'reveal-delay-2',
  },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const bars = sectionRef.current?.querySelectorAll('.skill-bar') || []
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !e.target.classList.contains('animated')) {
            const w = e.target.dataset.w || 0.8
            setTimeout(() => {
              e.target.style.transform = `scaleX(${w})`
              e.target.classList.add('animated')
            }, 200)
          }
        })
      },
      { threshold: 0.5 }
    )
    bars.forEach(b => observer.observe(b))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Skills</div>
          <h2 className="section-title">Tools of the trade.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <div key={i} className={`skill-group reveal${g.delay ? ' ' + g.delay : ''}`}>
              <div className="skill-group-header">
                <div className="skill-group-icon">{g.icon}</div>
                <div className="skill-group-title">{g.title}</div>
              </div>
              <div className="skill-items">
                {g.items.map((item, j) => (
                  <div key={j} className="skill-item-row">
                    <span className="skill-item-label">{item.label}</span>
                    <div className="skill-bar-wrap">
                      <div className="skill-bar" data-w={item.w} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
