'use client'
import { useState } from 'react'

export default function Contact() {
  const [toastVisible, setToastVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const showToast = () => {
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3500)
  }

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Let&apos;s build something.</h2>
            <p className="section-sub">Got a project in mind? I&apos;d love to hear about it. Let&apos;s connect.</p>
          </div>
          <div className="contact-wrap">
            <div className="contact-info reveal">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                Whether you need a full product designed, a frontend built, or just want to talk design — my inbox is open.
              </p>
              <div className="contact-links">
                <a href="mailto:pranay@sawant.design" className="contact-link">
                  <div className="contact-link-icon">✉️</div>
                  <div className="contact-link-body">
                    <div className="contact-link-label">Email</div>
                    <div className="contact-link-value">pranaysawant2205@gmail.com</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/pranay-sawant-22m5/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-icon">💼</div>
                  <div className="contact-link-body">
                    <div className="contact-link-label">LinkedIn</div>
                    <div className="contact-link-value">linkedin.com/in/pranay-sawant-22m5</div>
                  </div>
                </a>
                <a href="https://github.com/pranay66sawant?tab=overview&from=2026-03-01&to=2026-03-17" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-icon">⚡</div>
                  <div className="contact-link-body">
                    <div className="contact-link-label">GitHub</div>
                    <div className="contact-link-value">github.com/pranay66sawant</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-form reveal reveal-delay-1">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
                onClick={showToast}
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className={`toast${toastVisible ? ' show' : ''}`}>
        ✅ Message sent! I&apos;ll get back to you soon.
      </div>
    </>
  )
}
