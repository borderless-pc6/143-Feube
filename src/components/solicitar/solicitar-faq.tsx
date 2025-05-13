"use client"

import { useState } from "react"

type FaqItem = {
  question: string
  answer: string
}

export default function SolicitarFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqItems: FaqItem[] = [
    {
      question: "Quais documentos são necessários para solicitar a carteira?",
      answer:
        "Para solicitar a carteira de estudante, você precisará de: documento de identidade com foto (RG ou CNH), comprovante de matrícula atual (declaração da instituição ou boleto pago), foto 3x4 recente com fundo branco e comprovante de residência.",
    },
    {
      question: "Quanto tempo leva para receber a carteira física?",
      answer:
        "A carteira física é enviada em até 15 dias úteis após a confirmação do pagamento para o plano padrão. Para o plano premium, o prazo é de até 7 dias úteis. A versão digital fica disponível em até 48 horas para todos os planos.",
    },
    {
      question: "A carteira é válida em todo o Brasil?",
      answer:
        "Sim, a carteira de estudante emitida pela EstudanteNet é válida em todo o território nacional, conforme a Lei Federal nº 12.933/2013, que garante o direito à meia-entrada para estudantes em eventos culturais e esportivos.",
    },
    {
      question: "Posso solicitar a carteira se estiver cursando pós-graduação?",
      answer:
        "Sim, estudantes de pós-graduação, mestrado e doutorado também têm direito à carteira de estudante, desde que estejam regularmente matriculados em instituições de ensino reconhecidas pelo MEC.",
    },
    {
      question: "Como faço para renovar minha carteira?",
      answer:
        "Para renovar sua carteira, acesse a área do estudante em nosso site com seu login e senha, clique em 'Renovar Carteira' e siga as instruções. Será necessário enviar um novo comprovante de matrícula e efetuar o pagamento da renovação.",
    },
  ]

  return (
    <section className="solicitar-faq">
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>

        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{item.question}</h3>
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-more">
          <p>Não encontrou o que procurava?</p>
          <a href="/contato" className="btn-outline">
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
