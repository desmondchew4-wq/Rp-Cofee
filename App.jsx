import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import BestSeller from './components/BestSeller';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import EventSection from './components/EventSection';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import LofiPlayer from './components/LofiPlayer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <BestSeller />
      <Reviews />
      <Gallery />
      <EventSection />
      <Footer />
      <FloatingWA />
      <LofiPlayer />
    </div>
  );
}
