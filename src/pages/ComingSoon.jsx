import { Mail, Phone, Quote } from 'lucide-react';
import logoMark from '../assets/logo-mark.png';
import SEO from '../components/SEO';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <div className="cs-page">
      <SEO
        title="Coming Soon"
        description="YoBuntu Solution is putting the finishing touches on our new site. We're a South African business growth and network company — check back soon."
        path="/"
      />

      <div className="cs-orb cs-orb-a" aria-hidden="true" />
      <div className="cs-orb cs-orb-b" aria-hidden="true" />
      <div className="cs-orb cs-orb-c" aria-hidden="true" />
      <div className="cs-grain" aria-hidden="true" />

      <div className="cs-content">
        <div className="cs-seal">
          <div className="cs-seal-ring">
            <div className="cs-seal-core">
              <img src={logoMark} alt="YoBuntu Solution" />
            </div>
          </div>
        </div>

        <p className="cs-eyebrow">YoBuntu Solution (Pty) Ltd</p>

        <h1 className="cs-headline">
          Something great
          <span className="cs-gradient-text"> is in the works</span>
        </h1>

        <p className="cs-sub">
          We're rebuilding our home online — connecting businesses to the people,
          partners, and opportunities they need to grow. Back soon.
        </p>

        <blockquote className="cs-quote">
          <Quote size={22} aria-hidden="true" className="cs-quote-icon" />
          <p>
            We're building the infrastructure that helps businesses grow by
            connecting them to the people, technology, and opportunities they
            need to succeed.
          </p>
        </blockquote>

        <p className="cs-expect">
          Expect a full site covering our growth partnership, business network,
          and AI-powered tools for South African businesses — soon.
        </p>

        <div className="cs-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="cs-contact-row">
          <a className="cs-contact" href="mailto:Yobuntusolutions@gmail.com">
            <Mail size={16} strokeWidth={2} />
            Yobuntusolutions@gmail.com
          </a>
          <a className="cs-contact" href="tel:+27762505608">
            <Phone size={16} strokeWidth={2} />
            +27 76 250 5608
          </a>
        </div>
      </div>

      <p className="cs-footer">© {new Date().getFullYear()} YoBuntu Solution (Pty) Ltd · Nkomazi, Mpumalanga, South Africa</p>
    </div>
  );
}
