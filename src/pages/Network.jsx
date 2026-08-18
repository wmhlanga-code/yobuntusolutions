import { Link } from 'react-router-dom';
import {
  ArrowRight, Network as NetworkIcon, Share2, Users, Handshake,
  Truck, Landmark, Building2, Compass, Cpu,
} from 'lucide-react';
import { images } from '../data/images';
import SEO from '../components/SEO';

const offerings = [
  {
    Icon: Handshake,
    title: 'Warm introductions',
    desc: 'We personally introduce your business to compatible organisations — buyers to suppliers, businesses to partners, founders to investors — with context on both sides.',
    bg: 'var(--primary-lt)', color: 'var(--primary)',
  },
  {
    Icon: Share2,
    title: 'Shared opportunities',
    desc: 'Members hear about contracts, tenders, and partnership opportunities inside the network — often before they ever reach the open market.',
    bg: 'var(--purple-lt)', color: 'var(--purple)',
  },
  {
    Icon: Users,
    title: 'Collaborative growth',
    desc: 'We pair complementary businesses on joint proposals, bids, and projects that neither could win or deliver alone — creating value for everyone involved.',
    bg: 'var(--amber-lt)', color: 'var(--amber)',
  },
];

const partnerCategories = [
  { Icon: Users, label: 'New customers', desc: 'Demand for what you already do well' },
  { Icon: Truck, label: 'Suppliers', desc: 'Better inputs, better terms' },
  { Icon: Handshake, label: 'Strategic partners', desc: 'Businesses that create mutual value' },
  { Icon: Landmark, label: 'Investors', desc: 'Growth capital, where appropriate' },
  { Icon: Building2, label: 'NGOs & NPOs', desc: 'Mission-aligned collaborations' },
  { Icon: Compass, label: 'Government', desc: 'Procurement and programme opportunities' },
  { Icon: Cpu, label: 'Technology partners', desc: 'Tools and platforms that fit' },
  { Icon: NetworkIcon, label: 'Other businesses', desc: 'The wider network, working for you' },
];

const connections = [
  { emoji: '🍽️', left: 'Restaurant', right: 'Corporate client signing a monthly catering contract' },
  { emoji: '🏭', left: 'Manufacturing SME', right: 'Logistics partner cutting delivery costs by 30%' },
  { emoji: '🌱', left: 'Agri-business', right: 'Retail buyer securing a year-round supply agreement' },
  { emoji: '🏥', left: 'Health NGO', right: 'Government procurement partner for medical supply contracts' },
];

const joinSteps = [
  { num: '1', title: 'Partner with YoBuntu', desc: 'We get to know your business — what you offer, where you want to grow, and what\'s holding you back.' },
  { num: '2', title: 'We map your network', desc: 'We identify the customers, suppliers, partners, and opportunities that would move your business forward.' },
  { num: '3', title: 'We make the connections', desc: 'We actively introduce, facilitate, and follow through — then keep doing it as your growth partner.' },
];

export default function Network() {
  return (
    <div>
      <SEO
        title="The Network — Connections, Partnerships & the Network Effect"
        description="YoBuntu Solutions is building the largest trusted business network. We connect businesses to customers, suppliers, partners, investors, NGOs, and government opportunities — and every business we add strengthens the network for everyone else."
        path="/network"
      />

      {/* Hero */}
      <section style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB' }}>
        <div className="section-wrap">
          <div className="split">
            <div>
              <p className="eyebrow">The network</p>
              <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', maxWidth: 620, marginBottom: '1rem' }}>
                We're building the largest trusted business network
              </h1>
              <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 560, lineHeight: 1.8 }}>
                The network is the product. When you partner with YoBuntu, we build a web of relationships around your business — and connect you into a growing community of businesses, suppliers, funders, NGOs, and partners who can help you grow.
              </p>
            </div>
            <div className="split-media">
              <img className="media" src={images.meeting} alt="Glass-walled office meeting rooms" style={{ height: 320 }} />
            </div>
          </div>
        </div>
      </section>

      {/* What the Network Offers */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>What you get</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '2.5rem' }}>More than a contact list — an active growth engine</h2>
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

      {/* Who we connect you to */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Who we connect you to</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '2.5rem' }}>Every kind of relationship a business needs</h2>
          <div className="grid-4">
            {partnerCategories.map((p, i) => (
              <div key={i} className="card" style={{ background: 'var(--bg)' }}>
                <div className="icon-sq" style={{ background: 'var(--primary-lt)', marginBottom: '0.85rem' }}>
                  <p.Icon size={20} color="var(--primary)" aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{p.label}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The network effect */}
      <section className="section-dark">
        <div className="section-wrap">
          <div className="split">
            <div className="split-media">
              <img className="media" src={images.handshake} alt="Two business partners shaking hands on a deal" style={{ height: 340 }} />
            </div>
            <div>
              <p className="eyebrow">The network effect</p>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1rem' }}>Every business that joins makes the network more valuable</h2>
              <p style={{ color: 'rgba(224,247,251,0.85)', lineHeight: 1.8, marginBottom: '1rem' }}>
                A directory gets more crowded as it grows. A network gets more valuable. Each new business adds new customers, suppliers, and opportunities that every other member can tap into.
              </p>
              <p style={{ color: 'rgba(224,247,251,0.85)', lineHeight: 1.8 }}>
                That compounding value is what turns a group of businesses into an ecosystem — and it's why joining early matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Examples */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>Connections in action</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>The kinds of introductions we make</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Illustrative examples of the matches a growth partner should be creating.</p>
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
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>How it works</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>Joining the network</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Three steps to put a growing network of businesses and partners to work for you.</p>
          <div className="grid-3">
            {joinSteps.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                }}>{s.num}</div>
                <h3 style={{ fontSize: '1.05rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.75rem' }}>Ready to grow inside the network?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', maxWidth: 520, margin: '0 auto 1.75rem' }}>
            Start a conversation and we'll show you the connections and opportunities we could build around your business.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a conversation <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
