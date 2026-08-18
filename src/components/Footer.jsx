import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import logoMark from '../assets/logo-mark.png';

export default function Footer() {
  const col = { display: 'flex', flexDirection: 'column', gap: '0.75rem' };
  const heading = { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' };
  const linkStyle = { color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.12s' };

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 0' }}>
        <div className="seal-wrap">
          <div className="seal-ring">
            <div className="seal-core">
              <img src={logoMark} alt="" aria-hidden="true" />
            </div>
          </div>
          <p className="seal-plate">YoBuntu Solutions (Pty) Ltd</p>
          <p className="seal-sub">Registered in South Africa · Nkomazi, Mpumalanga</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }} className="footer-grid">
        <div style={col}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>A business growth &amp; network company. We connect businesses to the people, technology, and opportunities they need to grow.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={14} aria-hidden="true" /> Nkomazi, Mpumalanga, South Africa
          </p>
        </div>

        <div style={col}>
          <p style={heading}>What we do</p>
          {[
            { to: '/services', label: 'Long-Term Growth Partnership' },
            { to: '/network', label: 'Business Introductions' },
            { to: '/services', label: 'Access to Opportunities' },
            { to: '/services', label: 'Strategic Partnerships' },
            { to: '/services', label: 'AI-Powered Efficiency' },
            { to: '/services', label: 'Results Measurement' },
            { to: '/pilot', label: 'The Divine Projects Pilot' },
          ].map((l, i) => (
            <Link key={i} to={l.to} style={linkStyle} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{l.label}</Link>
          ))}
        </div>

        <div style={col}>
          <p style={heading}>Company</p>
          {[
            { to: '/about', label: 'About' },
            { to: '/network', label: 'The Network' },
            { to: '/pilot', label: 'Pilot' },
            { to: '/pricing', label: 'Partnership' },
            { to: '/contact', label: 'Contact' },
          ].map((l, i) => (
            <Link key={i} to={l.to} style={linkStyle} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{l.label}</Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.83rem' }}>
        © 2025 YoBuntu Solutions (Pty) Ltd · Nkomazi, Mpumalanga · A business growth &amp; network company
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
