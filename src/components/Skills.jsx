import { skills } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import Tilt from './Tilt'

const tones = ['indigo', 'cyan', 'violet', 'teal', 'coral', 'amber']

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="h-skills" data-tone="magenta">
      <div className="wrap">
        <SectionHead id="h-skills" title="Skills">The tools I use to build and ship backend features.</SectionHead>
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 110}>
              <Tilt className="skill" data-tone={tones[i % tones.length]} max={9}>
                <h3>{s.group}</h3>
                <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
