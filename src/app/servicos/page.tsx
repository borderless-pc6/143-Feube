import Header from "@/components/layout/header"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import ScrollTopButton from "@/components/ui/scroll-top-button"
import "@/styles/servicos-page.css"

export default function ServicosPage() {
  return (
    <div className="app">
      <Header />

      <main className="servicos-page">
        <div className="container">
          <h1 className="page-title">Nossos Serviços</h1>

          <div className="servicos-content">
            <div className="servico-item">
              <h2>Carteira de Estudante</h2>
              <p>Emissão de documento estudantil oficial com validade em todo o território nacional.</p>
              <ul>
                <li>Meia-entrada em eventos culturais e esportivos</li>
                <li>Descontos em estabelecimentos parceiros</li>
                <li>Identificação estudantil oficial</li>
                <li>Versão digital disponível para seu smartphone</li>
              </ul>
              <a href="#" className="btn-primary">
                Solicitar Carteira
              </a>
            </div>

            <div className="servico-item">
              <h2>Documento Nacional do Estudante</h2>
              <p>O DNE é o documento oficial que garante seus direitos como estudante em todo o Brasil.</p>
              <ul>
                <li>Reconhecimento nacional</li>
                <li>QR Code para verificação de autenticidade</li>
                <li>Formato digital disponível</li>
                <li>Acesso a benefícios exclusivos</li>
              </ul>
              <a href="#" className="btn-primary">
                Saiba Mais
              </a>
            </div>

            <div className="servico-item">
              <h2>Consultoria Jurídica</h2>
              <p>Suporte jurídico especializado para estudantes em diversas áreas.</p>
              <ul>
                <li>Orientação sobre direitos estudantis</li>
                <li>Suporte em casos de discriminação</li>
                <li>Assistência em problemas com instituições de ensino</li>
                <li>Consultoria para bolsas e financiamentos</li>
              </ul>
              <a href="#" className="btn-primary">
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <ScrollTopButton />
    </div>
  )
}
