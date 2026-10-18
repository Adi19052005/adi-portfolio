import './styles.scss';

const description = 'Aditya Solunke is a NAPS Trainee Backend Developer at JAPFA Comfeed India, exploring backend systems, cloud infrastructure, DevOps, and technical education.';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Aditya Solunke — Engineer, systems thinker, educator',
  description,
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL), alternates: { canonical: '/' } }
    : {}),
  openGraph: {
    title: 'Aditya Solunke', description, siteName: 'Aditya Solunke', type: 'website',
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { images: [{ url: '/images/aditya-at-the-bar.jpeg', alt: 'Aditya seated at a café' }] } : {}),
  },
  twitter: {
    card: process.env.NEXT_PUBLIC_SITE_URL ? 'summary_large_image' : 'summary',
    title: 'Aditya Solunke', description,
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { images: ['/images/aditya-at-the-bar.jpeg'] } : {}),
  },
  robots: { index: true, follow: true },
};

const person = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Aditya Solunke',
  description,
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { url: process.env.NEXT_PUBLIC_SITE_URL } : {}),
  sameAs: ['https://github.com/Adi19052005', 'https://www.linkedin.com/in/aditya-solunke/', 'https://www.instagram.com/dontjustlearn.dev/'],
  knowsAbout: ['Software engineering', 'Backend development', 'Distributed systems', 'Cloud infrastructure', 'Technical education']
};

/** @param {{children: import('react').ReactNode}} props */
export default function RootLayout({ children }) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} /></body></html>;
}
