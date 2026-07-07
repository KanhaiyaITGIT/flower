import { useEffect, useRef } from 'react'

const COUNT = 60
const COLORS = ['rgba(214,83,122,0.4)', 'rgba(201,161,90,0.35)', 'rgba(244,201,209,0.25)', 'rgba(255,255,255,0.2)']

export default function ParticleCanvas({ className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h
    let particles = []

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
      initParticles()
    }

    function initParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: -(Math.random() * 0.3 + 0.1),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: Math.random() * 200 + 100,
        maxLife: Math.random() * 200 + 100,
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    let prev = 0
    function draw(t) {
      const dt = prev ? Math.min((t - prev) / 16, 3) : 1
      prev = t

      ctx.clearRect(0, 0, w, h)

      particles.forEach((p) => {
        p.x += p.dx * dt
        p.y += p.dy * dt
        p.life -= dt * 0.5

        const alpha = Math.max(0, p.life / p.maxLife) * 0.6
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, alpha + ')')
        ctx.fill()

        if (p.life <= 0 || p.y < -10 || p.x < -10 || p.x > w + 10) {
          p.x = Math.random() * w
          p.y = h + 5
          p.life = Math.random() * 200 + 100
          p.maxLife = p.life
          p.dx = (Math.random() - 0.5) * 0.4
          p.dy = -(Math.random() * 0.3 + 0.1)
        }
      })

      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-[1] ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
