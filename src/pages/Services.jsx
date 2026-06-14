import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Settings, Monitor, BarChart2, ShieldCheck, Network, TrendingUp } from 'lucide-react';
import { coreServices } from '../data/services';
import SEO from '../components/SEO';

const iconMap = { Brain, Settings, Monitor, BarChart2, ShieldCheck, Network, TrendingUp };

const colorMap = {
  green:  { bg: 'var(--primary-lt)', color: 'var(--primary)' },
  purple: { bg: 'var(--purple-lt)',  color: 'var(--purple)' },
  blue:   { bg: 'var(--blue-lt)',    color: 'var(--blue)' },
  amber:  { bg: 'var(--amber-lt)',   color: 'var(--amber)' },
  teal:   { bg: 'var(--teal-lt)',    color: 'var(--teal)' },
  coral:  { bg: 'var(--coral-lt)',   color: 'var(--coral)' },
};

const steps = [
  { num: '1', title: 'Discover', desc: 'Deep-dive into your organisation: operations, data, goals, and pain points' },
  { num: '2', title: 'Design', desc: 'Co-create a solution roadmap tailored to your budget and timeline' },
  { num: '3', title: 'Deliver', desc: 'Implement, train, and integrate — with your team involved at every step' },
  { num: '4', title: 'Sustain', desc: 'Ongoing support, reviews, and iteration as your organisation evolves' },
];

const audiences = [
  'Businesses', 'NGOs & nonprofits', 'Government entities',
  'Schools & universities', 'Agricultural organisations', 'Health sector',
];

export default function Services() {
  return (
    <div>
      <SEO
        title="Our Services — AI Consulting, Digital Transformation & Business Growth"
        description="YoBuntu Solutions offers 7 tailored services to organisations across South Africa: AI & automation consulting, business process optimization, digital transformation, data analytics, AI ethics training, strategic networking, and growth consulting."
        path="/services"
      />
      {/* Hero */}
      <section style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB' }}>
        <div className="section-wrap">
          <p className="eyebrow">What we do</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', maxWidth: 620, marginBottom: '1rem' }}>
            Tailored solutions for real business challenges
          </h1>
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 560, lineHeight: 1.7 }}>
            We don't sell off-the-shelf packages. Every engagement begins with understanding your organisation — its goals, constraints, and opportunities — and then we build a solution around that.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Our seven service areas</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Every service is shaped around your specific organisation, not a generic template.</p>
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
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>How we work</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>A four-step process designed to deliver real outcomes.</p>
          <div style={{ position: 'relative', maxWidth: 560 }}>
            <div style={{
              position: 'absolute', left: 19, top: 40, bottom: 40,
              width: 2, background: 'var(--border)',
            }} />
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: i < steps.length - 1 ? '2rem' : 0, alignItems: 'flex-start', position: 'relative' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem',
                  flexShrink: 0, zIndex: 1,
                }}>
                  {s.num}
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Who we work with</h2>
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
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Not sure which service fits?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>Book a free 30-minute conversation and we'll work it out together.</p>
          <Link to="/contact" className="btn-primary">
            Let's talk <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
