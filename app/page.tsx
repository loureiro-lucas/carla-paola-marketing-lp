import ClientSection from '@/components/ClientsSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center'>
        <HeroSection />
        <ServicesSection />
        <ClientSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  )
}
