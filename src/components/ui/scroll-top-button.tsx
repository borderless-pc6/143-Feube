"use client"

import { useEffect, useState } from "react"
import "@/styles/scroll-top-button.css"

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className={`scroll-top ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop} className="scroll-icon" aria-label="Voltar ao topo">
        ↑
      </button>
    </div>
  )
}
