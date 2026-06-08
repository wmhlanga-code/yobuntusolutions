import { Link } from 'react-router-dom';
import { Globe, Megaphone, Network, FileText, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Design & Build',
    desc: 'Professional, mobile-first websites for small businesses, NGOs, and schools. Low data usage, WhatsApp integration, easy to update.',
    tags: ['Mobile-first', 'WhatsApp ready', 'Low data', 'Fast delivery'],
    bg: 'var(--primary-lt)', color: 'var(--primary)',
  },
  {
    icon: Megaphone,
    title: 'Social Media & Marketing',
    desc: 'Content creation, Facebook & Instagram ads, AI-assisted posting schedules targeted to local audiences in Nkomazi and Mpumalanga.',
    tags: ['Facebook ads', 'Instagram', 'AI-assisted', 'Local targeting'],
    bg: 'var(--amber-lt)', color: 'var(--amber)',
  },
  {
    icon: Network,
    title: 'B2B Business Connections',
    desc: 'We actively connect compatible local businesses with each other — matching suppliers with buyers, contractors with clients, NGOs with funders.',
    tags: ['Supplier matching', 'Funder introductions', 'Local partnerships'],
    bg: 'var(--purple-lt)', color: 'var(--purple)',
  },
  {
    icon: FileText,
    title: 'Business Admin & Branding',
    desc: 'Logo design, business cards, email setup, invoice templates, and professional profiles — everything a small business needs to look the part.',
    tags: ['Branding', 'Logo design', 'Admin tools', 'Email setup'],
    bg: 'var(--coral-lt)', color: 'var(--coral)',
  },
];

const connections = [
  { emoji: '🌱', left: 'Local tomato farm', right: 'Matched with a Malelane restaurant group needing a local supplier' },
  { emoji: '🔧', left: 'Small contractor', right: 'Connected to a municipality tender and an NGO needing maintenance' },
  { emoji: '🏘️', left: 'Youth NGO', right: 'Introduced to a corporate CSI funder seeking rural Mpumalanga projects' },
];

const steps = [
  { num: '1', title: 'Discovery call', desc: 'Understand your business, goals, and budget' },
  { num: '2', title: 'Proposal & quote', desc: 'Tailored plan sent within 48 hours' },
  { num: '3', title: 'Build & deliver', desc: 'Fast turnaround with regular updates throughout' },
  { num: '4', title: 'Promote & connect', desc: 'Launch, market, and make business introductions' },
];

export default function Agency() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--amber-lt)', borderBottom: '1px solid #DEB37A' }}>
        <div className="section-wrap">
          <p className="eyebrow">Pillar 03 · Digital Agency</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', maxWidth: 600, marginBottom: '1rem' }}>
            Build, market, and connect your business
          </h1>
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 520, lineHeight: 1.7 }}>
            From a professional website to active B2B introductions — we handle the digital side so you can focus on what you do best.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>What we build for you</h2>
          <div className="grid-2">
            {services.map((s, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                  <div className="icon-sq" style={{ background: s.bg, flexShrink: 0 }}>
                    <s.icon size={20} color={s.color} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      background: s.bg, color: s.color,
                      padding: '0.2rem 0.65rem', borderRadius: 20, fontSize: '0.78rem', fontWeight: 500,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Connection Visual */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>How we connect local businesses</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Active introductions — not just a listing. We identify the right connections and make the call.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {connections.map((c, i) => (
              <div key={i} style={{
                background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 12,
                padding: '1.1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: 'var(--amber-lt)', color: 'var(--amber)',
                  padding: '0.35rem 0.9rem', borderRadius: 20, fontSize: '0.88rem', fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}>
                  {c.emoji} {c.left}
                </span>
                <ArrowRight size={18} color="var(--text-muted)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{c.right}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>How we work together</h2>
          <div className="grid-4">
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                }}>{s.num}</div>
                <h3 style={{ fontSize: '1rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Placeholder */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our work</h2>
          <div style={{
            border: '2px dashed var(--border)', borderRadius: 12,
            padding: '3rem 2rem', textAlign: 'center', color: 'var(--text-muted)',
          }}>
            <p style={{ fontSize: '1rem' }}>Our work speaks for itself — case studies coming soon.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--amber-lt)', borderTop: '1px solid #DEB37A' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Ready to grow your digital presence?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>Tell us about your business and we'll send a tailored quote within 48 hours.</p>
          <Link to="/contact" className="btn-primary">Get a quote <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
}
