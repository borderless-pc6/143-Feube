"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

interface FileWithName extends File {
  name: string;
}

interface FormDataType {
  nome: string;
  cpf: string;
  dataNascimento: string;
  rg: string;
  orgaoEmissor: string;
  email: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  instituicao: string;
  curso: string;
  matricula: string;
  nivelEnsino: string;
  turno: string;
  anoLetivo: string;
  dataInicio: string;
  dataTermino: string;
  fotoAluno: FileWithName | null;
  comprovanteMatricula: FileWithName | null;
  documentoIdentidade: FileWithName | null;
  plano: string;
  formaPagamento: string;
  aceitaTermos: boolean;
}

export default function SolicitarForm() {
  const searchParams = useSearchParams()
  const planoSelecionado = searchParams.get("plano") || "padrao"

  const [currentStep, setCurrentStep] = useState(1)
  const [] = useState<FormDataType>({
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
    instituicao: "",
    curso: "",
    matricula: "",
    nivelEnsino: "",
    turno: "",
    anoLetivo: "",
    dataInicio: "",
    dataTermino: "",
    fotoAluno: null,
    comprovanteMatricula: null,
    documentoIdentidade: null,
    plano: planoSelecionado,
    formaPagamento: "pix",
    aceitaTermos: false,
  })

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className="form-container">
      <div className="form-progress">
        {["Dados Pessoais", "Dados Acad\u00eamicos", "Documentos", "Pagamento", "Confirma\u00e7\u00e3o"].map((label, index) => (
          <div key={index} className={`progress-step ${currentStep >= index + 1 ? "active" : ""}`}>
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {/* Renderiza cada etapa com base em currentStep */}
        {currentStep === 1 && (
          <div className="form-step">
            <h2>Dados Pessoais</h2>
            {/* Campos da etapa 1 */}
            {/* ... */}
            <div className="form-actions">
              <button type="button" className="btn-primary" onClick={nextStep}>
                Pr\u00f3ximo
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-step">
            <h2>Dados Acad\u00eamicos</h2>
            {/* Campos da etapa 2 */}
            {/* ... */}
            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Voltar
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Pr\u00f3ximo
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="form-step">
            <h2>Documentos</h2>
            {/* Campos da etapa 3 */}
            {/* ... */}
            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Voltar
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Pr\u00f3ximo
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="form-step">
            <h2>Pagamento</h2>
            {/* Campos da etapa 4 */}
            {/* ... */}
            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Voltar
              </button>
              <button type="button" className="btn-primary" onClick={nextStep}>
                Pr\u00f3ximo
              </button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="form-step">
            <h2>Confirma\u00e7\u00e3o</h2>
            {/* Resumo e confirma\u00e7\u00e3o dos dados */}
            <div className="form-actions">
              <button type="button" className="btn-outline" onClick={prevStep}>
                Voltar
              </button>
              <button type="submit" className="btn-primary">
                Enviar
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
