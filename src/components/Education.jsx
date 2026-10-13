import { education } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import Tilt from './Tilt'

const tones = ['amber', 'coral', 'violet']

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="h-edu" data-tone="amber">
      <div className="wrap">
        <SectionHead id="h-edu" title="Education" />
        <ol className="edu">
          {education.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 110}>
              <Tilt className="edu-card" data-tone={tones[i % tones.length]} max={4}>
                <div className="edu-main">
                  <h3>{e.title}</h3>
                  <p>{e.school}</p>
                  <p className="edu-board">{e.board}</p>
                </div>
                <p className="edu-years">{e.years}</p>
                <p className="edu-score">{e.score}</p>
              </Tilt>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
