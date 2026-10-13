import { useEffect, useRef } from 'react'
import {
  WebGLRenderer, Scene, PerspectiveCamera, AmbientLight, DirectionalLight, PointLight, Group, Mesh,
  MeshStandardMaterial, IcosahedronGeometry, OctahedronGeometry, TorusGeometry, BoxGeometry,
  TorusKnotGeometry, ConeGeometry, DodecahedronGeometry,
} from 'three'
import { prefersReducedMotion } from '../hooks/hooks'

const PALETTE = ['#6C8CFF', '#A57BFF', '#FF5CC8', '#FFC857', '#3DDC97', '#38D5FF', '#FF7A59']

function rng(seed) {
  let a = seed >>> 0
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Floating low-poly 3D shapes rendered with three.js.
 * Pauses when off-screen or the tab is hidden, follows the pointer slightly,
 * and renders a single still frame when the user prefers reduced motion.
 */
export default function ShapesCanvas({ className = '', count = 14, seed = 1, palette = PALETTE, layout = 'free', size = 1 }) {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let renderer
    try {
      renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
    } catch (err) {
      return // WebGL not available: the page still looks fine without the shapes
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    host.appendChild(renderer.domElement)

    const scene = new Scene()
    const camera = new PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 14
    scene.add(new AmbientLight(0xffffff, 1.2))
    const sun = new DirectionalLight(0xffffff, 2.4); sun.position.set(4, 7, 8); scene.add(sun)
    const pink = new PointLight(0xff5cc8, 90, 0, 2); pink.position.set(-7, -3, 6); scene.add(pink)
    const cyan = new PointLight(0x38d5ff, 90, 0, 2); cyan.position.set(8, 4, 5); scene.add(cyan)

    const group = new Group()
    scene.add(group)
    const geos = [
      new IcosahedronGeometry(1, 0), new OctahedronGeometry(1.1), new TorusGeometry(0.8, 0.3, 14, 36),
      new BoxGeometry(1.4, 1.4, 1.4), new TorusKnotGeometry(0.62, 0.2, 80, 10), new ConeGeometry(0.9, 1.7, 5),
      new DodecahedronGeometry(1),
    ]
    const rand = rng(seed)
    const materials = []
    const meshes = []
    const aspect = () => Math.max(host.clientWidth / Math.max(host.clientHeight, 1), 0.6)

    for (let i = 0; i < count; i++) {
      const mat = new MeshStandardMaterial({
        color: palette[i % palette.length], roughness: 0.32, metalness: 0.18, flatShading: true,
      })
      materials.push(mat)
      const mesh = new Mesh(geos[Math.floor(rand() * geos.length)], mat)
      const s = (0.4 + rand() * 0.55) * size
      mesh.scale.setScalar(s)
      let nx = (rand() * 2 - 1) // -1..1 across the view
      let ny = (rand() * 2 - 1)
      // keep text areas clear: 'left-clear' protects the left column, 'frame' keeps shapes to the right and top/bottom edges
      if (layout === 'left-clear' && nx < 0.12 && Math.abs(ny) < 0.74) ny = (ny < 0 ? -1 : 1) * (0.74 + rand() * 0.24)
      if (layout === 'frame' && !(nx > 0.72 || Math.abs(ny) > 0.82)) {
        if (rand() < 0.5) nx = 0.72 + rand() * 0.26
        else ny = (ny < 0 ? -1 : 1) * (0.82 + rand() * 0.15)
      }
      mesh.userData = {
        nx, ny, z: -5 + rand() * 6, rx: (rand() - 0.5) * 0.012, ry: (rand() - 0.5) * 0.016,
        f: 0.4 + rand() * 0.7, p: rand() * Math.PI * 2,
      }
      mesh.rotation.set(rand() * 3, rand() * 3, 0)
      group.add(mesh)
      meshes.push(mesh)
    }

    const place = () => {
      const halfH = Math.tan((45 * Math.PI) / 360) * 14
      const halfW = halfH * aspect()
      meshes.forEach((m) => {
        m.userData.x = m.userData.nx * halfW * 0.95
        m.userData.y = m.userData.ny * halfH * 0.9
        m.position.set(m.userData.x, m.userData.y, m.userData.z)
      })
    }

    const resize = () => {
      const w = host.clientWidth, h = host.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      place()
      if (reduced) renderer.render(scene, camera)
    }

    const reduced = prefersReducedMotion()
    const mouse = { x: 0, y: 0 }
    const onPointer = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    let raf = 0
    let visible = true
    const t0 = performance.now()
    const frame = (now) => {
      const t = (now - t0) / 1000
      group.rotation.y += (mouse.x * 0.28 - group.rotation.y) * 0.04
      group.rotation.x += (-mouse.y * 0.18 - group.rotation.x) * 0.04
      for (const m of meshes) {
        m.rotation.x += m.userData.rx
        m.rotation.y += m.userData.ry
        m.position.y = m.userData.y + Math.sin(t * m.userData.f + m.userData.p) * 0.5
      }
      renderer.render(scene, camera)
      raf = requestAnimationFrame(frame)
    }
    const start = () => { if (!raf && !reduced && visible && !document.hidden) raf = requestAnimationFrame(frame) }
    const stop = () => { cancelAnimationFrame(raf); raf = 0 }

    const ro = new ResizeObserver(resize)
    ro.observe(host)
    resize()
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop() })
    io.observe(host)
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)
    if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true })
    if (reduced) renderer.render(scene, camera)
    start()

    return () => {
      stop()
      ro.disconnect(); io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('pointermove', onPointer)
      geos.forEach((g) => g.dispose())
      materials.forEach((m) => m.dispose())
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [count, seed, palette, layout, size])

  return <div ref={hostRef} className={`shapes ${className}`} aria-hidden="true" />
}
