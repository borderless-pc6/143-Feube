"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function SolicitarForm() {
  const searchParams = useSearchParams()
  const planoSelecionado = searchParams.get("plano") || "padrao"

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nome: "",
    cpf: "",
    dataNascimento: "",
    rg: "",
    orgaoEmissor: "",
    email: "",
    telefone: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",

    // Dados Acadêmicos
    instituicao: "",
    curso: "",
    matricula: "",
    nivelEnsino: "",
    turno: "",
    anoLetivo: "",
    dataInicio: "",
    dataTermino: "",

    // Documentos
    fotoAluno: null,
    comprovanteMatricula: null,
    documentoIdentidade: null,

    // Plano e Pagamento
    plano: planoSelecionado,
    formaPagamento: "pix",
    aceitaTermos: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      })
    }
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    // Por enquanto, apenas avançamos para a tela de confirmação
    nextStep()
  }

  return (
    <div className="form-container">
      <div className="form-progress">
        <div className={`progress-step ${currentStep >= 1 ? "active" : ""}`}>
          <div className="step-number">1</div>
          <div className="step-label">Dados Pessoais</div>
        </div>
        <div className={`progress-step ${currentStep >= 2 ? "active" : ""}`}>
          <div className="step-number">2</div>
          <div className="step-label">Dados Acadêmicos</div>
        </div>
        <div className={`progress-step ${currentStep >= 3 ? "active" : ""}`}>
          <div className="step-number">3</div>
          <div className="step-label">Documentos</div>
        </div>
        <div className={`progress-step ${currentStep >= 4 ? "active" : ""}`}>
          <div className="step-number">4</div>
          <div className="step-label">Pagamento</div>
        </div>
        <div className={`progress-step ${currentStep >= 5 ? "active" : ""}`}>
          <div className="step-number">5</div>
          <div className="step-label">Confirmação</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Etapa 1: Dados Pessoais */}
        {currentStep === 1 && (
          <div className="form-step">
            <h2>Dados Pessoais</h2>
            <p className="step-description">Informe seus dados pessoais para a emissão da carteira.</p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo*</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  placeholder="Digite seu nome completo"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cpf">CPF*</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  required
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="form-group">
                <label htmlFor="dataNascimento">Data de Nascimento*</label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="rg">RG*</label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  value={formData.rg}
                  onChange={handleInputChange}
                  required
                  placeholder="Digite seu RG"
                />
              </div>

              <div className="form-group">
                <label htmlFor="orgaoEmissor">Órgão Emissor*</label>
                <input
                  type="text"
                  id="orgaoEmissor"
                  name="orgaoEmissor"
                  value={formData.orgaoEmissor}
                  onChange={handleInputChange}
                  required
                  placeholder="Ex: SSP/SP"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone*</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cep">CEP*</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                  required
                  placeholder="00000-000"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="endereco">Endereço*</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  required
                  placeholder="Rua, Avenida, etc."
                />
              </div>

              <div className="form-group small">
                <label htmlFor="numero">Número*</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                  required
                  placeholder="Nº"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="complemento">Complemento</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleInputChange}
                  placeholder="Apto, Bloco, etc."
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bairro">Bairro*</label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu bairro"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cidade">Cidade*</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  required
                  placeholder="Sua cidade"
                />
              </div>

              <div className="form-group small">
                <label htmlFor="estado">Estado*</label>
                <select id="estado" name="estado" value={formData.estado} onChange={handleInputChange} required>
                  <option value="">Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-primary" onClick={nextStep}>
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* Etapa 2: Dados Acadêmicos */}
        {currentStep === 2 && (
          <div className="form-step">
            <h2>Dados Acadêmicos</h2>
            <p className="step-description">Informe os dados da sua instituição de ensino e curso.</p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="instituicao">Instituição de Ensino*</label>
                <input
                  type="text"
                  id="instituicao"
                  name="instituicao"
                  value={formData.instituicao}
                  onChange={handleInputChange}
                  required
                  placeholder="Nome da instituição"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="curso">Curso*</label>
                <input
                  type="text"
                  id="curso"
                  name="curso"
                  value={formData.curso}
                  onChange={handleInputChange}
                  required
                  placeholder="Nome do curso"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="matricula">Número de Matrícula*</label>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu número de matrícula"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nivelEnsino">Nível de Ensino*</label>
                <select
                  id="nivelEnsino"
                  name="nivelEnsino"
                  value={formData.nivelEnsino}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="fundamental">Ensino Fundamental</option>
                  <option value="medio">Ensino Médio</option>
                  <option value="tecnico">Ensino Técnico</option>
                  <option value="superior">Ensino Superior</option>
                  <option value="pos">Pós-Graduação</option>
                  <option value="mestrado">Mestrado</option>
                  <option value="doutorado">Doutorado</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="turno">Turno*</label>
                <select id="turno" name="turno" value={formData.turno} onChange={handleInputChange} required>
                  <option value="">Selecione</option>
                  <option value="matutino">Matutino</option>
                  <option value="vespertino">Vespertino</option>
                  <option value="noturno">Noturno</option>
                  <option value="integral">Integral</option>
                  <option value="ead">EAD</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="anoLetivo">Ano Letivo*</label>
                <select
                  id="anoLetivo"
                  name="anoLetivo"
                  value={formData.anoLetivo}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dataInicio">Data de Início do Curso*</label>
                <input
                  type="date"
                  id="dataInicio"
                  name="dataInicio"
                  value={formData.dataInicio}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dataTermino">Data de Término Prevista*</label>
                <input
                  type="date"
                  id="dataTermino"
                  name="dataTermino"
                  value={formData.dataTermino}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Voltar
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* Etapa 3: Documentos */}
        {currentStep === 3 && (
          <div className="form-step">
            <h2>Documentos</h2>
            <p className="step-description">
              Faça o upload dos documentos necessários. Certifique-se que estão legíveis e no formato correto (JPG, PNG
              ou PDF).
            </p>

            <div className="document-upload">
              <div className="upload-item">
                <label htmlFor="fotoAluno">
                  <div className="upload-area">
                    <div className="upload-icon">📷</div>
                    <div className="upload-text">
                      <h4>Foto 3x4*</h4>
                      <p>Fundo branco, sem acessórios, formato JPG ou PNG</p>
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  id="fotoAluno"
                  name="fotoAluno"
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png"
                  required
                  className="file-input"
                />
                <div className="file-name">
                  {formData.fotoAluno ? (formData.fotoAluno as any).name : "Nenhum arquivo selecionado"}
                </div>
              </div>

              <div className="upload-item">
                <label htmlFor="comprovanteMatricula">
                  <div className="upload-area">
                    <div className="upload-icon">📄</div>
                    <div className="upload-text">
                      <h4>Comprovante de Matrícula*</h4>
                      <p>Declaração da instituição ou boleto pago, formato PDF</p>
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  id="comprovanteMatricula"
                  name="comprovanteMatricula"
                  onChange={handleFileChange}
                  accept="application/pdf,image/jpeg,image/png"
                  required
                  className="file-input"
                />
                <div className="file-name">
                  {formData.comprovanteMatricula
                    ? (formData.comprovanteMatricula as any).name
                    : "Nenhum arquivo selecionado"}
                </div>
              </div>

              <div className="upload-item">
                <label htmlFor="documentoIdentidade">
                  <div className="upload-area">
                    <div className="upload-icon">🪪</div>
                    <div className="upload-text">
                      <h4>Documento de Identidade*</h4>
                      <p>RG ou CNH, frente e verso, formato JPG, PNG ou PDF</p>
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  id="documentoIdentidade"
                  name="documentoIdentidade"
                  onChange={handleFileChange}
                  accept="application/pdf,image/jpeg,image/png"
                  required
                  className="file-input"
                />
                <div className="file-name">
                  {formData.documentoIdentidade
                    ? (formData.documentoIdentidade as any).name
                    : "Nenhum arquivo selecionado"}
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Voltar
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* Etapa 4: Pagamento */}
        {currentStep === 4 && (
          <div className="form-step">
            <h2>Pagamento</h2>
            <p className="step-description">Escolha a forma de pagamento e confirme os detalhes do seu pedido.</p>

            <div className="order-summary">
              <h3>Resumo do Pedido</h3>
              <div className="summary-item">
                <span className="item-name">Plano Selecionado:</span>
                <span className="item-value">
                  {formData.plano === "digital"
                    ? "Plano Digital - R$ 35,00"
                    : formData.plano === "padrao"
                      ? "Plano Padrão - R$ 55,00"
                      : "Plano Premium - R$ 75,00"}
                </span>
              </div>
              <div className="summary-item">
                <span className="item-name">Validade:</span>
                <span className="item-value">1 ano (2025)</span>
              </div>
              <div className="summary-item">
                <span className="item-name">Entrega:</span>
                <span className="item-value">
                  {formData.plano === "digital"
                    ? "Digital em até 48h"
                    : formData.plano === "padrao"
                      ? "Digital em até 48h, física em até 15 dias úteis"
                      : "Digital em até 48h, física em até 7 dias úteis"}
                </span>
              </div>
              <div className="summary-total">
                <span className="total-label">Total:</span>
                <span className="total-value">
                  {formData.plano === "digital" ? "R$ 35,00" : formData.plano === "padrao" ? "R$ 55,00" : "R$ 75,00"}
                </span>
              </div>
            </div>

            <div className="payment-options">
              <h3>Forma de Pagamento</h3>
              <div className="payment-methods">
                <div className="payment-method">
                  <input
                    type="radio"
                    id="pix"
                    name="formaPagamento"
                    value="pix"
                    checked={formData.formaPagamento === "pix"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="pix">
                    <div className="method-icon">PIX</div>
                    <div className="method-details">
                      <span className="method-name">PIX</span>
                      <span className="method-description">Pagamento instantâneo</span>
                    </div>
                  </label>
                </div>

                <div className="payment-method">
                  <input
                    type="radio"
                    id="cartao"
                    name="formaPagamento"
                    value="cartao"
                    checked={formData.formaPagamento === "cartao"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="cartao">
                    <div className="method-icon">💳</div>
                    <div className="method-details">
                      <span className="method-name">Cartão de Crédito</span>
                      <span className="method-description">Visa, Mastercard, Elo, etc.</span>
                    </div>
                  </label>
                </div>

                <div className="payment-method">
                  <input
                    type="radio"
                    id="boleto"
                    name="formaPagamento"
                    value="boleto"
                    checked={formData.formaPagamento === "boleto"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="boleto">
                    <div className="method-icon">🧾</div>
                    <div className="method-details">
                      <span className="method-name">Boleto Bancário</span>
                      <span className="method-description">Vencimento em 3 dias úteis</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="terms-agreement">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="aceitaTermos"
                  name="aceitaTermos"
                  checked={formData.aceitaTermos}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="aceitaTermos">
                  Li e concordo com os{" "}
                  <a href="/termos" target="_blank" rel="noreferrer">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="/privacidade" target="_blank" rel="noreferrer">
                    Política de Privacidade
                  </a>
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Voltar
              </button>
              <button type="submit" className="btn-primary" disabled={!formData.aceitaTermos}>
                Finalizar Pedido
              </button>
            </div>
          </div>
        )}

        {/* Etapa 5: Confirmação */}
        {currentStep === 5 && (
          <div className="form-step confirmation-step">
            <div className="confirmation-icon">✓</div>
            <h2>Pedido Realizado com Sucesso!</h2>
            <p className="confirmation-message">
              Seu pedido foi recebido e está sendo processado. Em breve você receberá um e-mail com mais informações.
            </p>

            <div className="order-details">
              <h3>Detalhes do Pedido</h3>
              <div className="detail-item">
                <span className="detail-label">Número do Pedido:</span>
                <span className="detail-value">EST{Math.floor(Math.random() * 1000000)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Data:</span>
                <span className="detail-value">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Plano:</span>
                <span className="detail-value">
                  {formData.plano === "digital" ? "Digital" : formData.plano === "padrao" ? "Padrão" : "Premium"}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value status-pending">Aguardando Pagamento</span>
              </div>
            </div>

            <div className="next-steps">
              <h3>Próximos Passos</h3>
              <ol>
                <li>
                  <strong>Pagamento:</strong> Realize o pagamento conforme as instruções enviadas para seu e-mail.
                </li>
                <li>
                  <strong>Processamento:</strong> Após a confirmação do pagamento, seus documentos serão analisados.
                </li>
                <li>
                  <strong>Emissão:</strong> Sua carteira digital será emitida em até 48 horas após a aprovação.
                </li>
                <li>
                  <strong>Entrega:</strong>{" "}
                  {formData.plano !== "digital" &&
                    "A carteira física será enviada pelos Correios conforme o prazo do seu plano."}
                  {formData.plano === "digital" &&
                    "Você receberá um e-mail com instruções para acessar sua carteira digital."}
                </li>
              </ol>
            </div>

            <div className="confirmation-actions">
              <Link href="/" className="btn-outline">
                Voltar para a Página Inicial
              </Link>
              <Link href="/area-estudante" className="btn-primary">
                Acessar Área do Estudante
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
