import './About.css'

function InfoBox({ label, children }) {
  return (
    <div className="info-box reveal">
      <div className="info-box-lbl">{label}</div>
      <div className="info-box-body">{children}</div>
    </div>
  )
}

export default function About() {
  return (
    <div className="section-wrap" id="about">
      <div className="sec-label reveal">About</div>
      <h2 className="sec-title reveal">
        A developer who thinks <em>beyond the code</em>
      </h2>

      <div className="about-grid">
        <div className="about-body reveal">
          <p>
            I'm a <strong>Frontend Developer</strong> with 4+ years of
            experience building scalable, user-first web applications. My work
            spans <strong>CRM platforms, healthcare apps, e-commerce, and SaaS
              products</strong> — always with a sharp focus on performance, clean
            architecture, and accessibility.
          </p>
          <p className="about-pull">
            "I don't just write code — I take ownership of features
            end-to-end, collaborate across teams, and mentor others to raise
            the bar."
          </p>
        </div>

        <div className="about-cards">
          <InfoBox label="Status">
            <span className="status-dot">
              <span className="status-dot-circle" />
              Open to new opportunities
            </span>
          </InfoBox>

          <InfoBox label="Contact">
            <div>
              ✉&nbsp;{' '}
              <a href="mailto:sachincail48@gmail.com">
                sachincail48@gmail.com
              </a>
            </div>
            <div style={{ marginTop: '0.4rem' }}>📞&nbsp; +91 99029 16342</div>
            <div style={{ marginTop: '0.4rem' }}>
              🔗&nbsp;{' '}
              <a
                href="https://linkedin.com/in/sachincail"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sachincail
              </a>
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              📍&nbsp; Mangalore, Karnataka, India
            </div>
          </InfoBox>

          <InfoBox label="Languages spoken">
            <div className="lang-pills">
              {['English','Hindi', 'Tulu', 'Kannada', 'Malayalam'].map((l) => (
                <span key={l} className="lang-pill">{l}</span>
              ))}
            </div>
          </InfoBox>

          <InfoBox label="Education">
            B.E. Electronics &amp; Communication
            <br />
            VTU — Canara Engineering College, 2019
          </InfoBox>
        </div>
      </div>
    </div>
  )
}
