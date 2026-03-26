const projects = [
  {
    emoji: '🛒',
    bg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    tools: ['Figma', 'React', 'Tailwind'],
    title: 'ShopEase — E-Commerce Redesign',
    problem: 'High cart abandonment (72%) due to confusing checkout flow and cluttered product pages.',
    solution: 'Redesigned checkout as a 3-step wizard, simplified product cards, and added persistent cart.',
    result: <>📈 Result: <span>Checkout completion improved by 34%</span>, bounce rate dropped 18%.</>,
    delay: '',
  },
  {
    emoji: '📊',
    bg: 'linear-gradient(135deg, #1a1060 0%, #0f172a 100%)',
    tools: ['Figma', 'React', 'Chart.js'],
    title: 'FinTrack — Finance Dashboard',
    problem: "Users couldn't understand their spending habits — existing dashboard was data-dense and hard to parse.",
    solution: 'Designed an insight-first dashboard with visual spending breakdowns and smart notifications.',
    result: <>📈 Result: <span>Daily active users increased by 48%</span> within the first month of launch.</>,
    delay: 'reveal-delay-1',
  },
  {
    emoji: '🏥',
    bg: 'linear-gradient(135deg, #0a2a1a 0%, #0f172a 100%)',
    tools: ['Figma', 'Next.js', 'Framer'],
    title: 'MedBook — Healthcare Booking App',
    problem: 'Elderly users struggled to book doctor appointments online — too many steps, poor accessibility.',
    solution: 'Created an accessibility-first design with large typography, voice input support, and 2-tap booking.',
    result: <>📈 Result: <span>Task completion for users 60+ improved by 61%</span> in usability testing.</>,
    delay: 'reveal-delay-2',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Work that speaks.</h2>
          <p className="section-sub">A selection of projects where design met execution.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card reveal${p.delay ? ' ' + p.delay : ''}`}>
              <div className="project-preview" style={{ background: p.bg }}>
                {p.emoji}
              </div>
              <div className="project-body">
                <div className="project-tools">
                  {p.tools.map(t => (
                    <span key={t} className="tool-badge">{t}</span>
                  ))}
                </div>
                <div className="project-title">{p.title}</div>
                <div className="project-problem">
                  <span className="label">Problem</span>
                  <span>{p.problem}</span>
                </div>
                <div className="project-solution">
                  <span className="label">Solution</span>
                  <span>{p.solution}</span>
                </div>
                <div className="project-result">{p.result}</div>
                <a href="#" className="project-link">View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
