interface Particle {
  angle: number
  speed: number
  trail: { x: number; y: number }[]
}

interface RingConfig {
  semiMajor: number
  semiMinor: number
  tilt: number
  phase: number
  speed: number
  strokeOpacity: number
  particleCount: number
}

export class HeroVisual {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private rafId: number | null = null
  private rings: RingConfig[]
  private particles: Particle[]
  private time = 0
  private mouseX = 0.5
  private mouseY = 0.5
  private scrollProgress = 0
  private targetScale = 1
  private scale = 1
  private targetOpacity = 1
  private opacity = 1
  private cx = 0
  private cy = 0
  private dpr = 1
  private running = false

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!

    this.rings = [
      { semiMajor: 260, semiMinor: 90, tilt: 0.4, phase: 0, speed: 0.12, strokeOpacity: 0.25, particleCount: 16 },
      { semiMajor: 190, semiMinor: 65, tilt: -0.3, phase: 1.8, speed: -0.18, strokeOpacity: 0.15, particleCount: 12 },
      { semiMajor: 120, semiMinor: 42, tilt: 0.55, phase: 0.9, speed: 0.25, strokeOpacity: 0.1, particleCount: 8 },
    ]

    this.particles = this.rings.flatMap((ring, i) =>
      Array.from({ length: ring.particleCount }, (_, j) => ({
        angle: (j / ring.particleCount) * Math.PI * 2,
        speed: ring.speed * (0.85 + Math.random() * 0.3),
        trail: [],
      })),
    )

    this.resize()
  }

  init(): void {
    this.running = true
    this.resize()
    this.animate()
  }

  resize(): void {
    const rect = this.canvas.parentElement?.getBoundingClientRect()
    if (!rect) return
    this.dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = rect.width
    const h = rect.height
    this.canvas.width = w * this.dpr
    this.canvas.height = h * this.dpr
    this.canvas.style.width = `${w}px`
    this.canvas.style.height = `${h}px`
    this.cx = w * 0.62
    this.cy = h * 0.52
    this.scale = Math.min(w, h) / 800
    this.targetScale = this.scale
  }

  setCursor(x: number, y: number): void {
    this.mouseX = x
    this.mouseY = y
  }

  setScrollProgress(progress: number): void {
    this.scrollProgress = Math.max(0, Math.min(1, progress))
    this.targetOpacity = Math.max(0, 1 - this.scrollProgress * 2.5)
    this.targetScale = this.scale * (1 + this.scrollProgress * 0.35)
  }

  private getRingPoint(
    ring: RingConfig,
    angle: number,
  ): { x: number; y: number } {
    const px = ring.semiMajor * Math.cos(angle)
    const py = ring.semiMinor * Math.sin(angle)
    const cosT = Math.cos(ring.tilt)
    const sinT = Math.sin(ring.tilt)
    return {
      x: this.cx + px * cosT - py * sinT,
      y: this.cy + px * sinT + py * cosT,
    }
  }

  private render(): void {
    const { ctx, canvas, dpr } = this
    const w = canvas.width
    const h = canvas.height

    ctx.clearRect(0, 0, w, h)

    this.opacity += (this.targetOpacity - this.opacity) * 0.06
    this.scale += (this.targetScale - this.scale) * 0.06

    if (this.opacity < 0.005) return

    const cursorOffsetX = (this.mouseX - 0.5) * 0.15
    const cursorOffsetY = (this.mouseY - 0.5) * 0.1
    const speedMul = 1 + this.scrollProgress * 2.5

    ctx.save()
    ctx.translate(
      this.cx * dpr + cursorOffsetX * 60 * dpr,
      this.cy * dpr + cursorOffsetY * 40 * dpr,
    )
    ctx.scale(this.scale, this.scale)

    const time = this.time

    this.rings.forEach((ring, ri) => {
      const opacity = ring.strokeOpacity * this.opacity
      if (opacity < 0.01) return

      const currentAngle = time * ring.speed * speedMul + ring.phase

      ctx.save()
      ctx.rotate(ring.tilt)
      ctx.beginPath()
      ctx.ellipse(0, 0, ring.semiMajor * dpr, ring.semiMinor * dpr, 0, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255, 59, 48, ${opacity.toFixed(3)})`
      ctx.lineWidth = 1.2 * dpr
      ctx.stroke()
      ctx.restore()

      const ringParticles = this.particles.filter(
        (_, i) =>
          i >=
            this.rings
              .slice(0, ri)
              .reduce((sum, r) => sum + r.particleCount, 0) &&
          i <
            this.rings
              .slice(0, ri + 1)
              .reduce((sum, r) => sum + r.particleCount, 0),
      )

      ringParticles.forEach((particle, pi) => {
        const globalParticleIndex =
          this.rings
            .slice(0, ri)
            .reduce((sum, r) => sum + r.particleCount, 0) + pi

        const angle =
          particle.angle +
          currentAngle +
          (globalParticleIndex * 0.3 + time * particle.speed * speedMul)

        const pt = this.getRingPoint(ring, angle)
        const px = pt.x - this.cx
        const py = pt.y - this.cy

        const trailLen = Math.min(6, Math.floor(3 + this.scrollProgress * 4))
        particle.trail.push({ x: px, y: py })
        if (particle.trail.length > trailLen) {
          particle.trail.shift()
        }

        if (particle.trail.length > 1) {
          for (let t = 0; t < particle.trail.length - 1; t++) {
            const f = t / particle.trail.length
            const alpha = f * 0.25 * this.opacity
            ctx.beginPath()
            ctx.moveTo(particle.trail[t].x * dpr, particle.trail[t].y * dpr)
            ctx.lineTo(
              particle.trail[t + 1].x * dpr,
              particle.trail[t + 1].y * dpr,
            )
            ctx.strokeStyle = `rgba(255, 59, 48, ${alpha.toFixed(3)})`
            ctx.lineWidth = 1 * dpr
            ctx.stroke()
          }
        }

        const glowSize = (3 + this.scrollProgress * 2) * dpr
        const gradient = ctx.createRadialGradient(
          px * dpr,
          py * dpr,
          0,
          px * dpr,
          py * dpr,
          glowSize,
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${(0.7 * this.opacity).toFixed(3)})`)
        gradient.addColorStop(0.3, `rgba(255, 59, 48, ${(0.3 * this.opacity).toFixed(3)})`)
        gradient.addColorStop(1, 'rgba(255, 59, 48, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(px * dpr, py * dpr, glowSize, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(px * dpr, py * dpr, 1.2 * dpr, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${(0.8 * this.opacity).toFixed(3)})`
        ctx.fill()
      })
    })

    const centralGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 80 * dpr * this.scale)
    centralGlow.addColorStop(
      0,
      `rgba(255, 59, 48, ${(0.04 * this.opacity).toFixed(3)})`,
    )
    centralGlow.addColorStop(1, 'rgba(255, 59, 48, 0)')
    ctx.fillStyle = centralGlow
    ctx.beginPath()
    ctx.arc(0, 0, 80 * dpr * this.scale, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }

  private animate = (): void => {
    if (!this.running) return
    this.time += 0.016
    this.render()
    this.rafId = requestAnimationFrame(this.animate)
  }

  destroy(): void {
    this.running = false
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
