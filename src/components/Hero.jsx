import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-wrap">
      {/* <div className="hero-tag">
        <span className="hero-tag-dot" />
        Frontend Developer
      </div> */}
      <h1 className="hero-name">
        Sachin C.<br />
        <span className="hero-name-italic">I build for the web.</span>
      </h1>
      <p className="hero-sub">
        Frontend developer who focuses on what matters —{' '}
        <strong>performance, clean architecture,</strong> and interfaces
        people enjoy using.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">See my work →</a>
        <a href="#contact" className="btn btn-ghost">Get in touch</a>
        <a href="/sachin_resume.pdf"
          download="Sachin_C_Resume.pdf"
          className="btn btn-ghost"
        >
          ↓ Download Resume
          
        </a>
      </div>
    </div>
  )
}
