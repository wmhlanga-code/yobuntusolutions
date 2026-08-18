import { Link } from 'react-router-dom';
import {
  ArrowRight, Utensils, Truck, Users, Megaphone, Cpu,
  Building2, Calendar, TrendingUp, Handshake, Clock, PiggyBank,
  GlassWater, ChefHat, Car, MapPin, ExternalLink,
} from 'lucide-react';
import SEO from '../components/SEO';
import pilotHero from '../assets/divine/pilot-hero.jpg';
import pilotGoal from '../assets/divine/pilot-goal.jpg';

const services = [
  { Icon: Calendar, title: 'Catering & Events', desc: 'Full catering for weddings, corporate functions, and private celebrations, tailored to the occasion.' },
  { Icon: Utensils, title: 'Platters', desc: 'Artfully arranged platters that anchor the spread at any gathering.' },
  { Icon: GlassWater, title: 'Cocktails & Mocktails', desc: 'Handcrafted cocktails and mocktails, mixed to order for every kind of event.' },
  { Icon: ChefHat, title: 'Meals', desc: 'Everyday meals blending South African tradition with modern technique.' },
  { Icon: Car, title: 'Rides & Scholar Transport', desc: 'Local and long-distance rides, plus safe daily transport for scholars.' },
];

const ecosystem = [
  { Icon: Building2, label: 'Corporate catering partnerships' },
  { Icon: Calendar, label: 'Event planners' },
  { Icon: Truck, label: 'Food suppliers' },
  { Icon: Car, label: 'Transport & logistics partners' },
  { Icon: Megaphone, label: 'Marketing collaborations' },
  { Icon: Users, label: 'Social media growth' },
  { Icon: Handshake, label: 'Business-to-business partnerships' },
  { Icon: Cpu, label: 'AI tools that cut costs' },
];

const metrics = [
  { Icon: TrendingUp, label: 'Revenue improvements' },
  { Icon: Handshake, label: 'New partnerships created' },
  { Icon: Cpu, label: 'Operational improvements' },
  { Icon: Users, label: 'Customer growth' },
  { Icon: Clock, label: 'Time saved' },
  { Icon: PiggyBank, label: 'Costs reduced' },
];

const playbook = [
  { num: '1', title: 'Understand the business', desc: 'We learn how it really works — its strengths, constraints, and where growth is stuck.' },
  { num: '2', title: 'Build connections around it', desc: 'We assemble the customers, suppliers, and partners that create an ecosystem of support.' },
  { num: '3', title: 'Improve operations with AI', desc: 'Where it helps, we introduce automation and analysis that reduce costs and effort.' },
  { num: '4', title: 'Measure results', desc: 'We document revenue, partnerships, customers, time, and cost — real numbers, not claims.' },
  { num: '5', title: 'Repeat', desc: 'We take the proven playbook to the next business, then the next, building case studies.' },
];

export default function Pilot() {
  return (
    <div>
      <SEO
        title="Pilot — Divine Projects | Proving the Growth Model"
        description="Divine Projects is YoBuntu Solutions' first pilot: a catering, events, and rides business based in Sidlamafa, Mpumalanga. We are building a full support ecosystem around it and documenting every result to prove the model works."
        path="/pilot"
      />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 460, display: 'flex', alignItems: 'center' }}>
        <img src={pilotHero} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(26,39,84,0.94) 0%, rgba(26,39,84,0.80) 55%, rgba(26,39,84,0.45) 100%)' }} />
        <div className="section-wrap" style={{ position: 'relative', color: '#fff', width: '100%', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
          <p className="chip" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: '1rem' }}>
            <Utensils size={15} aria-hidden="true" /> Our first pilot
          </p>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', maxWidth: 720, marginBottom: '1rem', color: '#fff' }}>
            Divine Projects: proving the model in the real world
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 300, maxWidth: 620, lineHeight: 1.8, fontSize: '1.05rem' }}>
            Rather than convince investors with theory, we're proving the YoBuntu model on a real business. Divine Projects is a catering, events, and rides business based in Sidlamafa, Mpumalanga — and our job is to build an entire support ecosystem around it.
          </p>
          <a
            href="https://divineprojects.site/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.5rem', color: '#fff', fontSize: '0.92rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: '0.15rem' }}
          >
            Visit divineprojects.site <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* The goal */}
      <section>
        <div className="section-wrap">
          <div className="split">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The goal</p>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1rem' }}>Not just more sales — a whole ecosystem</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                The goal isn't only to help Divine Projects sell more meals or book more rides. It's to surround the business with the relationships and tools that make sustained growth possible — the same thing we'd do for any partner.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                As Divine Projects grows, we document everything. Those results become the proof that the YoBuntu model works — the foundation for the next case study, and the one after that.
              </p>
            </div>
            <div className="split-media">
              <img className="media" src={pilotGoal} alt="A Divine Projects catering platter" style={{ height: 360 }} />
            </div>
          </div>
        </div>
      </section>

      {/* What they do today */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>The business today</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>What Divine Projects does</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 600 }}>
            Already a multi-line business — catering and events, platters, cocktails, everyday meals, and Divine Rides for local and scholar transport.
          </p>
          <div className="grid-3">
            {services.map((s, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="icon-sq" style={{ background: 'var(--primary-lt)' }}>
                  <s.Icon size={20} color="var(--primary)" aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '1.02rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', background: 'var(--bg-secondary)' }}>
              <div className="icon-sq" style={{ background: 'var(--coral-lt)' }}>
                <MapPin size={20} color="var(--coral)" aria-hidden="true" />
              </div>
              <h3 style={{ fontSize: '1.02rem' }}>Based in Mpumalanga</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Sidlamafa, Nkomazi — the same region YoBuntu Solutions calls home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem we're building */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>The ecosystem we're building</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '2.5rem' }}>Connections that turn a local business into a growing one</h2>
          <div className="grid-4">
            {ecosystem.map((e, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'var(--bg)', padding: '1.1rem 1.25rem' }}>
                <div className="icon-sq" style={{ background: 'var(--amber-lt)', width: 40, height: 40 }}>
                  <e.Icon size={18} color="var(--amber)" aria-hidden="true" />
                </div>
                <span style={{ fontWeight: 500, fontSize: '0.92rem' }}>{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we measure */}
      <section>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>What we measure</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>Results, documented</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 600 }}>Every improvement is tracked so the impact of the model is proven, not promised.</p>
          <div className="grid-3">
            {metrics.map((m, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="icon-sq" style={{ background: 'var(--primary-lt)' }}>
                  <m.Icon size={20} color="var(--primary)" aria-hidden="true" />
                </div>
                <span style={{ fontWeight: 500 }}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The playbook */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>How the model scales</p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>The businesses change. The playbook stays the same.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: 620 }}>
            We start in South Africa, prove the model works consistently, then expand into other countries — repeating the same five steps.
          </p>
          <div style={{ position: 'relative', maxWidth: 620 }}>
            <div style={{ position: 'absolute', left: 19, top: 40, bottom: 40, width: 2, background: 'var(--border)' }} />
            {playbook.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: i < playbook.length - 1 ? '1.75rem' : 0, alignItems: 'flex-start', position: 'relative' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem',
                  flexShrink: 0, zIndex: 1,
                }}>{s.num}</div>
                <div style={{ paddingTop: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--primary-lt)', borderTop: '1px solid #9FE1CB' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '0.75rem' }}>Want to be the next case study?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', maxWidth: 520, margin: '0 auto 1.75rem' }}>
            We're selecting the businesses we partner with next. If you're ready to grow with a network behind you, let's talk.
          </p>
          <Link to="/contact" className="btn-primary">
            Apply to partner with us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
