export async function generateMetadata() {
  return {
    title: 'Hetvi Joshi | Software Engineer | Full Stack Developer',
    description: 'Crafting robust and scalable software solutions with precision and innovation.',
    keywords: 'Hetvi Joshi, Software Engineer, Frontend Developer, Backend Developer, Full Stack Developer, Portfolio',
    openGraph: {
      title: 'Hetvi Joshi - Software Engineer',
      description: 'Crafting robust and scalable software solutions with precision and innovation.',
      images: ['/images/my-profile.png'],
    },
    alternates: {
      canonical: 'https://hetvijoshi.com',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'application-name': 'Hetvi Joshi Portfolio',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Hetvi Joshi',
      jobTitle: 'Software Engineer',
      url: 'https://hetvijoshi.com',
      image: '/images/my-profile.png',
      sameAs: [
        'https://linkedin.com/in/hetvi-joshi',
        'https://github.com/hetvijoshi'
      ]
    }
  };
} 