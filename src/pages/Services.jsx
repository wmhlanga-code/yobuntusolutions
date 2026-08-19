import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Network, Compass, Share2, Cpu, LineChart } from 'lucide-react';
import { coreServices } from '../data/services';
import { images } from '../data/images';
import SEO from '../components/SEO';

const iconMap = { HeartHandshake, Network, Compass, Share2, Cpu, LineChart };

const colorMap = {
  green:  { bg: 'var(--primary-lt)', color: 'var(--primary)' },
  purple: { bg: 'var(--purple-lt)',  color: 'var(--purple)' },
  blue:   { bg: 'var(--blue-lt)',    color: 'var(--blue)' },
  amber:  { bg: 'var(--amber-lt)',   color: 'var(--amber)' },
  teal:   { bg: 'var(--teal-lt)',    color: 'var(--teal)' },
  coral:  { bg: 'var(--coral-lt)',   color: 'var(--coral)' },
};

const steps = [
  { num: '1', title: 'Understand', desc: 'We learn how your business really works — its strengths, constraints, customers, and where growth is stuck.' },
  { num: '2', title: 'Connect', desc: 'We build a network around you: customers, suppliers, partners, funders, and opportunities that create mutual value.' },
  { num: '3', title: 'Optimise', desc: 'Where it helps, we bring in AI and automation to cut costs, save time, and free your team for higher-value work.' },
  { num: '4', title: 'Measure & repeat', desc: 'We document the results — revenue, partnerships, customers, time, cost — and keep working as your growth partner.' },
];

const audiences = [
  'Small & growing businesses', 'Restaurants & hospitality', 'Agriculture & food',
  'Manufacturing & trade', 'NGOs & NPOs', 'Health & education',
];

export default function Services() {
  return (
    <div>
      <SEO
        title="What We Do — Connections, Growth Partnership & AI Efficiency"
        description="YoBuntu Solution helps businesses grow: long-term growth partnership, business introductions, access to investors and government opportunities, strategic partnerships, AI-powered efficiency, and measured results."
        path="/services"
      />

      {/* Hero */}
      <section style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB' }}>
        <div className="section-wrap">
          <div className="split">
            <div>
              <p className="eyebrow">What we do</p>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', maxWidth: 620, marginBottom: '1rem' }}>
                Everything a real growth partner should do
              </h1>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 560, lineHeight: 1.8 }}>
                We don't sell off-the-shelf packages. We partner with your business, build a network around it, and use AI where it makes you more efficient — then we measure the results and keep going.
              </p>
            </div>
            <div className="split-media">
              <img className="media" src={images.handshake} alt="Business partners agreeing on a deal" style={{ height: 320 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Our services</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>Six ways we help you grow</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 620 }}>Each one is shaped around your specific business — not a generic template. AI is one of these tools, not the headline.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {coreServices.map(s => {
              const IconComp = iconMap[s.icon];
              const { bg, color } = colorMap[s.color] || colorMap.green;
              return (
                <div key={s.id} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div className="icon-sq" style={{ background: bg, width: 52, height: 52, borderRadius: 12, flexShrink: 0 }}>
                    {IconComp && <IconComp size={24} color={color} aria-hidden="true" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '0.85rem' }}>{s.description}</p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {s.tags.map(t => (
                        <span key={t} style={{ background: bg, color, padding: '0.2rem 0.65rem', borderRadius: 20, fontSize: '0.78rem', fontWeight: 500 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>The partnership</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>How we work with you</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>A partnership loop designed to deliver real, measured outcomes — again and again.</p>
          <div style={{ position: 'relative', maxWidth: 600 }}>
            <div style={{
              position: 'absolute', left: 19, top: 40, bottom: 40,
              width: 2, background: 'var(--border)',
            }} />
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: i < steps.length - 1 ? '1.75rem' : 0, alignItems: 'flex-start', position: 'relative' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem',
                  flexShrink: 0, zIndex: 1,
                }}>
                  {s.num}
                </div>
                <div style={{ paddingTop: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Who we work with</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '1.5rem' }}>Businesses ready to grow</h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {audiences.map(a => (
              <span key={a} style={{
                background: 'var(--primary-lt)', color: 'var(--deep)',
                padding: '0.5rem 1.1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 500,
              }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.75rem' }}>Let's build a network around your business</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>Book a free conversation and we'll map what growth could look like.</p>
          <Link to="/contact" className="btn-primary">
            Let's talk <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
