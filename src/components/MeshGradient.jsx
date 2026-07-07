import { useEffect, useRef } from 'react'

const palettes = {
  rose: ['rgba(214,83,122,0.12)', 'rgba(244,201,209,0.15)', 'rgba(201,161,90,0.08)'],
  gold: ['rgba(201,161,90,0.12)', 'rgba(240,213,160,0.10)', 'rgba(160,120,64,0.06)'],
  forest: ['rgba(20,48,31,0.10)', 'rgba(40,80,60,0.08)', 'rgba(60,120,90,0.06)'],
  blush: ['rgba(244,201,209,0.20)', 'rgba(255,248,242,0.15)', 'rgba(214,83,122,0.08)'],
}

export default function MeshGradient({ palette = 'rose', className = '', style = {} }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const timeRef = useRef(0)
  const colorsRef = useRef(palettes[palette] || palettes.rose)

  useEffect(() => {
    colorsRef.current = palettes[palette] || palettes.rose
  }, [palette])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h

    function resize() {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * 2
      canvas.height = h * 2
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.scale(2, 2)
    }
    resize()
    window.addEventListener('resize', resize)

    function draw(t) {
      timeRef.current = t
      ctx.clearRect(0, 0, w, h)

      const cx = mouseRef.current.x * w
      const cy = mouseRef.current.y * h
      const s = Math.sin(t * 0.0002) * 0.3 + 0.7
      const s2 = Math.cos(t * 0.00025) * 0.3 + 0.7

      colorsRef.current.forEach((color, i) => {
        const offsetX = Math.sin(t * 0.00015 + i * 2) * w * 0.15
        const offsetY = Math.cos(t * 0.00018 + i * 1.5) * h * 0.15
        const px = cx + offsetX
        const py = cy + offsetY
        const radius = w * 0.35 * (i === 0 ? s : s2)

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius)
        grad.addColorStop(0, color)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, w, h)
      })

      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    function onMouse(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = (e.clientX - rect.left) / rect.width
      mouseRef.current.y = (e.clientY - rect.top) / rect.height
    }
    function onTouch(e) {
      const t = e.touches[0]
      if (!t) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = (t.clientX - rect.left) / rect.width
      mouseRef.current.y = (t.clientY - rect.top) / rect.height
    }
    canvas.addEventListener('mousemove', onMouse)
    canvas.addEventListener('touchmove', onTouch)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      canvas.removeEventListener('mousemove', onMouse)
      canvas.removeEventListener('touchmove', onTouch)
    }
  }, [palette])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      style={{ width: '100%', height: '100%', ...style }}
    />
  )
}
