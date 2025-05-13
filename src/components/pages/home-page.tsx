import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import ScrollTopButton from "@/components/ui/scroll-top-button"

export default function HomePage() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhatsAppButton />
      <ScrollTopButton />
    </div>
  )
}
