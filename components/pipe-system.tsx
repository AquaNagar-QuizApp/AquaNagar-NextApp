"use client"

import { useEffect, useRef } from "react"

export default function PipeSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw pipes
    const drawPipes = () => {
      if (!ctx) return

      // Set pipe style
      ctx.lineWidth = 12
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.strokeStyle = "rgba(0, 80, 150, 0.3)"

      // Top left corner pipes
      ctx.beginPath()
      ctx.moveTo(0, 100)
      ctx.lineTo(150, 100)
      ctx.lineTo(150, 200)
      ctx.stroke()

      // Top right corner pipes
      ctx.beginPath()
      ctx.moveTo(canvas.width, 150)
      ctx.lineTo(canvas.width - 200, 150)
      ctx.lineTo(canvas.width - 200, 300)
      ctx.stroke()

      // Bottom left corner pipes
      ctx.beginPath()
      ctx.moveTo(0, canvas.height - 120)
      ctx.lineTo(180, canvas.height - 120)
      ctx.lineTo(180, canvas.height - 250)
      ctx.stroke()

      // Bottom right corner pipes
      ctx.beginPath()
      ctx.moveTo(canvas.width, canvas.height - 80)
      ctx.lineTo(canvas.width - 150, canvas.height - 80)
      ctx.lineTo(canvas.width - 150, canvas.height - 200)
      ctx.stroke()

      // Draw pipe connectors (circles)
      const drawConnector = (x: number, y: number) => {
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 100, 180, 0.5)"
        ctx.fill()
        ctx.strokeStyle = "rgba(100, 200, 255, 0.5)"
        ctx.lineWidth = 2
        ctx.stroke()
      }

      drawConnector(150, 100)
      drawConnector(150, 200)
      drawConnector(canvas.width - 200, 150)
      drawConnector(canvas.width - 200, 300)
      drawConnector(180, canvas.height - 120)
      drawConnector(180, canvas.height - 250)
      drawConnector(canvas.width - 150, canvas.height - 80)
      drawConnector(canvas.width - 150, canvas.height - 200)
    }

    // Draw water flow animation
    let flowOffset = 0
    const drawWaterFlow = () => {
      if (!ctx) return

      flowOffset += 0.5
      if (flowOffset > 20) flowOffset = 0

      // Set flow style
      ctx.lineWidth = 6
      ctx.setLineDash([5, 15])
      ctx.lineDashOffset = -flowOffset
      ctx.strokeStyle = "rgba(100, 200, 255, 0.6)"

      // Top left flow
      ctx.beginPath()
      ctx.moveTo(0, 100)
      ctx.lineTo(150, 100)
      ctx.lineTo(150, 200)
      ctx.stroke()

      // Top right flow
      ctx.beginPath()
      ctx.moveTo(canvas.width, 150)
      ctx.lineTo(canvas.width - 200, 150)
      ctx.lineTo(canvas.width - 200, 300)
      ctx.stroke()

      // Reset line dash
      ctx.setLineDash([])
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawPipes()
      drawWaterFlow()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
