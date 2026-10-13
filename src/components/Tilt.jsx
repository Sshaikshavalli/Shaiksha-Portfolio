import { useRef } from 'react'
import { prefersReducedMotion } from '../hooks/hooks'

/** Mouse-driven 3D tilt with a moving highlight. Touch and reduced-motion users get a static card. */
export default function Tilt({ children, max = 8, glare = true, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || prefersReducedMotion()) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${(px - 0.5) * 2 * max}deg`)
    el.style.setProperty('--rx', `${-(py - 0.5) * 2 * max}deg`)
    el.style.setProperty('--gx', `${px * 100}%`)
    el.style.setProperty('--gy', `${py * 100}%`)
    el.classList.add('is-tilting')
  }
  const onLeave = () => {
    const el = ref.current
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--rx', '0deg')
    el.classList.remove('is-tilting')
  }

  return (
    <Tag ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      {children}
      {glare && <span className="tilt-glare" aria-hidden="true" />}
    </Tag>
  )
}
