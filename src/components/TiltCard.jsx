import { useRef, useCallback } from 'react'

const TILT_MAX = 8
const SCALE = 1.02
const LIGHT_X = 50
const LIGHT_Y = 50

export default function TiltCard({
  children,
  className = '',
  style = {},
  tiltDegree = TILT_MAX,
  glare = true,
  scale = SCALE,
  perspective = 800,
}) {
  const cardRef = useRef(null)
  const glareRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const px = (x - cx) / cx
    const py = (y - cy) / cy
    const deg = tiltDegree

    card.style.transform = `
      perspective(${perspective}px)
      rotateX(${-py * deg}deg)
      rotateY(${px * deg}deg)
      scale3d(${scale}, ${scale}, ${scale})
    `
    card.style.transition = 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1)'

    if (glare && glareRef.current) {
      glareRef.current.style.background = `
        radial-gradient(
          circle at ${x / rect.width * 100}% ${y / rect.height * 100}%,
          rgba(255,255,255,0.15) 0%,
          transparent 60%
        )
      `
    }
  }, [tiltDegree, scale, perspective, glare])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = `
      perspective(${perspective}px)
      rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)
    `
    card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
    if (glare && glareRef.current) {
      glareRef.current.style.background = 'transparent'
    }
  }, [perspective, glare])

  return (
    <div
      ref={cardRef}
      className={`tilt-card relative inline-block cursor-pointer ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            transition: 'background 0.1s ease',
            zIndex: 2,
          }}
        />
      )}
    </div>
  )
}
