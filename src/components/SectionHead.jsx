import Reveal from './Reveal'

export default function SectionHead({ id, title, children }) {
  return (
    <Reveal className="section-head">
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  )
}
