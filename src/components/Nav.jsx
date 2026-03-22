import './Nav.css'
import { NAV_LINKS } from '../data'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        Sachin<span>.</span>
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
