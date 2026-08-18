import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoMark from '../assets/logo-mark.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/network', label: 'The Network' },
    { to: '/services', label: 'What We Do' },
    { to: '/pilot', label: 'Pilot' },
    { to: '/about', label: 'About' },
    { to: '/pricing', label: 'Partnership' },
    { to: '/contact', label: 'Contact' },
  ];

  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
    boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.07)' : 'none',
    transition: 'box-shadow 0.2s',
  };

  const innerStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 1.5rem',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    textDecoration: 'none',
    color: 'var(--text)',
  };

  const logoMarkStyle = {
    width: 34,
    height: 34,
    borderRadius: 8,
    display: 'block',
    flexShrink: 0,
    objectFit: 'cover',
  };

  const logoTextStyle = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.05rem',
    color: 'var(--text)',
  };

  const desktopLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    flex: 1,
    justifyContent: 'center',
  };

  const activeLinkStyle = {
    color: 'var(--primary)',
    fontWeight: 500,
  };

  const linkStyle = {
    padding: '0.4rem 0.75rem',
    borderRadius: 6,
    fontSize: '0.9rem',
    color: 'var(--text)',
    fontWeight: 400,
    transition: 'background 0.12s, color 0.12s',
    whiteSpace: 'nowrap',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: 64,
    left: 0,
    right: 0,
    background: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <Link to="/" style={logoStyle}>
          <img src={logoMark} alt="YoBuntu Solutions" style={logoMarkStyle} />
          <span style={logoTextStyle}>YoBuntu Solutions</span>
        </Link>

        <div style={desktopLinksStyle} className="desktop-nav">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeLinkStyle : {}),
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to="/contact" className="btn-primary desktop-nav" style={{ fontSize: '0.88rem', padding: '0.55rem 1.1rem' }}>
            Become a partner →
          </Link>
          <button
            onClick={() => setOpen(o => !o)}
            style={{ background: 'none', border: 'none', display: 'none', padding: '0.25rem' }}
            className="hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div style={dropdownStyle}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeLinkStyle : {}),
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }} onClick={() => setOpen(false)}>
            Become a partner →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
