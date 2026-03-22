import './Contact.css'
import { CONTACT_LINKS } from '../data'

function ContactLink({ icon, label, val, href, arr, isLinkedIn }) {
  const inner = (
    <>
      <div
        className="cl-icon"
        style={
          isLinkedIn
            ? { fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent2)' }
            : {}
        }
      >
        {icon}
      </div>
      <div>
        <div className="cl-lbl">{label}</div>
        <div className="cl-val">{val}</div>
      </div>
      <div className="cl-arr">{arr}</div>
    </>
  )

  return href ? (
    <a
      href={href}
      className="cl"
      target={isLinkedIn ? '_blank' : undefined}
      rel={isLinkedIn ? 'noreferrer' : undefined}
    >
      {inner}
    </a>
  ) : (
    <div className="cl" style={{ cursor: 'default' }}>
      {inner}
    </div>
  )
}

export default function Contact() {
  return (
    <div className="section-wrap" id="contact">
      <div className="contact-grid">
        <div className="reveal">
          <div className="sec-label">Contact</div>
          <h2 className="contact-big">
            Let's build<br />something <em>great.</em>
          </h2>
          <p className="contact-sub">
            Open to full-time roles, contract work, or just a good conversation
            about frontend, performance, and great products.
          </p>
          <a
            href="mailto:sachincail48@gmail.com"
            className="btn btn-primary"
            style={{ width: 'fit-content' }}
          >
            Send me an email →
          </a>
        </div>

        <div className="contact-links reveal">
          {CONTACT_LINKS.map((cl) => (
            <ContactLink key={cl.label} {...cl} />
          ))}
        </div>
      </div>
    </div>
  )
}
