import { about, profile } from '../data/content'
import SectionHead from './SectionHead'
import { Pin } from './Icons'
import Reveal from './Reveal'
import Tilt from './Tilt'

export default function About() {
  return (
    <section className="section" id="about" data-tone="violet" aria-labelledby="h-about">
      <div className="wrap">
        <SectionHead id="h-about" title="About me" />
        <div className="about">
          <Reveal><p className="about-text">{about.summary}</p></Reveal>
          <Reveal delay={120}><Tilt as="dl" className="facts-card" max={5}>
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
            <div className="facts-loc"><Pin width={16} height={16} /> {profile.location}</div>
          </Tilt></Reveal>
        </div>
      </div>
    </section>
  )
}
