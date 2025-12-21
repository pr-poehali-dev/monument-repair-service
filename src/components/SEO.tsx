import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEO({ title, description, keywords, ogImage, canonical }: SEOProps) {
  const fullTitle = `${title} | GK Granite - Памятники в Мариуполе`;
  const defaultImage = 'https://cdn.poehali.dev/files/IMG_8835.jpeg';
  const siteUrl = 'https://gkgranitk.ru';
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:site_name" content="GK Granite" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta name="geo.region" content="UA-14" />
      <meta name="geo.placename" content="Мариуполь" />
      <meta name="geo.position" content="47.097133;37.543367" />
      <meta name="ICBM" content="47.097133, 37.543367" />
    </Helmet>
  );
}