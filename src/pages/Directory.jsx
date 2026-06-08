import { useState } from 'react';
import { Search, AlertTriangle, Star, CheckCircle, Phone, MessageCircle, TrendingUp, Minus } from 'lucide-react';
import { tradespeople, healthListings } from '../data/listings';

const categories = ['All', 'Beauty & Hair', 'Plumbing', 'Electrical', 'Mechanical', 'Health & Medical', 'Agriculture', 'NGOs'];

const colorMap = {
  green: { bg: 'var(--primary-lt)', color: 'var(--primary)' },
  purple: { bg: 'var(--purple-lt)', color: 'var(--purple)' },
  amber: { bg: 'var(--amber-lt)', color: 'var(--amber)' },
  blue: { bg: 'var(--blue-lt)', color: 'var(--blue)' },
  coral: { bg: 'var(--coral-lt)', color: 'var(--coral)' },
};

const marketRates = [
  { icon: '✂️', label: "Men's fade haircut", range: 'R70–R100', trend: '+12%', up: true },
  { icon: '💧', label: 'Plumbing (per hour)', range: 'R250–R350', trend: 'Stable', up: null },
  { icon: '🌿', label: 'Dreadlock maintenance', range: 'R150–R220', trend: '+40%', up: true },
  { icon: '🚗', label: 'Basic vehicle service', range: 'R450–R650', trend: '+8%', up: true },
];

export default function Directory() {
  const [activeTab, setActiveTab] = useState('All');
  const [query, setQuery] = useState('');

  return (
    <div>
      {/* Search */}
      <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
          <p className="eyebrow">Pillar 02 · Local Directory</p>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', marginBottom: '1.5rem' }}>Find trusted local services</h1>
          <div style={{ display: 'flex', gap: '0.75rem', maxWidth: 600 }}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search name, trade, or service (e.g. 'dentist' or 'plumber')"
              style={{
                flex: 1, padding: '0.75rem 1rem', border: '1px solid var(--border)',
                borderRadius: 8, fontSize: '0.95rem', outline: 'none',
                fontFamily: 'inherit',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button className="btn-primary" style={{ flexShrink: 0 }}>
              <Search size={16} aria-hidden="true" /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div style={{ borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0.75rem 1.5rem', display: 'flex', gap: '0.5rem', width: 'max-content', minWidth: '100%' }}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveTab(c)}
              style={{
                padding: '0.4rem 1rem', borderRadius: 20, border: '1px solid',
                borderColor: activeTab === c ? 'var(--primary)' : 'var(--border)',
                background: activeTab === c ? 'var(--primary)' : 'var(--bg)',
                color: activeTab === c ? '#fff' : 'var(--text)',
                fontSize: '0.88rem', fontWeight: 500, whiteSpace: 'nowrap',
                transition: 'all 0.12s',
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Banner */}
      <div style={{ maxWidth: 1100, margin: '1.5rem auto', padding: '0 1.5rem' }}>
        <div style={{
          background: '#FCEBEB', border: '1px solid #F7C1C1', borderRadius: 10,
          padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
        }}>
          <AlertTriangle size={20} color="#B91C1C" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
          <p style={{ color: '#7F1D1D', fontSize: '0.9rem', lineHeight: 1.5 }}>
            <strong>Medical emergency?</strong> Call <strong>10177</strong> (ambulance) or <strong>112</strong> from any mobile.
            Listings below are for non-emergency appointments only.
          </p>
        </div>
      </div>

      {/* Two-Column Directory */}
      <div className="section-wrap" style={{ paddingTop: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="dir-grid">
          {/* Tradespeople */}
          <div>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Tradespeople</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tradespeople.map((p, i) => {
                const c = colorMap[p.color] || colorMap.green;
                return (
                  <div key={i} className="card">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: c.bg, color: c.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: '0.9rem', flexShrink: 0,
                      }}>{p.initials}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                          <div>
                            <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{p.name}</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>{p.trade} · {p.location}</p>
                          </div>
                          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                            {p.verified && (
                              <span style={{ background: 'var(--primary-lt)', color: 'var(--deep)', padding: '0.2rem 0.6rem', borderRadius: 20, fontSize: '0.75rem', fontWeight: 500 }}>
                                ✓ Verified Local
                              </span>
                            )}
                            {p.featured && (
                              <span style={{ background: 'var(--purple-lt)', color: 'var(--purple)', padding: '0.2rem 0.6rem', borderRadius: 20, fontSize: '0.75rem', fontWeight: 500 }}>
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={14} color="#F59E0B" fill="#F59E0B" aria-hidden="true" />
                            <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{p.rating}</span>
                          </div>
                          <a
                            href="https://wa.me/27XXXXXXXXX"
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                              background: '#25D366', color: '#fff',
                              padding: '0.4rem 0.9rem', borderRadius: 6, fontSize: '0.83rem', fontWeight: 500,
                            }}
                          >
                            <MessageCircle size={14} aria-hidden="true" /> WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Doctors & Clinics */}
          <div>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Doctors & Clinics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {healthListings.map((h, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: 'var(--blue-lt)', color: 'var(--blue)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.85rem', flexShrink: 0,
                    }}>{h.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                        <div>
                          <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{h.name}</p>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem' }}>{h.type} · {h.location}</p>
                        </div>
                        <span style={{ background: 'var(--blue-lt)', color: 'var(--blue)', padding: '0.2rem 0.6rem', borderRadius: 20, fontSize: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
                          {h.badge}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: h.isOpen ? '#22C55E' : '#EF4444' }} />
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{h.isOpen ? 'Open' : 'Closed'} · {h.hours}</span>
                      </div>
                      <ul style={{ margin: '0 0 0.75rem 1rem', padding: 0, fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                        {h.services.map(s => (
                          <li key={s} style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                            <CheckCircle size={12} color="var(--primary)" aria-hidden="true" /> {s}
                          </li>
                        ))}
                      </ul>
                      {h.contact === 'call' ? (
                        <a href="tel:10177" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'var(--blue-lt)', color: 'var(--blue)', padding: '0.4rem 0.9rem', borderRadius: 6, fontSize: '0.83rem', fontWeight: 500 }}>
                          <Phone size={14} aria-hidden="true" /> Call
                        </a>
                      ) : (
                        <a href="https://wa.me/27XXXXXXXXX" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#25D366', color: '#fff', padding: '0.4rem 0.9rem', borderRadius: 6, fontSize: '0.83rem', fontWeight: 500 }}>
                          <MessageCircle size={14} aria-hidden="true" /> WhatsApp Book
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Market Rates */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Local market rates</h2>
          <div className="grid-4">
            {marketRates.map((r, i) => (
              <div key={i} className="card">
                <p style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{r.icon}</p>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{r.label}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{r.range}</p>
                <div style={{ background: 'var(--border)', borderRadius: 4, height: 4, marginBottom: '0.5rem' }}>
                  <div style={{ background: 'var(--primary)', height: 4, borderRadius: 4, width: '65%' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  {r.up === true && <TrendingUp size={13} color="var(--primary)" aria-hidden="true" />}
                  {r.up === null && <Minus size={13} color="var(--text-muted)" aria-hidden="true" />}
                  <span style={{ fontSize: '0.8rem', color: r.up ? 'var(--primary)' : 'var(--text-muted)' }}>{r.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Verification */}
      <section>
        <div className="section-wrap">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Healthcare listing standards</h2>
          <div className="grid-2">
            {[
              { title: 'Verification standard', body: 'All health listings are verified against HPCSA and DOH records before publication.' },
              { title: 'What\'s listed', body: 'Public clinics, registered GPs, specialists, and hospital outpatient departments.' },
              { title: 'Opening hours', body: 'Hours are confirmed directly with facilities and updated quarterly.' },
              { title: 'What we don\'t list', body: 'Unregistered practitioners, informal medicine sellers, or unverified clinics.' },
            ].map((v, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Healers Notice */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem 2rem' }}>
        <div style={{ background: 'var(--amber-lt)', border: '1px solid #DEB37A', borderRadius: 10, padding: '1.1rem 1.5rem' }}>
          <p style={{ color: 'var(--amber)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            <strong>Traditional medicine:</strong> YoBuntu recognises the cultural importance of traditional medicine. A separate, clearly labelled section for registered traditional health practitioners (as per the Traditional Health Practitioners Act) is available — kept distinct from biomedical listings.
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <section style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Is your clinic or practice missing? Listing is free for all public health facilities.</p>
          <a href="/contact" className="btn-primary">Add a health listing →</a>
        </div>
      </section>

      <style>{`@media(max-width:768px){.dir-grid{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
}
