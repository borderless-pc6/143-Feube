import Image from "next/image"
import Link from "next/link"
import React from "react"
import Carteirinha from "../../app/assets/images/carteirinha.png"
import "@/styles/hero-section.css"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>2025</h1>
            <h2>
              CARTEIRA DE
              <br />
              ESTUDANTE
              <br />
              OFICIAL
            </h2>
            <p>
              Garanta já a sua carteira de estudante oficial e aproveite todos os benefícios e descontos em eventos
              culturais, cinemas, shows e muito mais!
            </p>
            <div className="hero-buttons">
              <Link href="/solicitar" className="btn-primary">
                Solicitar Agora
              </Link>
              <Link href="/beneficios" className="btn-secondary">
                Ver Benefícios
              </Link>
            </div>
          </div>
          <div className="student-card">
            <Image
              src={Carteirinha.src}
              alt="Carteira de Estudante"
              width={600}
              height={400}
              className="card-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
