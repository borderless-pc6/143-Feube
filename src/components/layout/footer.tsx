import Link from "next/link"
import Image from "next/image"
import "@/styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src="/placeholder.svg?height=50&width=150" alt="EstudanteNet Logo" width={150} height={50} />
            <p>Documento Nacional do Estudante - Sua identificação estudantil oficial.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Carteira</h3>
              <ul>
                <li>
                  <Link href="/carteira">Como Solicitar</Link>
                </li>
                <li>
                  <Link href="/beneficios">Benefícios</Link>
                </li>
                <li>
                  <Link href="/digital">Versão Digital</Link>
                </li>
                <li>
                  <Link href="/validacao">Validação</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Serviços</h3>
              <ul>
                <li>
                  <Link href="/servicos">Todos os Serviços</Link>
                </li>
                <li>
                  <Link href="/dne">Documento Nacional</Link>
                </li>
                <li>
                  <Link href="/parcerias">Parcerias</Link>
                </li>
                <li>
                  <Link href="/eventos">Eventos</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contato</h3>
              <ul>
                <li>
                  <Link href="/contato">Fale Conosco</Link>
                </li>
                <li>
                  <Link href="/suporte">Suporte</Link>
                </li>
                <li>
                  <Link href="/faq">Perguntas Frequentes</Link>
                </li>
                <li>
                  <Link href="/whatsapp">WhatsApp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EstudanteNet. Todos os direitos reservados.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              in
            </a>
            <a href="#" aria-label="Twitter">
              t
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
