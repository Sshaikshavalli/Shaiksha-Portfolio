import { useState } from 'react'
import { profile } from '../data/content'
import { useCopy } from '../hooks/hooks'
import SectionHead from './SectionHead'
import ShapesCanvas from './ShapesCanvas'
import Reveal from './Reveal'
import { GitHub, LinkedIn, Phone, Pin, Copy } from './Icons'

export default function Contact() {
  const [msg, copy] = useCopy()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Fill in your name, email and message, then try again.')
      return
    }
    setError('')
    const subject = `Opportunity for ${profile.name}, from ${form.name}`
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="h-contact" data-tone="spectrum">
      <ShapesCanvas className="contact-canvas" count={10} seed={5} layout="frame" size={0.9} palette={['#FFFFFF', '#FFC857', '#38D5FF', '#FF5CC8', '#3DDC97']} />
      <div className="wrap contact-wrap">
        <SectionHead id="h-contact" title="Let's talk">
          I'm looking for a {profile.seeking} role where I can write clean, secure and maintainable backend code.
        </SectionHead>

        <div className="contact-grid">
          <Reveal className="contact-info">
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="mail-actions">
              <button className="btn btn-small btn-outline" onClick={() => copy(profile.email, 'Email copied')}>
                <Copy width={16} height={16} /> Copy email
              </button>
              <span className="copy-msg" role="status">{msg}</span>
            </div>
            <ul className="contact-links">
              <li><Phone width={18} height={18} /><a href={profile.phoneHref}>{profile.phone}</a></li>
              <li><LinkedIn width={18} height={18} /><a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
              <li><GitHub width={18} height={18} /><a href={profile.github} target="_blank" rel="noopener">GitHub</a></li>
              <li><Pin width={18} height={18} /><span>{profile.location}</span></li>
            </ul>
          </Reveal>

          <Reveal as="div" delay={120}>
          <form className="form" onSubmit={submit} noValidate>
            <label>Your name<input value={form.name} onChange={set('name')} autoComplete="name" /></label>
            <label>Your email<input type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
            <label>Message<textarea rows="5" value={form.message} onChange={set('message')} /></label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="btn btn-primary" type="submit">Send email</button>
            <p className="form-note">This opens your email app with the message filled in.</p>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
