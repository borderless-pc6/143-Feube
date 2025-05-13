import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SolicitarForm from "@/components/solicitar/solicitar-form"
import "@/styles/solicitar-form.css"

export default function FormularioPage() {
  return (
    <>
      <Header />
      <main className="formulario-page">
        <div className="container">
          <h1 className="page-title">Formulário de Solicitação</h1>
          <p className="page-subtitle">
            Preencha todos os campos abaixo com atenção. Dados incorretos podem atrasar a emissão da sua carteira.
          </p>
          <SolicitarForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
