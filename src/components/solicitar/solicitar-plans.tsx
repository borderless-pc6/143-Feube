import Link from "next/link"

export default function SolicitarPlans() {
  return (
    <section className="solicitar-plans">
      <div className="container">
        <h2 className="section-title">Escolha o Plano Ideal</h2>
        <p className="section-subtitle">
          Oferecemos diferentes opções para atender às suas necessidades. Compare e escolha o melhor plano para você:
        </p>

        <div className="plans-container">
          <div className="plan-card">
            <div className="plan-header">
              <h3>DNE/CARTEIRINHA DE ESTUDANTE DIGITAL</h3>
              <div className="plan-price">
                <span className="price">R$ 35</span>
                <span className="period">anual</span>
              </div>
            </div>
            <div className="plan-features">
              <ul>
                <li>Carteira Digital</li>
                <li>Validade de 1 ano</li>
                <li>Meia-entrada garantida</li>
                <li>Disponível em 48h</li>
                <li>Suporte por email</li>
              </ul>
            </div>
            <div className="plan-footer">
              <Link href="/solicitar/formulario?plano=digital" className="btn-secondary">
                Escolher Plano
              </Link>
            </div>
          </div>

          <div className="plan-card featured">
            <div className="plan-badge">Mais Popular</div>
            <div className="plan-header">
              <h3>DNE/CARTEIRINHA DE ESTUDANTE FÍSICA + DIGITAL</h3>
              <div className="plan-price">
                <span className="price">R$ 55</span>
                <span className="period">anual</span>
              </div>
            </div>
            <div className="plan-features">
              <ul>
                <li>Carteira Física + Digital</li>
                <li>Validade de 1 ano</li>
                <li>Meia-entrada garantida</li>
                <li>Digital em 48h, física em até 15 dias</li>
                <li>Suporte por email e WhatsApp</li>
                <li>Desconto em parceiros</li>
              </ul>
            </div>
            <div className="plan-footer">
              <Link href="/solicitar/formulario?plano=padrao" className="btn-primary">
                Escolher Plano
              </Link>
            </div>
          </div>

          <div className="plan-card">
            <div className="plan-header">
              <h3>DNE/CARTEIRINHA DE ESTUDANTE PREMIUM</h3>
              <div className="plan-price">
                <span className="price">R$ 75</span>
                <span className="period">anual</span>
              </div>
            </div>
            <div className="plan-features">
              <ul>
                <li>Carteira Física + Digital</li>
                <li>Validade de 1 ano</li>
                <li>Meia-entrada garantida</li>
                <li>Entrega expressa (7 dias úteis)</li>
                <li>Suporte prioritário</li>
                <li>Clube de descontos exclusivos</li>
                <li>Seguro estudantil básico</li>
              </ul>
            </div>
            <div className="plan-footer">
              <Link href="/solicitar/formulario?plano=premium" className="btn-secondary">
                Escolher Plano
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
