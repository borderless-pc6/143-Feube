import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import SolicitarIntro from "@/components/solicitar/solicitar-intro"
import SolicitarSteps from "@/components/solicitar/solicitar-steps"
import SolicitarPlans from "@/components/solicitar/solicitar-plans"
import SolicitarFaq from "@/components/solicitar/solicitar-faq"
import "@/styles/solicitar-page.css"

export default function SolicitarPage() {
  return (
    <>
      <Header />
      <main className="solicitar-page">
        <SolicitarIntro />
        <SolicitarSteps />
        <SolicitarPlans />
        <SolicitarFaq />
      </main>
      <Footer />
    </>
  )
}
