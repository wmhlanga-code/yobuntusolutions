import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Network, Repeat, Heart, Quote } from 'lucide-react';
import { images } from '../data/images';
import SEO from '../components/SEO';

const values = [
  { Icon: HeartHandshake, title: 'We stay', desc: 'We don\'t deliver advice and disappear. We\'re a long-term growth partner, invested in results that show up over years.', bg: 'var(--primary-lt)', color: 'var(--primary)' },
  { Icon: Network, title: 'We connect', desc: 'Growth comes from relationships. We build a network of customers, suppliers, partners, and opportunities around every business.', bg: 'var(--blue-lt)', color: 'var(--blue)' },
  { Icon: Repeat, title: 'We measure', desc: 'Revenue, partnerships, customers, time, and cost — we document real results, then repeat what works with the next business.', bg: 'var(--amber-lt)', color: 'var(--amber)' },
  { Icon: Heart, title: 'Ubuntu', desc: '“I am because we are.” Every business we add strengthens the network for every other business. We grow by helping others grow.', bg: 'var(--teal-lt)', color: 'var(--teal)' },
];

export default function About() {
  return (
    <div>
      <SEO
        title="About Us — A Business Growth & Network Company"
        description="YoBuntu Solutions is a South African business growth and network company. We believe most businesses fail from a lack of connections, not bad products — so we become a long-term growth partner and build a network around every business."
        path="/about"
      />

      {/* Hero */}
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <div className="split">
            <div>
              <p className="eyebrow">About us</p>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', maxWidth: 620, marginBottom: '1rem' }}>
                A business growth &amp; network company
              </h1>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 600, lineHeight: 1.8 }}>
                YoBuntu Solutions helps businesses grow by connecting them to the people, technology, and opportunities they need to succeed. AI is one of the tools we use — but the real business is the network, and the long-term partnership behind it.
              </p>
            </div>
            <div className="split-media">
              <img className="media" src={images.professional} alt="A business professional at work" style={{ height: 340 }} />
            </div>
          </div>
        </div>
      </section>

      {/* The problem we solve */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>The problem we solve</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '2.5rem', maxWidth: 720 }}>
            Most businesses don't fail because of bad products
          </h2>
          <div className="grid-2">
            <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              <p>They fail because they don't have the right connections, resources, or support system. A great product with no path to customers, suppliers, or partners stalls — not because it isn't good, but because it's alone.</p>
            </div>
            <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              <p>So instead of offering consulting advice and leaving, we partner with each business and actively build a network around it — connecting it to customers, suppliers, strategic partners, investors, NGOs, government opportunities, and technology partners. AI then makes those businesses more efficient, always in service of the bigger mission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <div style={{ background: 'var(--primary)', padding: '2.75rem 1.5rem' }}>
        <p style={{
          maxWidth: 860, margin: '0 auto', textAlign: 'center',
          fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
          color: '#fff', fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)', lineHeight: 1.6,
        }}>
          &ldquo;We're building the infrastructure that helps businesses grow by connecting them to the people, technology, and opportunities they need to succeed.&rdquo;
        </p>
      </div>

      {/* Long-term vision */}
      <section className="section-dark">
        <div className="section-wrap">
          <div className="split">
            <div className="split-media">
              <img className="media" src={images.growth} alt="City skyline representing a growing ecosystem of businesses" style={{ height: 340 }} />
            </div>
            <div>
              <p className="eyebrow">The long-term vision</p>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1rem' }}>Not the biggest consultancy — the largest trusted network</h2>
              <p style={{ color: 'rgba(234,250,244,0.85)', lineHeight: 1.8, marginBottom: '1rem' }}>
                We're building an ecosystem where every business that joins increases the value of the network for everyone else. As it grows, businesses discover opportunities they never would have found on their own.
              </p>
              <p style={{ color: 'rgba(234,250,244,0.85)', lineHeight: 1.8 }}>
                We start in South Africa, prove the model consistently helps businesses grow, and then expand into other countries. The businesses change; the playbook stays the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>What we stand for</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '2.5rem' }}>Our values</h2>
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

      {/* Investor story */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ maxWidth: 820 }}>
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>For investors &amp; partners</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '1.5rem' }}>The story in one sentence</h2>
          <div className="card" style={{ background: 'var(--bg)', padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <Quote size={32} color="var(--primary)" style={{ flexShrink: 0 }} aria-hidden="true" />
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', lineHeight: 1.6, fontStyle: 'italic' }}>
              &ldquo;YoBuntu Solutions is building the infrastructure that helps businesses grow by connecting them to the people, technology, and opportunities they need to succeed. Every business we add strengthens the network for every other business, creating long-term value that scales across industries and countries.&rdquo;
            </p>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Many companies sell AI tools. Far fewer are trying to become the trusted platform that connects businesses across industries and creates lasting economic value. Our biggest strength isn't the AI — it's the network vision, and the network effect that comes with it. As we demonstrate that the network consistently helps businesses grow, that becomes a compelling story for the people who back platforms.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.75rem' }}>Want to grow with us?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>Whether you're a business, a partner, or an investor — we'd love to talk.</p>
          <Link to="/contact" className="btn-primary">
            Get in touch <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
