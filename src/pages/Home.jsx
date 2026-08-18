import { Link } from 'react-router-dom';
import {
  Network, HeartHandshake, Cpu, ArrowRight, CheckCircle, X,
  Users, Truck, Building2, Landmark, Compass, Utensils, Share2, LineChart,
} from 'lucide-react';
import { coreServices } from '../data/services';
import { images } from '../data/images';
import SEO from '../components/SEO';
import pilotTeaser from '../assets/divine/pilot-teaser.jpg';

const iconMap = { HeartHandshake, Network, Compass, Share2, Cpu, LineChart };

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
    title: 'We build a network around you',
    desc: 'We connect your business to new customers, suppliers, strategic partners, investors, NGOs, government opportunities, and technology partners — the relationships that unlock growth.',
    Icon: Network,
    bg: 'var(--blue-lt)',
    color: 'var(--blue)',
  },
  {
    num: '02',
    title: 'We stay as your growth partner',
    desc: 'We don\'t give advice and leave. We partner for the long term — continuously finding introductions, collaborations, and opportunities that grow your business year after year.',
    Icon: HeartHandshake,
    bg: 'var(--primary-lt)',
    color: 'var(--primary)',
  },
  {
    num: '03',
    title: 'We use AI to make you efficient',
    desc: 'Automation, business analysis, customer support, marketing insight, and forecasting reduce your costs and free your team. AI is one of our tools — always in service of your growth.',
    Icon: Cpu,
    bg: 'var(--teal-lt)',
    color: 'var(--teal)',
  },
];

const connectTo = [
  { Icon: Users, label: 'New customers' },
  { Icon: Truck, label: 'Suppliers' },
  { Icon: HeartHandshake, label: 'Strategic partners' },
  { Icon: Landmark, label: 'Investors' },
  { Icon: Building2, label: 'NGOs & NPOs' },
  { Icon: Compass, label: 'Government opportunities' },
  { Icon: Cpu, label: 'Technology partners' },
  { Icon: Network, label: 'Other businesses' },
];

const stats = [
  { val: 'Years', label: 'A partnership measured in years, not weeks' },
  { val: '8+', label: 'Types of connection we build around you' },
  { val: '1', label: 'Trusted network — every member strengthens it' },
  { val: '100%', label: 'Results measured and documented' },
];

const compareRows = [
  { them: 'Give recommendations, then leave', us: 'Stay on as a long-term growth partner' },
  { them: 'Simply list businesses in a directory', us: 'Actively make warm, relevant introductions' },
  { them: 'Networking events that happen once and end', us: 'An ongoing engine of opportunities and collaborations' },
  { them: 'Sell you an AI tool as the product', us: 'Use AI in service of a much bigger growth mission' },
];

export default function Home() {
  return (
    <div>
      <SEO
        path="/"
        description="YoBuntu Solutions is a South African business growth and network company. We help businesses grow by connecting them to the customers, partners, investors, technology, and opportunities they need to succeed."
      />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 560, display: 'flex', alignItems: 'center' }}>
        <img src={images.heroBoard} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, rgba(26,39,84,0.95) 0%, rgba(11,123,148,0.90) 45%, rgba(11,123,148,0.55) 100%)',
        }} />
        <div className="section-wrap" style={{ position: 'relative', paddingTop: '5.5rem', paddingBottom: '5.5rem', color: '#fff', width: '100%' }}>
          <p className="eyebrow" style={{ color: '#5EE7F5' }}>
            <span className="eyebrow-line" /> Business growth &amp; network company · South Africa
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', maxWidth: 780, marginBottom: '1.25rem', color: '#fff' }}>
            We help businesses grow through the right{' '}
            <em style={{ color: '#5EE7F5', fontStyle: 'italic' }}>connections</em>, resources, and support
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 300, fontSize: '1.1rem', maxWidth: 620, marginBottom: '2.25rem', lineHeight: 1.7 }}>
            Most businesses don't fail because they have bad products — they fail because they lack the right connections, resources, and support system. YoBuntu Solutions exists to solve that. We become your long-term growth partner and build a network around your business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--deep)', borderColor: '#fff' }}>
              Become a partner <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/network" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.7rem 1.4rem', borderRadius: 8, fontWeight: 500, fontSize: '0.95rem',
              border: '2px solid rgba(255,255,255,0.6)', color: '#fff',
            }}>How the network works</Link>
          </div>
        </div>
      </section>

      {/* Ubuntu Banner */}
      <div style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB', padding: '1.25rem 1.5rem' }}>
        <p style={{ maxWidth: 1100, margin: '0 auto', fontStyle: 'italic', color: 'var(--deep)', fontSize: '0.98rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>&ldquo;</span>
          Ubuntu: &lsquo;I am because we are&rsquo; — every business we add strengthens the network for every other business.
          <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>&rdquo;</span>
        </p>
      </div>

      {/* The belief / problem */}
      <section>
        <div className="section-wrap">
          <div className="split">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Our core belief</p>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1rem' }}>Great products aren't enough. Connections are what's missing.</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Traditional consultants give recommendations and leave. Directories just list businesses. Networking events happen once and end. None of them stay to make sure a business actually grows.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                YoBuntu Solutions is different. We partner with each business and become a long-term growth partner — actively building a network of customers, suppliers, partners, and opportunities around it, then using AI to make it more efficient along the way.
              </p>
            </div>
            <div className="split-media">
              <img className="media" src={images.collaboration} alt="Hands collaborating on a laptop" style={{ height: 380 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: 0 }}>How we work</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem', marginTop: '0.4rem' }}>A growth partner, not a consultant</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 640 }}>Three things happen when you partner with YoBuntu — and they keep happening, for as long as we work together.</p>
          <div className="grid-3">
            {pillars.map(p => (
              <div key={p.num} className="card" style={{ height: '100%', background: 'var(--bg)' }}>
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

      {/* What we connect you to */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>What we connect you to</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>The relationships that grow a business</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 620 }}>We build a network around your business and actively make the introductions that create mutual value.</p>
          <div className="grid-4">
            {connectTo.map((c, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1.1rem 1.25rem' }}>
                <div className="icon-sq" style={{ background: 'var(--primary-lt)', width: 40, height: 40 }}>
                  <c.Icon size={18} color="var(--primary)" aria-hidden="true" />
                </div>
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>What we do</p>
              <h2 style={{ fontSize: '1.9rem' }}>Everything a growth partner should</h2>
            </div>
            <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem' }}>See all services →</Link>
          </div>
          <div className="grid-3">
            {coreServices.map(s => {
              const IconComp = iconMap[s.icon];
              const { bg, color } = colorMap[s.color] || colorMap.green;
              return (
                <div key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'var(--bg)' }}>
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

      {/* Network effect / vision */}
      <section className="section-dark">
        <div className="section-wrap">
          <div className="split">
            <div className="split-media">
              <img className="media" src={images.growth} alt="A growing city skyline representing scaling businesses" style={{ height: 360 }} />
            </div>
            <div>
              <p className="eyebrow">The vision</p>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1rem' }}>An ecosystem where every business makes the network stronger</h2>
              <p style={{ color: 'rgba(224,247,251,0.85)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                As the network grows, businesses discover opportunities they never would have found alone. Every business that joins increases the value of the network for everyone else — a genuine network effect.
              </p>
              <blockquote style={{
                borderLeft: '3px solid #5EE7F5', paddingLeft: '1.25rem',
                fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
                fontSize: '1.2rem', lineHeight: 1.5, color: '#fff',
              }}>
                &ldquo;I don't just get advice. I instantly gain access to hundreds of businesses that can help me grow.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why YoBuntu — comparison */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Why YoBuntu</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>Not a consultant. Not a directory. A partner.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 620 }}>The difference is that we stay — and we keep working to help you grow for years.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {compareRows.map((r, i) => (
              <div key={i} className="grid-2" style={{ gap: '0.75rem' }}>
                <div className="card" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: 'var(--bg-secondary)', borderStyle: 'dashed' }}>
                  <X size={20} color="var(--coral)" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{r.them}</span>
                </div>
                <div className="card" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
                  <span style={{ fontWeight: 500, fontSize: '0.92rem' }}>{r.us}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot teaser */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <div className="split reverse">
            <div className="split-media">
              <img className="media" src={pilotTeaser} alt="A spread of Divine Projects catering sides" style={{ height: 340 }} />
            </div>
            <div>
              <p className="chip" style={{ marginBottom: '1rem' }}><Utensils size={15} aria-hidden="true" /> Pilot · Divine Projects</p>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1rem' }}>We're proving the model, not just pitching it</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Our first pilot is Divine Projects, a catering, events, and rides business based in Sidlamafa, Mpumalanga. We're building an entire support ecosystem around them — corporate catering partnerships, event planners, food suppliers, transport partners, and AI tools that cut costs — and documenting every result.
              </p>
              <Link to="/pilot" className="btn-primary">See the pilot <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
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

      {/* Final CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Grow with a network behind you</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
            Book a free conversation. We'll learn about your business and show you the connections and opportunities we could build around it.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Become a partner <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link to="/network" className="btn-ghost">Explore the network</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
