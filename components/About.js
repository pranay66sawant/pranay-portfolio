export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img-card">PS</div>
            <div className="about-tag t1">
              <div className="label">Clients Satisfied</div>
              <div className="value">100%</div>
            </div>
            <div className="about-tag t2">
              <div className="label">Open to Work</div>
              <div className="value">✅ Yes</div>
            </div>
          </div>
          <div>
            <div className="section-header reveal">
              <div className="section-label">About Me</div>
              <h2 className="section-title">Designer who<br />also codes.</h2>
            </div>
            <div className="about-text reveal reveal-delay-1">
              <p>
                I&apos;m a <strong>UI/UX designer</strong> focused on creating intuitive and visually appealing interfaces.
                I enjoy solving real-world problems through design and code — bridging the gap between pixel-perfect visuals and working products.
              </p>
              <p>
                When I&apos;m not designing in Figma, I&apos;m building in React. I care deeply about{' '}
                <strong>accessibility, performance, and user delight</strong> — because great design isn&apos;t just beautiful, it works.
              </p>
            </div>
            <div className="about-values reveal reveal-delay-2">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <div className="value-title">User-First Thinking</div>
                <div className="value-desc">Every decision is grounded in what helps the user accomplish their goal.</div>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <div className="value-title">Fast Iteration</div>
                <div className="value-desc">From wireframe to prototype to code — I move quickly without sacrificing quality.</div>
              </div>
              <div className="value-card">
                <div className="value-icon">🧩</div>
                <div className="value-title">Systems Thinking</div>
                <div className="value-desc">Building scalable design systems and component libraries that last.</div>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <div className="value-title">Collaboration</div>
                <div className="value-desc">Comfortable working with cross-functional teams and stakeholders.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
