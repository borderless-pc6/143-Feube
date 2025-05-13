import "@/styles/benefits-section.css"

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="section-title">Benefícios da Carteira de Estudante</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <span>🎭</span>
            </div>
            <h3>Meia-Entrada</h3>
            <p>Pague metade do preço em cinemas, teatros, shows e eventos culturais em todo o Brasil.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <span>🎓</span>
            </div>
            <h3>Identificação Oficial</h3>
            <p>Documento oficial de identificação estudantil reconhecido em todo o território nacional.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <span>💰</span>
            </div>
            <h3>Descontos Exclusivos</h3>
            <p>Acesso a descontos especiais em estabelecimentos parceiros e serviços para estudantes.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <span>📱</span>
            </div>
            <h3>Versão Digital</h3>
            <p>Tenha sua carteira no celular, sempre à mão quando precisar comprovar sua condição de estudante.</p>
          </div>
        </div>

        <div className="benefits-cta">
          <a href="/solicitar" className="btn-primary">
            Solicitar Minha Carteira
          </a>
        </div>
      </div>
    </section>
  )
}
