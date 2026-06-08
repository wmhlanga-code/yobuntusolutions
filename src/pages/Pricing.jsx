import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown } from 'lucide-react';

const tiers = [
  {
    badge: 'Starter',
    badgeBg: '#F3F4F6', badgeColor: '#374151',
    price: 'Free',
    sub: 'Always free for basic listings',
    features: [
      'Basic directory profile',
      'WhatsApp community access',
      'Verified local badge',
      'Monthly AI meetup invites',
    ],
    cta: 'Get started free',
    ctaLink: '/contact',
    highlight: false,
    borderColor: 'var(--border)',
  },
  {
    badge: 'Growth',
    badgeBg: 'var(--primary-lt)', badgeColor: 'var(--deep)',
    price: 'R50–90',
    sub: 'per month',
    features: [
      'Featured directory placement',
      'AI social media post tool',
      'Market rate insights',
      'Photo gallery (up to 10 images)',
    ],
    cta: 'Start growing',
    ctaLink: '/contact',
    highlight: true,
    borderColor: 'var(--primary)',
    popular: true,
  },
  {
    badge: 'Digital Agency',
    badgeBg: 'var(--purple-lt)', badgeColor: 'var(--purple)',
    price: 'From R800',
    sub: 'once-off or monthly retainer',
    features: [
      'Professional website',
      'Social media setup',
      'Logo & branding',
      'B2B connection service',
    ],
    cta: 'Request a quote',
    ctaLink: '/contact',
    highlight: false,
    borderColor: 'var(--border)',
  },
  {
    badge: 'AI Consulting',
    badgeBg: 'var(--amber-lt)', badgeColor: 'var(--amber)',
    price: 'Custom',
    sub: 'scoped to your organisation',
    features: [
      'Readiness assessment',
      'Staff workshops',
      'Workflow automation',
      'Ongoing support',
    ],
    cta: 'Book a consultation',
    ctaLink: '/contact',
    highlight: false,
    borderColor: 'var(--border)',
  },
];

const faqs = [
  { q: 'Do I need technical knowledge to get started?', a: 'No. We guide you from zero, at your own pace.' },
  { q: 'How long does a website take to build?', a: 'Typically 1–2 weeks for a standard small business site.' },
  { q: 'Can I upgrade my plan later?', a: 'Yes, you can move between plans anytime with no penalty.' },
  { q: 'Are health and trade directory listings really free?', a: 'Yes. Basic listings for all public health facilities and local tradespeople are always free.' },
  { q: 'What areas do you currently serve?', a: 'We are based in Nkomazi and currently serve Mpumalanga. We offer remote consulting nationally.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ textAlign: 'center' }}>Transparent pricing</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '0.75rem' }}>Simple plans for every stage</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto' }}>Start free, grow when you're ready. No hidden fees, no contracts.</p>
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
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>{t.price}</p>
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
