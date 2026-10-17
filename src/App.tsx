import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WorksGallery from './components/WorksGallery';
import FAQ from './components/FAQ';
import NuestrasRedes from './components/NuestrasRedes';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SeoSchema from './components/SeoSchema';
import ServicePage from './components/ServicePage';
import { getServicePage } from './data/servicePages';
import { normalizePath } from './seo';

function App({ pathname = '/' }: { pathname?: string }) {
  const path = normalizePath(pathname);
  const servicePage = getServicePage(path);
  const isHome = path === '/';

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      <SeoSchema pathname={path} />
      <a href="#contenido-principal" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3 focus:text-tf-dark">
        Ir al contenido
      </a>
      <Header />
      {isHome ? (
        <main id="contenido-principal">
          <Hero />
          <Services />
          <HowItWorks />
          <WorksGallery />
          <FAQ />
          <NuestrasRedes />
          <CTA />
        </main>
      ) : servicePage ? (
        <ServicePage page={servicePage} />
      ) : (
        <main id="contenido-principal" className="mx-auto min-h-[60vh] max-w-4xl px-6 pb-20 pt-40">
          <h1 className="text-4xl font-bold text-tf-dark">No encontramos esta página</h1>
          <p className="mt-6 text-lg text-slate-600">Puedes volver al inicio o consultar nuestros servicios de gas a domicilio en Medellín.</p>
          <a href="/" className="mt-8 inline-block font-semibold text-tf-dark underline underline-offset-4">Volver al inicio</a>
        </main>
      )}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
