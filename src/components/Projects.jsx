import './Projects.css'
import { PROJECTS } from '../data'

function ProjectCard({ num, name, icon, desc, points, tech }) {
  return (
    <div className="proj">
      <div className="proj-content">
        <div className="proj-num">{num}</div>
        <div className="proj-name">{name}</div>
        <p className="proj-desc">{desc}</p>
        <div className="proj-points">
          {points.map((pt) => (
            <div className="proj-pt" key={pt}>
              <span className="proj-pt-arrow">↳</span>
              {pt}
            </div>
          ))}
        </div>
        <div className="tech-list">
          {tech.map((t) => (
            <span className="tech" key={t}>{t}</span>
          ))}
        </div>
      </div>
      {/* <div className="proj-icon">{icon}</div> */}
    </div>
  )
}

export default function Projects() {
  return (
    <div className="section-wrap" id="projects">
      <div className="sec-label reveal">Projects</div>
      <h2 className="sec-title reveal">What I've built</h2>

      <div className="projects-grid reveal">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.num} {...p} />
        ))}
      </div>
    </div>
  )
}
