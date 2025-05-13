export default function SolicitarSteps() {
  return (
    <section className="solicitar-steps">
      <div className="container">
        <h2 className="section-title">Como Solicitar</h2>
        <p className="section-subtitle">Solicitar sua carteira de estudante é rápido e fácil. Siga os passos abaixo:</p>

        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Preencha o Formulário</h3>
              <p>
                Informe seus dados pessoais, dados da instituição de ensino e curso. Todos os campos são importantes
                para a emissão correta da sua carteira.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Envie os Documentos</h3>
              <p>
                Faça o upload da sua foto 3x4, comprovante de matrícula e documento de identificação. Certifique-se que
                estão legíveis.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Escolha o Plano</h3>
              <p>
                Selecione entre os planos disponíveis: Básico (apenas digital), Padrão (física + digital) ou Premium
                (física + digital + benefícios exclusivos).
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Realize o Pagamento</h3>
              <p>
                Efetue o pagamento de forma segura via PIX, cartão de crédito, boleto bancário ou transferência. Todas
                as transações são criptografadas.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Receba sua Carteira</h3>
              <p>
                A versão digital estará disponível em até 48h após a confirmação do pagamento. A carteira física será
                enviada pelos Correios em até 15 dias úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
