import './Skills.css'
import { SKILLS } from '../data'

function SkillTag({ label, hot }) {
  return (
    <span className={`stag${hot ? ' stag-hot' : ''}`}>{label}</span>
  )
}

export default function Skills() {
  return (
    <div className="section-wrap" id="skills">
      <div className="sec-label reveal">Skills</div>
      <h2 className="sec-title reveal">What I work with</h2>

      <div className="skills-outer reveal">
        <div className="skills-grid">
          {SKILLS.map((cat) => (
            <div className="skill-cell" key={cat.name}>
              <div className="skill-cell-name">{cat.name}</div>
              <div className="skill-tags">
                {cat.tags.map((t) => (
                  <SkillTag key={t.label} {...t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
