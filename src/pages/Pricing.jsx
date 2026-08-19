import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

const tiers = [
  {
    badge: 'Discovery Call',
    badgeBg: '#F3F4F6', badgeColor: '#374151',
    price: 'Free',
    sub: 'See what we could build around you',
    features: [
      '30-min growth conversation',
      'Business needs assessment',
      'Early network opportunities',
      'Honest view of the fit',
    ],
    cta: 'Book a free call',
    ctaLink: '/contact',
    highlight: false,
  },
  {
    badge: 'Growth Partnership',
    badgeBg: 'var(--primary-lt)', badgeColor: 'var(--deep)',
    price: 'Custom',
    sub: 'Our core, ongoing partnership',
    features: [
      'A network built around your business',
      'Active introductions & opportunities',
      'AI tools that cut cost and save time',
      'Results measured and reported',
    ],
    cta: 'Become a partner',
    ctaLink: '/contact',
    highlight: true,
    popular: true,
  },
  {
    badge: 'Network Membership',
    badgeBg: 'var(--blue-lt)', badgeColor: 'var(--blue)',
    price: 'Monthly',
    sub: 'Access to the network',
    features: [
      'Membership in the YoBuntu network',
      'Warm introductions on request',
      'Shared opportunities & contracts',
      'Quarterly growth reviews',
    ],
    cta: 'Join the network',
    ctaLink: '/network',
    highlight: false,
  },
  {
    badge: 'Enterprise & NGO',
    badgeBg: 'var(--amber-lt)', badgeColor: 'var(--amber)',
    price: 'Get in touch',
    sub: 'Larger or mission-driven',
    features: [
      'Multi-team engagements',
      'Custom AI & operations support',
      'Ecosystem & partnership building',
      'Impact reporting',
    ],
    cta: 'Start a conversation',
    ctaLink: '/contact',
    highlight: false,
  },
];

const faqs = [
  { q: 'Are you consultants?', a: 'No. Consultants give advice and leave. We become a long-term growth partner — actively building connections and opportunities around your business over years.' },
  { q: 'What exactly do I get?', a: 'A network built around your business — introductions to customers, suppliers, partners, funders, and opportunities — plus AI tools that make you more efficient, with every result measured.' },
  { q: 'How is AI involved?', a: 'AI is one of our tools, not the product. We use automation, analysis, customer support, and forecasting to reduce cost and effort — always in service of your growth.' },
  { q: 'Do you work with NGOs and small businesses?', a: 'Yes. We work with small and growing businesses, NGOs, and NPOs, and can structure partnerships to fit different budgets.' },
  { q: 'Where are you based?', a: 'Nkomazi, Mpumalanga. We partner with businesses locally and remotely across South Africa — and are building toward other countries.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      <SEO
        title="Pricing — Free Consultation to Enterprise Engagements"
        description="Transparent pricing from YoBuntu Solution. Start with a free 30-minute strategy consultation and scale to project engagements, monthly retainers, or large-scale enterprise transformation."
        path="/pricing"
      />
      {/* Hero */}
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ textAlign: 'center' }}>Partnership models</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '0.75rem' }}>Ways to grow with us</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>Start with a free discovery call, then choose the partnership that fits — from network membership to a full growth partnership.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section>
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="pricing-grid">
            {tiers.map((t, i) => (
              <div
                key={i}
                style={{
                  border: `2px solid ${t.highlight ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: 14,
                  padding: '1.75rem 1.25rem',
                  background: 'var(--bg)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'box-shadow 0.15s',
                }}
              >
                {t.popular && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--primary)', color: '#fff',
                    padding: '0.2rem 0.9rem', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}>Most popular</div>
                )}
                <span style={{
                  background: t.badgeBg, color: t.badgeColor,
                  padding: '0.25rem 0.75rem', borderRadius: 20,
                  fontSize: '0.8rem', fontWeight: 600, width: 'fit-content',
                }}>{t.badge}</span>

                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, lineHeight: 1 }}>{t.price}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.25rem' }}>{t.sub}</p>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                  {t.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                      <CheckCircle size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={t.ctaLink}
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '0.65rem', borderRadius: 8,
                    border: `2px solid ${t.highlight ? 'var(--primary)' : 'var(--border)'}`,
                    background: t.highlight ? 'var(--primary)' : 'transparent',
                    color: t.highlight ? '#fff' : 'var(--text)',
                    fontSize: '0.88rem', fontWeight: 500,
                    transition: 'background 0.15s',
                  }}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ maxWidth: 680 }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', background: 'var(--bg)', border: 'none',
                    padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    gap: '0.75rem', textAlign: 'left', fontSize: '0.95rem', fontWeight: 500,
                  }}
                >
                  {f.q}
                  <ChevronDown
                    size={18}
                    color="var(--text-muted)"
                    style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                    aria-hidden="true"
                  />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.25rem 1rem', background: 'var(--bg)', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){.pricing-grid{grid-template-columns:1fr 1fr !important;}}
        @media(max-width:560px){.pricing-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </div>
  );
}
