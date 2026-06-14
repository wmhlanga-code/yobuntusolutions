import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Users, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const values = [
  { Icon: Zap, title: 'Practical impact', desc: 'Every project ends with something real and working, not a report on a shelf.', bg: 'var(--primary-lt)', color: 'var(--primary)' },
  { Icon: ShieldCheck, title: 'Ethical technology', desc: 'AI is only valuable if it is implemented responsibly, safely, and with people at the centre.', bg: 'var(--teal-lt)', color: 'var(--teal)' },
  { Icon: Users, title: 'Inclusive growth', desc: 'We work with organisations of all sizes, from community NGOs to growing enterprises.', bg: 'var(--purple-lt)', color: 'var(--purple)' },
  { Icon: Heart, title: 'Ubuntu', desc: 'We grow by helping others grow. Our network is built on genuine collaboration and trust.', bg: 'var(--amber-lt)', color: 'var(--amber)' },
];

export default function About() {
  return (
    <div>
      <SEO
        title="About Us — AI & Business Innovation Consultancy | South Africa"
        description="Founded in Nkomazi, Mpumalanga and serving organisations across South Africa, YoBuntu Solutions delivers practical AI solutions, business strategy, and valuable partner connections."
        path="/about"
      />
      {/* Hero */}
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow">About us</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', maxWidth: 620, marginBottom: '1rem' }}>
            Built to grow organisations that matter
          </h1>
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 600, lineHeight: 1.7 }}>
            YoBuntu Solutions was founded in Nkomazi, Mpumalanga, with a clear mission: to make practical AI and business strategy accessible to organisations that are doing meaningful work — regardless of size, sector, or technical maturity.
          </p>
        </div>
      </section>

      {/* Mission Banner */}
      <div style={{ background: 'var(--primary)', padding: '2.5rem 1.5rem' }}>
        <p style={{
          maxWidth: 820, margin: '0 auto', textAlign: 'center',
          fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
          color: '#fff', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', lineHeight: 1.6,
        }}>
          "To empower organizations with practical AI solutions, expert guidance, and valuable business connections that drive long-term growth and impact."
        </p>
      </div>

      {/* What Makes Us Different */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>What makes us different</h2>
          <div className="grid-2">
            <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <p>We are practitioners, not theorists. We don't arrive with frameworks that sound impressive but don't translate to real change. We work alongside your team to understand what's actually happening in your organisation — then we design and implement solutions that fit.</p>
            </div>
            <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <p>We are rooted in the Ubuntu philosophy: your growth strengthens ours. That's why every engagement includes access to our business network, not just our expertise. We believe organisations grow fastest when they are connected to the right people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>Our values</h2>
          <div className="grid-2">
            {values.map((v, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="icon-sq" style={{ background: v.bg, flexShrink: 0 }}>
                  <v.Icon size={20} color={v.color} aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Want to work with us?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>We'd love to learn about your organisation and how we can help.</p>
          <Link to="/contact" className="btn-primary">
            Get in touch <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
