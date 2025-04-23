"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function SplitText() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            containerRef.current.style.visibility = "visible"

            const { words } = splitText(
                containerRef.current.querySelector("h1")!
            )
            animate(
                words,
                { opacity: [0, 1], y: [20, 0] },
                {
                  type: "tween",
                  duration: 3,
                  ease: "easeOut",
                  delay: stagger(0.1), 
                }
              )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1">
  Project management, but make it awesome. Your ideas deserve momentum.
</h1>

            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 520px;
                text-align: left;
                visibility: hidden;
                font-size: 1.95rem;
                font-weight: 800;
                line-height: 1.4;
                color: white;
                font-family: 'Courier New', Courier, monospace;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
    )
}
