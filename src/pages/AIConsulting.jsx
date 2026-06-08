import { Link } from 'react-router-dom';
import { Brain, GraduationCap, ShieldCheck, Settings, MessageSquare, RefreshCw, ArrowRight } from 'lucide-react';

const services = [
  { icon: Brain, title: 'AI Readiness Assessments', desc: 'Understand your starting point and what AI can realistically do for your organisation.', bg: 'var(--primary-lt)', color: 'var(--primary)' },
  { icon: GraduationCap, title: 'Staff Training & Workshops', desc: 'Hands-on sessions for teams — no jargon, practical tools, real results.', bg: 'var(--purple-lt)', color: 'var(--purple)' },
  { icon: ShieldCheck, title: 'Ethical AI Guidance', desc: 'Privacy, misinformation, and data use policies tailored to your local context.', bg: 'var(--amber-lt)', color: 'var(--amber)' },
  { icon: Settings, title: 'Workflow Automation', desc: 'Cut repetitive admin and free your team for work that actually matters.', bg: 'var(--blue-lt)', color: 'var(--blue)' },
  { icon: MessageSquare, title: 'AI Customer Service', desc: 'AI-assisted WhatsApp replies, social media, and customer communication.', bg: 'var(--coral-lt)', color: 'var(--coral)' },
  { icon: RefreshCw, title: 'Ongoing Support', desc: 'Continuous consulting as your organisation and technology evolve together.', bg: 'var(--teal-lt)', color: 'var(--teal)' },
];

const steps = [
  { num: '1', title: 'Assess', desc: 'Free readiness check to understand goals and digital capacity' },
  { num: '2', title: 'Plan', desc: 'Design a practical, ethical AI roadmap for your size and budget' },
  { num: '3', title: 'Implement', desc: 'Set up tools, run workshops, integrate AI into daily workflows' },
  { num: '4', title: 'Sustain', desc: 'Ongoing support as you grow' },
];

const audiences = ['Small businesses', 'NGOs & community orgs', 'Schools & youth programmes', 'Agricultural businesses'];

export default function AIConsulting() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--primary-lt)', borderBottom: '1px solid #9FE1CB' }}>
        <div className="section-wrap">
          <p className="eyebrow">Pillar 01 · AI Consulting</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', maxWidth: 600, marginBottom: '1rem' }}>
            Practical AI, responsibly delivered
          </h1>
          <p style={{ color: 'var(--text-muted)', fontWeight: 300, maxWidth: 540, lineHeight: 1.7 }}>
            We make AI accessible, ethical, and genuinely useful for rural organisations. No hype — just clear guidance, practical tools, and honest advice for your specific context.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>What we offer</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Six areas of AI consulting designed for organisations at any stage.</p>
          <div className="grid-2">
            {services.map((s, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="icon-sq" style={{ background: s.bg, marginTop: '0.1rem' }}>
                  <s.icon size={20} color={s.color} aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>How it works</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>A clear, four-step journey from where you are to where you want to be.</p>
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

      {/* Who We Serve */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Who we serve</h2>
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
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Ready to see what AI can do for you?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>A free readiness assessment takes under 30 minutes.</p>
          <Link to="/contact" className="btn-primary">
            Book a free assessment <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
