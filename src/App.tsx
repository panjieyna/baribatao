import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Coverage } from './components/Coverage'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { InfoPromo } from './components/InfoPromo'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

export default function App() {
  return (
    <>
      <a href="#konten-utama" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten-utama">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Coverage />
        <HowItWorks />
        <InfoPromo />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
