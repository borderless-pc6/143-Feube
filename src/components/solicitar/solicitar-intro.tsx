import Link from "next/link"
import Image from "next/image"

export default function SolicitarIntro() {
  return (
    <section className="solicitar-intro">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h1>Solicite sua Carteira de Estudante 2025</h1>
            <p>
              A Carteira de Estudante é o documento oficial que garante seu direito à meia-entrada em eventos culturais,
              esportivos e de lazer em todo o Brasil, conforme previsto na Lei Federal nº 12.933/2013.
            </p>
            <div className="intro-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Documento oficial válido em todo o Brasil</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Versão física e digital para sua comodidade</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Entrega rápida e segura em todo o país</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Suporte durante todo o processo</span>
              </div>
            </div>
            <Link href="/solicitar/formulario" className="btn-primary">
              Solicitar Agora
            </Link>
          </div>
          <div className="intro-image">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Carteira de Estudante 2025"
              width={300}
              height={400}
              className="card-preview"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
