const steps = [
  {
    num: 'Step 01',
    title: 'Problem Discovery',
    body: 'Analysed Hotjar session recordings and found 68% of users abandoned at step 3 (payment). Conducted 8 user interviews to understand friction points.',
  },
  {
    num: 'Step 02',
    title: 'Research & Wireframes',
    body: 'Benchmarked 5 top e-commerce flows. Created low-fi wireframes in Figma testing a 3-step linear checkout with clear progress indicators.',
  },
  {
    num: 'Step 03',
    title: 'High-Fi Design',
    body: 'Delivered polished screens with a persistent cart sidebar, inline validation, trust signals (lock icons, SSL badge), and guest checkout.',
  },
  {
    num: 'Step 04',
    title: 'Final Outcome',
    body: 'Handed off to dev with a full component library and responsive specs. Post-launch A/B test showed significant improvements across all key metrics.',
  },
]

const outcomes = [
  { stat: '34%', desc: 'Increase in checkout completion rate after redesign' },
  { stat: '−72%', desc: 'Reduction in support tickets about checkout confusion' },
  { stat: '4.8★', desc: 'User satisfaction score in post-launch usability testing' },
]

export default function CaseStudy() {
  return (
    <section id="casestudy">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Case Study</div>
          <h2 className="section-title">Deep dive: ShopEase.</h2>
          <p className="section-sub">How I turned a confusing e-commerce checkout into a conversion machine.</p>
        </div>
        <div className="case-wrap reveal">
          <div className="case-hero">
            <h2>E-Commerce Checkout Redesign</h2>
            <p>
              ShopEase had a 72% cart abandonment rate. Users were dropping off at a 6-step checkout process with no progress indicator,
              confusing form labels, and no guest checkout. The business was losing significant revenue. My goal: simplify and rebuild.
            </p>
          </div>
          <div className="case-steps">
            {steps.map((s, i) => (
              <div key={i} className="case-step">
                <div className="step-num">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-body">{s.body}</div>
              </div>
            ))}
          </div>
          <div className="case-outcome">
            {outcomes.map((o, i) => (
              <div key={i} className="outcome-stat">
                <h3>{o.stat}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
