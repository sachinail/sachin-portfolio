import './Experience.css'
import { ACHIEVEMENTS } from '../data'

export default function Experience() {
  return (
    <div className="section-wrap" id="experience">
      <div className="sec-label reveal">Experience</div>
      <h2 className="sec-title reveal">Where I've worked</h2>

      {/* Main role */}
      <div className="exp-card reveal">
        <div className="exp-top">
          <div>
            <div className="exp-company">BixBytes Solutions</div>
            <div className="exp-role-title">Software Engineer · Full-time</div>
            <div className="exp-badges">
              <span className="badge badge-green">Currently here</span>
              <span className="badge badge-amber">Angular</span>
              <span className="badge badge-amber">React</span>
              <span className="badge badge-dim">Mangalore, India</span>
            </div>
          </div>
          <div className="exp-period">
            <strong>May 2022 – Present</strong>
          </div>
        </div>
        <div className="exp-achievements">
          {ACHIEVEMENTS.map((a) => (
            <div className="ach" key={a.num}>
              <div className="ach-icon">{a.num}</div>
              <div className="ach-text">
                <strong>{a.strong}</strong>
                {a.chip && <span className="perf-chip">↑ 40%</span>}
                {a.rest}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
