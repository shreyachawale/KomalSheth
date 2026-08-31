import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import EmceePortfolio from './sections/EmceePortfolio';
import BusinessConsultant from './sections/BusinessConsultant';
import CreativeWorkshops from './sections/CreativeWorkshops';
import Contact from './sections/Contact';
import BrandBuilding from './components/BrandBuilding';

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body">
      <Navbar />
      <main>
        <Hero />
        <EmceePortfolio />
        <BusinessConsultant />
        <CreativeWorkshops />
        <BrandBuilding />
        {/* <TarotReading /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
