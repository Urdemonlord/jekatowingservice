import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    updateMetaTag('name', 'description', description);

    // Set keywords if provided
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Set Open Graph tags
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
    }

    // Set Twitter tags
    updateMetaTag('property', 'twitter:title', ogTitle || title);
    updateMetaTag('property', 'twitter:description', ogDescription || description);
    if (ogImage) {
      updateMetaTag('property', 'twitter:image', ogImage);
    }

    // Set canonical URL
    const baseUrl = 'https://www.jekatowingservice.com';
    const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;
    updateCanonicalTag(canonicalUrl);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'twitter:url', canonicalUrl);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, location.pathname]);
};

const updateMetaTag = (attribute: string, attributeValue: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const updateCanonicalTag = (url: string) => {
  let canonicalLink = document.querySelector('link[rel="canonical"]');

  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }

  canonicalLink.setAttribute('href', url);
};
