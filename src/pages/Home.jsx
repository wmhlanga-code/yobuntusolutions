import { Link } from 'react-router-dom';
import { Brain, MapPin, Rocket, ArrowRight, Users, Zap } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'AI Consulting',
    desc: 'Practical, ethical AI guidance for small businesses, NGOs, and schools — no jargon, real results.',
    icon: Brain,
    bg: 'var(--primary-lt)',
    color: 'var(--primary)',
    to: '/ai-consulting',
  },
  {
    num: '02',
    title: 'Local Directory',
    desc: 'Find and connect with trusted tradespeople, clinics, and service providers in Nkomazi.',
    icon: MapPin,
    bg: 'var(--purple-lt)',
    color: 'var(--purple)',
    to: '/directory',
  },
  {
    num: '03',
    title: 'Digital Agency',
    desc: 'Websites, social media, branding, and B2B connections — built for local businesses.',
    icon: Rocket,
    bg: 'var(--amber-lt)',
    color: 'var(--amber)',
    to: '/agency',
  },
];

const stats = [
  { val: '34%', label: 'of informal traders want digital marketing help' },
  { val: 'R50', label: 'per month for a premium listing' },
  { val: '0 MB', label: 'data-optimised for low-data phones' },
  { val: '100%', label: 'community-first focus' },
];

const previewCards = [
  { icon: Brain, title: 'AI Readiness Assessment', desc: 'Understand what AI can realistically do for you.', bg: 'var(--primary-lt)', color: 'var(--primary)', to: '/ai-consulting' },
  { icon: Zap, title: 'Workflow Automation', desc: 'Cut repetitive admin and free your team.', bg: 'var(--primary-lt)', color: 'var(--primary)', to: '/ai-consulting' },
  { icon: MapPin, title: 'Tradespeople Directory', desc: 'Find verified local plumbers, mechanics, and more.', bg: 'var(--purple-lt)', color: 'var(--purple)', to: '/directory' },
  { icon: Users, title: 'Health Directory', desc: 'Clinics and doctors with real hours and contacts.', bg: 'var(--blue-lt)', color: 'var(--blue)', to: '/directory' },
  { icon: Rocket, title: 'Website Design & Build', desc: 'Mobile-first, low-data sites for your business.', bg: 'var(--amber-lt)', color: 'var(--amber)', to: '/agency' },
  { icon: ArrowRight, title: 'B2B Connections', desc: 'We actively connect compatible local businesses.', bg: 'var(--coral-lt)', color: 'var(--coral)', to: '/agency' },
];

const connections = [
  { emoji: '🌱', left: 'Local tomato farm', right: 'Malelane restaurant group needing a local supplier' },
  { emoji: '🔧', left: 'Small contractor', right: 'NGO and municipality tender opportunity' },
  { emoji: '🏘️', left: 'Youth NGO', right: 'Corporate CSI funder seeking rural Mpumalanga projects' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 60% 50% at 85% 15%, rgba(29,158,117,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 10% 90%, rgba(83,75,183,0.06) 0%, transparent 70%)
          `,
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.04) 40px)`,
        }} />
        <div className="section-wrap" style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative' }}>
          <p className="eyebrow">Nkomazi · Mpumalanga · South Africa</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            One platform to grow, connect, and{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>transform</em>{' '}
            your business
          </h1>
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '1.05rem', maxWidth: 580, marginBottom: '2rem', lineHeight: 1.7 }}>
            YoBuntu Solutions combines AI enablement consulting, a trusted local services directory, and a full digital agency — built specifically for small businesses, NGOs, schools, and tradespeople in rural South Africa.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get started <ArrowRight size={16} aria-hidden="true" /></Link>
            <a href="#pillars" className="btn-ghost">See everything we do</a>
          </div>
        </div>
      </section>

      {/* Ubuntu Banner */}
      <div style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB', padding: '1.25rem 1.5rem' }}>
        <p style={{ maxWidth: 1100, margin: '0 auto', fontStyle: 'italic', color: 'var(--deep)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>"</span>
          Ubuntu: 'I am because we are' — technology is most powerful when it lifts everyone together.
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>"</span>
        </p>
      </div>

      {/* Three Pillars */}
      <section id="pillars">
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: 0 }}>What we do</p>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', marginTop: '0.4rem' }}>Three pillars, one community</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Everything you need to grow and connect in Nkomazi.</p>
          <div className="grid-3">
            {pillars.map(p => (
              <Link key={p.num} to={p.to} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>{p.num}</p>
                  <div className="icon-sq" style={{ background: p.bg, marginBottom: '1rem' }}>
                    <p.icon size={22} color={p.color} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '1rem',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>{s.val}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
      </section>

      {/* Services Preview */}
      <section>
        <div className="section-wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ fontSize: '1.75rem' }}>Our services at a glance</h2>
          </div>
          <div className="grid-3">
            {previewCards.map((c, i) => (
              <Link key={i} to={c.to} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="icon-sq" style={{ background: c.bg }}>
                    <c.icon size={20} color={c.color} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif" }}>{c.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{c.desc}</p>
                  <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 500, marginTop: 'auto' }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Connection Examples */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>We connect the right businesses to each other</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Real introductions that create real economic value in the community.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {connections.map((c, i) => (
              <div key={i} style={{
                background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 12,
                padding: '1.1rem 1.5rem',
                display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: 'var(--primary-lt)', color: 'var(--deep)',
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

      {/* Final CTA */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Ready to build something real?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
            Start with a free listing or book a conversation — no technical knowledge needed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Start the conversation <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link to="/ai-consulting" className="btn-ghost">Why YoBuntu?</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
