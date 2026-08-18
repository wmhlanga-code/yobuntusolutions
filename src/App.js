import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Network from './pages/Network';
import Pilot from './pages/Pilot';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'YoBuntu Solutions (Pty) Ltd',
  description: 'A business growth and network company helping businesses grow by connecting them to the customers, partners, investors, technology, and opportunities they need to succeed.',
  url: 'https://www.yobuntusolutions.co.za',
  logo: 'https://www.yobuntusolutions.co.za/logo192.png',
  image: 'https://www.yobuntusolutions.co.za/og-image.png',
  telephone: '+27762505608',
  email: 'Yobuntusolutions@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nkomazi',
    addressRegion: 'Mpumalanga',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.5,
    longitude: 31.9,
  },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Growth & Network Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Long-Term Growth Partnership' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Introductions & Connections' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access to Opportunities (Investors, Government, NGOs)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic Partnerships & Collaboration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Powered Efficiency' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Results Measurement & Reporting' } },
    ],
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(STRUCTURED_DATA)}
        </script>
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/network" element={<Network />} />
              <Route path="/pilot" element={<Pilot />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
