import { Link } from 'react-router-dom';
import { ArrowRight, Network as NetworkIcon, Share2, Users } from 'lucide-react';
import SEO from '../components/SEO';

const offerings = [
  {
    Icon: NetworkIcon,
    title: 'Business introductions',
    desc: 'We make warm introductions between compatible organisations — suppliers to buyers, contractors to clients, NGOs to funders.',
    bg: 'var(--primary-lt)', color: 'var(--primary)',
  },
  {
    Icon: Share2,
    title: 'Shared opportunities',
    desc: 'Members share tenders, contracts, and partnership opportunities within the network before they go public.',
    bg: 'var(--purple-lt)', color: 'var(--purple)',
  },
  {
    Icon: Users,
    title: 'Collaborative growth',
    desc: 'Partner with complementary businesses on joint proposals, projects, and bids that neither could win alone.',
    bg: 'var(--amber-lt)', color: 'var(--amber)',
  },
];

const connections = [
  { emoji: '🏭', left: 'Manufacturing SME', right: 'Logistics partner, cutting delivery costs by 30%' },
  { emoji: '🏘️', left: 'Rural NGO', right: 'Corporate CSI funder aligned with their community mission' },
  { emoji: '🌱', left: 'Agri-business', right: 'Data analytics partner to optimise crop yield forecasting' },
  { emoji: '🏥', left: 'Health NGO', right: 'Government procurement partner for medical supply contracts' },
];

const joinSteps = [
  { num: '1', title: 'Become a YoBuntu client', desc: 'Any service engagement gets you access to the network' },
  { num: '2', title: 'Complete a partner profile', desc: 'We capture what you offer and what you need' },
  { num: '3', title: 'Get introduced', desc: 'We connect you to relevant organisations in our network' },
];

const partnerTypes = [
  'Technology providers', 'Funders & investors', 'NGOs', 'SMEs',
  'Government entities', 'Agricultural businesses', 'Health organisations', 'Educational institutions',
];

export default function Network() {
  return (
    <div>
      <SEO
        title="Business Network — Connections, Partnerships & Collaborations"
        description="Join YoBuntu Solutions' curated business network. We connect businesses, NGOs, funders, and partners across South Africa — facilitating introductions, shared opportunities, and collaborative growth."
        path="/network"
      />
      {/* Hero */}
      <section style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB' }}>
        <div className="section-wrap">
          <p className="eyebrow">Our network</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', maxWidth: 620, marginBottom: '1rem' }}>
            A trusted network built for collaboration and growth
          </h1>
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 580, lineHeight: 1.7 }}>
            Beyond consulting, YoBuntu Solutions is building a curated network of businesses, NGOs, funders, and service providers who can collaborate, share opportunities, and support each other's growth. Every YoBuntu client becomes part of this network.
          </p>
        </div>
      </section>

      {/* What the Network Offers */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>What the network offers</h2>
          <div className="grid-3">
            {offerings.map((o, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="icon-sq" style={{ background: o.bg }}>
                  <o.Icon size={22} color={o.color} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '1.1rem' }}>{o.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Examples */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Network connections in action</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Real introductions between organisations that needed each other.</p>
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

      {/* How to Join */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>How to join the network</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Three steps to access a curated network of businesses and partners.</p>
          <div className="grid-3">
            {joinSteps.map((s, i) => (
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

      {/* Partner Types */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Partner types we connect</h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {partnerTypes.map(t => (
              <span key={t} style={{
                background: 'var(--primary-lt)', color: 'var(--deep)',
                padding: '0.5rem 1.1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Ready to expand your network?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>Start a conversation and find out which organisations in our network are right for you.</p>
          <Link to="/contact" className="btn-primary">
            Start a conversation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
