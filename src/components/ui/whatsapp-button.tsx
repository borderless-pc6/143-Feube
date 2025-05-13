import Link from "next/link"
import "@/styles/whatsapp-button.css"

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-button">
      <Link
        href="https://wa.me/5581996258895?text=Olá,%20gostaria%20de%20informações%20sobre%20a%20carteira%20de%20estudante"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <span>1</span>
      </Link>
    </div>
  )
}
