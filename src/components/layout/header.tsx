"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import "@/styles/header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image src="/placeholder.svg?height=60&width=180" alt="EstudanteNet Logo" width={180} height={60} />
          </Link>
        </div>

        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/">Carteira de Estudante</Link>
            </li>
            <li>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>

        <div className="cta-button">
          <Link href="/solicitar" className="btn-primary">
            Solicitar Carteira
          </Link>
        </div>
      </div>
    </header>
  )
}
