export const tradespeople = [
  { initials: 'NM', name: 'Nomsa Mahlalela', trade: 'Hair & beauty', location: 'Schoemansdal', rating: 4.9, verified: true, featured: true, color: 'green' },
  { initials: 'TN', name: 'Thabo Nkosi', trade: 'Plumbing & pipe fitting', location: 'Malelane area', rating: 4.6, verified: true, featured: false, color: 'purple' },
  { initials: 'BS', name: 'Bongani Sithole', trade: 'Auto mechanics', location: 'Komatipoort', rating: 5.0, verified: true, featured: false, color: 'amber' },
  { initials: 'LK', name: 'Lindiwe Khoza', trade: 'Barber & grooming', location: 'Nkomazi central', rating: 4.7, verified: true, featured: true, color: 'blue' },
];

export const healthListings = [
  {
    initials: 'NK',
    name: 'Nkomazi Community Clinic',
    type: 'Primary healthcare',
    location: 'Schoemansdal',
    badge: 'DOH facility',
    isOpen: true,
    hours: 'Mon–Fri 07:30–16:00 · Sat 08:00–12:00',
    services: ['General consultations', 'Maternal & child health', 'ARV & TB treatment'],
    contact: 'call',
  },
  {
    initials: 'DR',
    name: 'Dr. Rejoice Mthembu',
    type: 'General practitioner',
    location: 'Malelane',
    badge: 'HPCSA registered',
    isOpen: true,
    hours: 'Mon–Fri 08:00–17:00',
    services: ['Walk-ins & appointments', 'Script renewals'],
    contact: 'whatsapp',
  },
  {
    initials: 'KP',
    name: 'Komatipoort Hospital',
    type: 'District hospital',
    location: 'Komatipoort',
    badge: 'DOH facility',
    isOpen: true,
    hours: '24 hours',
    services: ['Emergency / casualty', 'Outpatient departments', 'Maternity ward'],
    contact: 'call',
  },
];
