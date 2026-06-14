import { Link } from 'react-router-dom';
import {
  Brain, TrendingUp, Network, ArrowRight, CheckCircle,
  Settings, Monitor, BarChart2, ShieldCheck,
} from 'lucide-react';
import { coreServices } from '../data/services';
import SEO from '../components/SEO';

const iconMap = { Brain, TrendingUp, Network, Settings, Monitor, BarChart2, ShieldCheck };

const colorMap = {
  green:  { bg: 'var(--primary-lt)', color: 'var(--primary)' },
  purple: { bg: 'var(--purple-lt)',  color: 'var(--purple)' },
  blue:   { bg: 'var(--blue-lt)',    color: 'var(--blue)' },
  amber:  { bg: 'var(--amber-lt)',   color: 'var(--amber)' },
  teal:   { bg: 'var(--teal-lt)',    color: 'var(--teal)' },
  coral:  { bg: 'var(--coral-lt)',   color: 'var(--coral)' },
};

const pillars = [
  {
    num: '01',
    title: 'AI & Automation',
    desc: 'Practical AI and automation tools that eliminate inefficiency and drive measurable results.',
    Icon: Brain,
    bg: 'var(--primary-lt)',
    color: 'var(--primary)',
  },
  {
    num: '02',
    title: 'Business Strategy',
    desc: 'Process optimization, digital transformation, and growth consulting built around your goals.',
    Icon: TrendingUp,
    bg: 'var(--purple-lt)',
    color: 'var(--purple)',
  },
  {
    num: '03',
    title: 'Business Network',
    desc: 'A trusted network of businesses, NGOs, and partners — connected by YoBuntu to collaborate and grow.',
    Icon: Network,
    bg: 'var(--amber-lt)',
    color: 'var(--amber)',
  },
];

const stats = [
  { val: '7',    label: 'Core service areas' },
  { val: '3',    label: 'Pillars: AI · Strategy · Network' },
  { val: '100%', label: 'Tailored to your organisation' },
  { val: '∞',    label: 'Network connections available' },
];

const connections = [
  { emoji: '🏭', left: 'Manufacturing SME', right: 'Connected to a logistics partner cutting delivery costs by 30%' },
  { emoji: '🏘️', left: 'Rural NGO', right: 'Introduced to a corporate CSI funder aligned with their community mission' },
  { emoji: '🌱', left: 'Agri-business', right: 'Matched with a data analytics partner to optimise crop yield forecasting' },
];

const reasons = [
  { title: 'Practical, not theoretical', desc: 'We implement real solutions, not slide decks. Every engagement ends with something working.' },
  { title: 'Ethical by default', desc: 'AI and data tools are implemented responsibly, with privacy, bias, and governance built in from day one.' },
  { title: 'Industry-agnostic', desc: 'We work across sectors: NGOs, agriculture, retail, education, health, and more.' },
  { title: 'Network effect', desc: 'Every client gains access to our broader partner network — opening doors to collaborators, funders, and opportunities.' },
];

export default function Home() {
  return (
    <div>
      <SEO
        path="/"
        description="YoBuntu Solutions is a South African business growth and innovation consultancy. We help organisations across the country improve operations, increase revenue, and adopt AI responsibly."
      />
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
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
          <p className="eyebrow">Business growth & innovation · South Africa</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            Grow your organisation with{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>AI, strategy,</em>{' '}
            and the right connections
          </h1>
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '1.05rem', maxWidth: 580, marginBottom: '2rem', lineHeight: 1.7 }}>
            YoBuntu Solutions is a business growth and innovation consultancy helping organisations improve operations, increase revenue, and adopt AI responsibly. We combine AI expertise, business strategy, and a trusted partner network to drive long-term impact.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Book a free consultation <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link to="/services" className="btn-ghost">Explore our services</Link>
          </div>
        </div>
      </section>

      {/* Ubuntu Banner */}
      <div style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB', padding: '1.25rem 1.5rem' }}>
        <p style={{ maxWidth: 1100, margin: '0 auto', fontStyle: 'italic', color: 'var(--deep)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>"</span>
          Ubuntu: 'I am because we are' — we believe businesses grow faster when they grow together.
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>"</span>
        </p>
      </div>

      {/* Three Pillars */}
      <section id="pillars">
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: 0 }}>What we do</p>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', marginTop: '0.4rem' }}>Three pillars, one mission</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>AI, strategy, and connections — everything your organisation needs to grow.</p>
          <div className="grid-3">
            {pillars.map(p => (
              <div key={p.num} className="card" style={{ height: '100%' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>{p.num}</p>
                <div className="icon-sq" style={{ background: p.bg, marginBottom: '1rem' }}>
                  <p.Icon size={22} color={p.color} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
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
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Our services</p>
              <h2 style={{ fontSize: '1.75rem' }}>What we do</h2>
            </div>
            <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem' }}>See all services →</Link>
          </div>
          <div className="grid-3">
            {coreServices.map(s => {
              const IconComp = iconMap[s.icon];
              const { bg, color } = colorMap[s.color] || colorMap.green;
              return (
                <div key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="icon-sq" style={{ background: bg }}>
                    {IconComp && <IconComp size={20} color={color} aria-hidden="true" />}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, flex: 1 }}>
                    {s.description.split('.')[0]}.
                  </p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ background: bg, color, padding: '0.15rem 0.55rem', borderRadius: 20, fontSize: '0.75rem', fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B Network Section */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Our network in action</p>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>We connect the right organisations to each other</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Active introductions that create real economic value.</p>
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

      {/* Why YoBuntu */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Why organisations choose YoBuntu Solutions</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Built for organisations that need real results, not consultancy theatre.</p>
          <div className="grid-2">
            {reasons.map((r, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle size={22} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{r.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Ready to grow your organisation?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
            Book a free 30-minute consultation. No commitment, no jargon — just a practical conversation about what's possible.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Book free consultation <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link to="/network" className="btn-ghost">Explore our network</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
