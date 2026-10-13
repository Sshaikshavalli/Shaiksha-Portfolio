import { useRef } from 'react'
import { projects } from '../data/content'
import { useInView } from '../hooks/hooks'
import SectionHead from './SectionHead'
import ApiExplorer from './ApiExplorer'
import Reveal from './Reveal'
import { GitHub } from './Icons'

const Chips = ({ items }) => (
  <ul className="chips" aria-label="Technologies">{items.map((t) => <li key={t}>{t}</li>)}</ul>
)

function Food() {
  const p = projects.food
  const ref = useRef(null)
  const seen = useInView(ref, 0.4)
  return (
    <article className="project" data-tone="coral">
      <div className="project-info">
        <h3>{p.title}</h3>
        <p className="project-kind">{p.kind}</p>
        <p>{p.text}</p>
        <ul className="facts">
          {p.facts.map((f) => <li key={f.label}><b>{f.value}</b>{f.label}</li>)}
        </ul>
        <Chips items={p.tech} />
        <a className="btn btn-primary" href={p.github} target="_blank" rel="noopener"><GitHub width={18} height={18} /> View on GitHub</a>
      </div>

      <div className="project-visual" ref={ref}>
        <p className="viz-title">Six modules, one order</p>
        <ol className="flow">
          {p.flow.map((s) => <li key={s}>{s}</li>)}
        </ol>

        <p className="viz-title">Retrieval time, 8 critical MySQL queries</p>
        <div className={`bars ${seen ? 'in' : ''}`}>
          <div className="bar-row"><span>Before</span><div className="bar-track"><i className="bar before" /></div><b>850ms</b></div>
          <div className="bar-row"><span>After</span><div className="bar-track"><i className="bar after" /></div><b>510ms</b></div>
        </div>
        <p className="viz-note">40% faster after composite indexing and JOIN refactoring.</p>
      </div>
    </article>
  )
}

function HireNest() {
  const p = projects.hirenest
  return (
    <article className="project project-wide" data-tone="blue">
      <div className="project-info">
        <h3>{p.title}</h3>
        <p className="project-kind">{p.kind}</p>
        <p>{p.text}</p>
        <ul className="points">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
        <Chips items={p.tech} />
      </div>
      <ApiExplorer />
    </article>
  )
}

function Hospital() {
  const p = projects.hospital
  return (
    <article className="project" data-tone="teal">
      <div className="project-info">
        <h3>{p.title}</h3>
        <p className="project-kind">{p.kind}</p>
        <p>{p.text}</p>
        <Chips items={p.tech} />
        <a className="btn btn-outline" href={p.github} target="_blank" rel="noopener"><GitHub width={18} height={18} /> View on GitHub</a>
      </div>

      <div className="project-visual">
        <p className="viz-title">Simplified schema</p>
        <svg className="er" viewBox="0 0 360 230" role="img" aria-label="Appointment table references the patient and doctor tables through foreign keys">
          <g className="er-line">
            <path d="M120 70 H180 V150" />
            <path d="M240 70 H180" />
          </g>
          <g className="er-box"><rect x="20" y="30" width="100" height="80" rx="10" /><text x="70" y="52" className="er-name">patient</text><text x="34" y="76" className="er-col">id <tspan className="er-key">PK</tspan></text><text x="34" y="96" className="er-col">...</text></g>
          <g className="er-box"><rect x="240" y="30" width="100" height="80" rx="10" /><text x="290" y="52" className="er-name">doctor</text><text x="254" y="76" className="er-col">id <tspan className="er-key">PK</tspan></text><text x="254" y="96" className="er-col">...</text></g>
          <g className="er-box"><rect x="110" y="150" width="140" height="64" rx="10" /><text x="180" y="170" className="er-name">appointment</text><text x="124" y="190" className="er-col">patient_id <tspan className="er-key">FK</tspan></text><text x="124" y="206" className="er-col">doctor_id <tspan className="er-key">FK</tspan></text></g>
        </svg>
        <p className="viz-note">Appointments link patients to doctors through foreign keys. Queries use PreparedStatements.</p>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects" data-tone="coral" aria-labelledby="h-proj">
      <div className="wrap">
        <SectionHead id="h-proj" title="Projects">Backend-heavy applications with the numbers to back them up.</SectionHead>
        <div className="project-list">
          <Reveal><Food /></Reveal>
          <Reveal><HireNest /></Reveal>
          <Reveal><Hospital /></Reveal>
        </div>
      </div>
    </section>
  )
}
