export default function Hero() {
  return (
    <section id="hero">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              Available for freelance &amp; full-time
            </div>
            <h1 className="hero-name">
              Pranay<br />
              <span>Sawant</span>
            </h1>
            <p className="hero-title">UI/UX Designer &amp; Frontend Developer</p>
            <p className="hero-line">
              I design clean, user-friendly digital experiences that solve real problems through thoughtful design and code.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">View Work →</a>
              <a href="#contact" className="btn-outline">Contact Me ✉</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-3d">
              <div className="card-float card-main">
                <div className="avatar-ring">
                  <div className="avatar-inner">PS</div>
                </div>
                <h3>Pranay Sawant</h3>
                <p>UI/UX · Frontend Dev</p>
                <div className="skill-tags">
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">UX Research</span>
                </div>
              </div>
              <div className="card-stat s1">
                <div className="stat-label">Projects Done</div>
                <div className="stat-value">15+</div>
              </div>
              <div className="card-stat s2">
                <div className="stat-label">Experience</div>
                <div className="stat-value">2+ yrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
