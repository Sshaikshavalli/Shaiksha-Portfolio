import { useState } from 'react'
import { job } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import Tilt from './Tilt'

const tones = ['cyan', 'violet', 'coral', 'amber']

export default function Experience() {
  const [all, setAll] = useState(false)
  const shown = all ? job.points : job.points.slice(0, 4)
  return (
    <section className="section" id="experience" data-tone="teal" aria-labelledby="h-exp">
      <div className="wrap">
        <SectionHead id="h-exp" title="Experience">Where I worked on real backend code with a team.</SectionHead>
        <Reveal as="article" className="job">
          <header className="job-head">
            <div>
              <h3>{job.title}</h3>
              <p className="job-company">{job.company}</p>
            </div>
            <p className="job-dates">{job.dates}</p>
          </header>

          <ul className="job-metrics" aria-label="Key results">
            {job.highlights.map((h, i) => (
              <Tilt as="li" key={h.label} data-tone={tones[i % tones.length]} max={10}><strong>{h.value}</strong><span>{h.label}</span></Tilt>
            ))}
          </ul>

          <ul className="job-list" id="job-points">
            {shown.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <button className="link-btn" aria-expanded={all} aria-controls="job-points" onClick={() => setAll(!all)}>
            {all ? 'Show fewer' : `Show all ${job.points.length} responsibilities`}
          </button>
        </Reveal>
      </div>
    </section>
  )
}
