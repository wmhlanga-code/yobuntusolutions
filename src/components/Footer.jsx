import { Link } from 'react-router-dom';
import { Sparkles, MapPin } from 'lucide-react';

export default function Footer() {
  const col = { display: 'flex', flexDirection: 'column', gap: '0.75rem' };
  const heading = { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' };
  const linkStyle = { color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.12s' };

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }} className="footer-grid">
        <div style={col}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
            <div style={{ width: 32, height: 32, background: 'var(--primary)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={16} color="#fff" aria-hidden="true" />
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem' }}>YoBuntu Solutions</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Business growth and innovation consulting powered by AI.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={14} aria-hidden="true" /> Nkomazi, Mpumalanga, South Africa
          </p>
        </div>

        <div style={col}>
          <p style={heading}>Services</p>
          {[
            { to: '/services', label: 'AI & Automation Consulting' },
            { to: '/services', label: 'Business Process Optimization' },
            { to: '/services', label: 'Digital Transformation' },
            { to: '/services', label: 'Data Analytics & BI' },
            { to: '/services', label: 'AI Training & Ethics' },
            { to: '/network', label: 'Strategic Networking' },
            { to: '/services', label: 'Growth & Innovation' },
          ].map((l, i) => (
            <Link key={i} to={l.to} style={linkStyle} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{l.label}</Link>
          ))}
        </div>

        <div style={col}>
          <p style={heading}>Company</p>
          {[
            { to: '/about', label: 'About' },
            { to: '/network', label: 'Our Network' },
            { to: '/pricing', label: 'Pricing' },
            { to: '/contact', label: 'Contact' },
            { to: '/', label: 'Privacy Policy' },
          ].map((l, i) => (
            <Link key={i} to={l.to} style={linkStyle} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{l.label}</Link>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.83rem' }}>
        © 2025 YoBuntu Solutions · Nkomazi, Mpumalanga · Business growth powered by AI
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
