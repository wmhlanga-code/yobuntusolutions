// Centralised imagery for the site.
// Photographs are served from the Unsplash CDN (stable photo IDs) with
// on-the-fly sizing. Keeping them in one place makes it easy to swap in
// YoBuntu's own photography later — just replace the URLs below.

const unsplash = (id, w = 1200, h = 0) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

// NOTE: these are all people-free (empty rooms, hands-on-laptop shots, skylines) —
// deliberately chosen so no stranger's face is used to represent YoBuntu's team or
// clients. Swap in real YoBuntu photography here once it's available.
export const images = {
  // Hands collaborating on a laptop
  collaboration:  unsplash('1516321318423-f06f85e504b3', 1200, 800),
  // Business handshake / introductions (hands only)
  handshake:      unsplash('1454165804606-c3d57bc86b40', 1200, 800),
  // Glass-walled office meeting rooms
  meeting:        unsplash('1497366754035-f200968a6e72', 1200, 800),
  // Data / analytics dashboard (AI as a tool)
  analytics:      unsplash('1551288049-bebda4e38f71', 1200, 800),
  // Growth / city skyline (scaling)
  growth:         unsplash('1486406146926-c627a92ad1ab', 1200, 800),
  // Overhead shot of hands at work on a laptop
  professional:   unsplash('1520607162513-77705c0f0d4a', 1200, 800),
};
