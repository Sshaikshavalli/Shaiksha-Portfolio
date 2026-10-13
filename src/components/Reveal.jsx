import { useRef } from 'react'
import { useInView } from '../hooks/hooks'

/** Content swings up out of the page in 3D the first time it scrolls into view. */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const seen = useInView(ref, 0.12)
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
