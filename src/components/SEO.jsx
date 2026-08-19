import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'YoBuntu Solution';
const SITE_URL = 'https://yobuntusolutions.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | AI & Business Growth Consulting · South Africa`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp previews) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
