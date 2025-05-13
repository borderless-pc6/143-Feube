import Header from "@/components/layout/header"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import ScrollTopButton from "@/components/ui/scroll-top-button"
import "@/styles/contato-page.css"

export default function ContatoPage() {
  return (
    <div className="app">
      <Header />

      <main className="contato-page">
        <div className="container">
          <h1 className="page-title">Entre em Contato</h1>

          <div className="contato-content">
            <div className="contato-info">
              <div className="info-item">
                <h3>Telefones</h3>
                <p>(81) 3972-1188</p>
                <p>(81) 99625-8895</p>
              </div>

              <div className="info-item">
                <h3>Email</h3>
                <p>contato@estudantenet.com.br</p>
              </div>

              <div className="info-item">
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>

              <div className="info-item">
                <h3>Redes Sociais</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    Facebook
                  </a>
                  <a href="#" className="social-link">
                    Instagram
                  </a>
                  <a href="#" className="social-link">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="contato-form">
              <h2>Envie uma Mensagem</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" />
                </div>

                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <select id="assunto" name="assunto" required>
                    <option value="">Selecione um assunto</option>
                    <option value="carteira">Carteira de Estudante</option>
                    <option value="dne">Documento Nacional</option>
                    <option value="juridico">Consultoria Jurídica</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Digite sua mensagem"
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <ScrollTopButton />
    </div>
  )
}
