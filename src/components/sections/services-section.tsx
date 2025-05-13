import Image from "next/image"
import Link from "next/link"
import "@/styles/services-section.css"

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-intro">
          <h2 className="section-title">Serviços para Estudantes</h2>
          <p>
            Oferecemos diversos serviços para facilitar a vida acadêmica e garantir todos os seus direitos como
            estudante. Conheça nossas soluções e escolha a que melhor atende às suas necessidades.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <Image src="/placeholder.svg?height=200&width=300" alt="Carteira de Estudante" width={300} height={200} />
            <div className="service-content">
              <h3>Carteira de Estudante</h3>
              <p>Documento oficial que garante seu direito à meia-entrada em todo o Brasil.</p>
              <ul className="service-features">
                <li>Válida em todo território nacional</li>
                <li>Meia-entrada garantida por lei</li>
                <li>Versão digital disponível</li>
              </ul>
              <Link href="/carteira" className="btn-secondary">
                Solicitar Carteira
              </Link>
            </div>
          </div>

          <div className="service-card">
            <Image src="/placeholder.svg?height=200&width=300" alt="Documento Nacional" width={300} height={200} />
            <div className="service-content">
              <h3>Documento Nacional</h3>
              <p>DNE oficial com reconhecimento em todo o país e benefícios exclusivos.</p>
              <ul className="service-features">
                <li>QR Code para verificação</li>
                <li>Descontos em estabelecimentos</li>
                <li>Acesso a eventos exclusivos</li>
              </ul>
              <Link href="/dne" className="btn-secondary">
                Conhecer DNE
              </Link>
            </div>
          </div>

          <div className="service-card">
            <Image src="/placeholder.svg?height=200&width=300" alt="Carteira Digital" width={300} height={200} />
            <div className="service-content">
              <h3>Carteira Digital</h3>
              <p>Tenha sua carteira de estudante no celular, prática e sempre à mão.</p>
              <ul className="service-features">
                <li>Acesso pelo aplicativo</li>
                <li>Atualização automática</li>
                <li>Validação online</li>
              </ul>
              <Link href="/digital" className="btn-secondary">
                Baixar App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
