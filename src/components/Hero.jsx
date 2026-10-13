import { profile } from '../data/content'
import ShapesCanvas from './ShapesCanvas'
import { GitHub, LinkedIn, Mail, Download } from './Icons'

const orbit = [
  ['Java', '#FF7A59'], ['Spring Boot', '#3DDC97'], ['Hibernate', '#A57BFF'],
  ['MySQL', '#38D5FF'], ['REST API', '#FF5CC8'], ['Git', '#FFC857'],
]

export default function Hero() {
  return (
    <section className="hero-band" id="top" data-tone="indigo">
      <ShapesCanvas className="hero-canvas" count={13} seed={11} layout="left-clear" />
      <div className="hero">
        <div className="hero-copy">
          <p className="status"><span className="status-dot" aria-hidden="true" />Open to {profile.seeking} roles</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role} in Bangalore</p>
          <p className="lede">
            I build the part of an application that sits behind the screen: REST APIs, Hibernate mappings and MySQL
            queries that stay fast, secure and easy to maintain.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">See my projects</a>
            <a className="btn btn-outline" href={profile.resume} download><Download width={18} height={18} /> Download resume</a>
          </div>
          <ul className="socials" aria-label="Profiles">
            <li><a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub profile"><GitHub /></a></li>
            <li><a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn profile"><LinkedIn /></a></li>
            <li><a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Send an email"><Mail /></a></li>
          </ul>
        </div>

        <div className="scene">
          <div className="orbit" aria-hidden="true">
            {orbit.map(([label, color], i) => (
              <span key={label} className="orbit-item" style={{ '--a': `${i * 60}deg`, '--c': color }}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
