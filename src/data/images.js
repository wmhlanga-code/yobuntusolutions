// Centralised imagery for the site.
// Photographs are served from the Unsplash CDN (stable photo IDs) with
// on-the-fly sizing. Keeping them in one place makes it easy to swap in
// YoBuntu's own photography later — just replace the URLs below.

const unsplash = (id, w = 1200, h = 0) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

export const images = {
  // Boardroom / partnership — used on the home hero
  heroBoard:      unsplash('1600880292203-757bb62b4baf', 1600, 1000),
  // Diverse team collaborating
  collaboration:  unsplash('1521737604893-d14cc237f11d', 1200, 800),
  // Business handshake / introductions
  handshake:      unsplash('1454165804606-c3d57bc86b40', 1200, 800),
  // Network of professionals meeting
  meeting:        unsplash('1552664730-d307ca884978', 1200, 800),
  // Data / analytics dashboard (AI as a tool)
  analytics:      unsplash('1551288049-bebda4e38f71', 1200, 800),
  // Growth / city skyline (scaling)
  growth:         unsplash('1486406146926-c627a92ad1ab', 1200, 800),
  // African professional at work
  professional:   unsplash('1573497019940-1c28c88b4f3e', 1000, 1100),

  // Divine Project pilot — restaurant & culinary
  restaurant:     unsplash('1517248135467-4c7edcad34c4', 1400, 900),
  plating:        unsplash('1414235077428-338989a2e8c0', 1200, 800),
  kitchen:        unsplash('1556910103-1c02745aae4d', 1200, 800),
};
