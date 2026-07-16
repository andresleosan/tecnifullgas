import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import WorksGallery from './components/WorksGallery'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <WorksGallery />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
