import { useState } from 'react';
import { MapPin, Mail, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', org: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%', padding: '0.7rem 1rem',
    border: '1px solid var(--border)', borderRadius: 8,
    fontSize: '0.95rem', fontFamily: 'inherit',
    outline: 'none', transition: 'border-color 0.15s',
  };

  const labelStyle = {
    display: 'block', fontSize: '0.88rem', fontWeight: 500,
    marginBottom: '0.4rem', color: 'var(--text)',
  };

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: '0' };

  return (
    <div>
      <SEO
        title="Contact Us — Book a Free Consultation"
        description="Book a free 30-minute consultation with YoBuntu Solutions. We work with organisations across South Africa on AI consulting, business process optimization, digital transformation, and growth strategy."
        path="/contact"
      />
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ paddingBottom: '2rem' }}>
          <p className="eyebrow">Get in touch</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>Let's start a conversation</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, marginTop: '0.75rem', lineHeight: 1.7 }}>
            Whether you're exploring AI for the first time or ready to transform your operations — we'd love to hear about your organisation.
          </p>
        </div>
      </section>

      <div className="section-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* Form */}
          <div>
            {submitted ? (
              <div style={{
                background: 'var(--primary-lt)', border: '1px solid #9FE1CB',
                borderRadius: 12, padding: '2rem', textAlign: 'center',
              }}>
                <CheckCircle size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} aria-hidden="true" />
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Message sent!</h2>
                <p style={{ color: 'var(--text-muted)' }}>We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={fieldStyle}>
                  <label htmlFor="name" style={labelStyle}>Full name</label>
                  <input id="name" type="text" required value={form.name} onChange={set('name')} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="org" style={labelStyle}>Organisation name <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optional)</span></label>
                  <input id="org" type="text" value={form.org} onChange={set('org')} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="email" style={labelStyle}>Email address</label>
                  <input id="email" type="email" required value={form.email} onChange={set('email')} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp number</label>
                  <input id="phone" type="tel" value={form.phone} onChange={set('phone')} style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="service" style={labelStyle}>Service interested in</label>
                  <select id="service" value={form.service} onChange={set('service')} style={{ ...inputStyle, background: 'var(--bg)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                    <option value="">Select a service…</option>
                    <option value="ai-automation">AI & Automation Consulting</option>
                    <option value="process-optimization">Business Process Optimization</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="data-analytics">Data Analytics & BI</option>
                    <option value="ai-training">AI Training & Ethics</option>
                    <option value="networking">Strategic Networking</option>
                    <option value="growth-innovation">Growth & Innovation Consulting</option>
                    <option value="general">General enquiry</option>
                  </select>
                </div>

                <div style={fieldStyle}>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea id="message" rows={4} value={form.message} onChange={set('message')} style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.85rem' }}>
                  Send message →
                </button>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', textAlign: 'center' }}>
                  We typically reply within 24 hours via WhatsApp or email.
                </p>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <div>
                  <p style={{ fontWeight: 500 }}>Location</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Nkomazi, Mpumalanga, South Africa</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <Mail size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <div>
                  <p style={{ fontWeight: 500 }}>Email</p>
                  <a href="mailto:hello@yobuntu.co.za" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>hello@yobuntu.co.za</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <div>
                  <p style={{ fontWeight: 500 }}>Hours</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Monday–Friday, 08:00–17:00</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/27XXXXXXXXX"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center',
                background: '#25D366', color: '#fff',
                padding: '0.9rem 1.25rem', borderRadius: 10,
                fontSize: '0.95rem', fontWeight: 500,
                transition: 'background 0.15s',
              }}
            >
              <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
            </a>

            <div style={{
              background: '#E5E7EB', borderRadius: 10, height: 200,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-muted)', fontSize: '0.9rem',
            }}>
              Nkomazi, Mpumalanga
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
}
