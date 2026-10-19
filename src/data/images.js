// Centralised imagery for the site.
// Photographs are served from the Unsplash CDN (stable photo IDs) with
// on-the-fly sizing. Keeping them in one place makes it easy to swap in
// YoBuntu's own photography later — just replace the URLs below.

const unsplash = (id, w = 1200, h = 0) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

// NOTE: South African imagery, kept free of identifiable faces so no stranger
// stands in for YoBuntu's team or clients. Swap in real YoBuntu photography
// here once it's available.
export const images = {
  // Small shopfront in Parys, Free State
  smallBusiness:  unsplash('1786483462952-de7e869aa285', 1200, 800),
  // Johannesburg CBD skyline at golden hour
  skyline:        unsplash('1636706519609-988babca3dd5', 1200, 800),
  // Hands typing on a laptop
  laptop:         unsplash('1521790361543-f645cf042ec4', 1200, 800),
  // Aerial view of Sandton, Johannesburg
  sandton:        unsplash('1637459297112-c7479b1beb26', 1200, 800),
  // Fresh produce market stalls
  market:         unsplash('1630960411440-10f7b59717ba', 1200, 800),
};
