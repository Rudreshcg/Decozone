import { useEffect } from 'react';

const SEOHead = ({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType = "website",
    structuredData
}) => {
    const defaultTitle = "Tvashta Interior - Leading Interior Design Company";
    const defaultDescription = "Tvashta Interior is a premier interior design company specializing in modular kitchens, wardrobes, and complete home interiors.";
    const defaultKeywords = "interior design, modular kitchen, wardrobes, home renovation, interior decorators, Bangalore interiors, Tvashta Interior";
    const defaultOgImage = ""; // TODO: Add default OG image
    const siteUrl = "https://tvashtainterior.com"; // Standardized production URL

    const finalTitle = title ? `${title} | Tvashta Interior` : defaultTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;
    const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const finalOgImage = ogImage || defaultOgImage;

    useEffect(() => {
        // Update document title
        document.title = finalTitle;

        // Helper function to update or create meta tags
        const updateMetaTag = (name, content, property = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let metaTag = document.querySelector(selector);

            if (!metaTag) {
                metaTag = document.createElement('meta');
                if (property) {
                    metaTag.setAttribute('property', name);
                } else {
                    metaTag.setAttribute('name', name);
                }
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
        };

        // Helper function to update or create link tags
        const updateLinkTag = (rel, href) => {
            let linkTag = document.querySelector(`link[rel="${rel}"]`);
            if (!linkTag) {
                linkTag = document.createElement('link');
                linkTag.setAttribute('rel', rel);
                document.head.appendChild(linkTag);
            }
            linkTag.setAttribute('href', href);
        };

        // Update meta tags
        updateMetaTag('title', finalTitle);
        updateMetaTag('description', finalDescription);
        updateMetaTag('keywords', finalKeywords);
        updateMetaTag('robots', 'index, follow');
        updateMetaTag('author', "Tvashta Interior");
        updateMetaTag('language', 'English');
        updateMetaTag('revisit-after', '7 days');

        // Open Graph tags
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:url', finalCanonical, true);
        updateMetaTag('og:title', finalTitle, true);
        updateMetaTag('og:description', finalDescription, true);
        updateMetaTag('og:image', finalOgImage, true);
        updateMetaTag('og:site_name', "Tvashta Interior", true);
        updateMetaTag('og:locale', 'en_IN', true);

        // Twitter tags
        updateMetaTag('twitter:card', 'summary_large_image', true);
        updateMetaTag('twitter:url', finalCanonical, true);
        updateMetaTag('twitter:title', finalTitle, true);
        updateMetaTag('twitter:description', finalDescription, true);
        updateMetaTag('twitter:image', finalOgImage, true);

        // Update canonical URL
        updateLinkTag('canonical', finalCanonical);

        // Add structured data
        if (structuredData) {
            // Remove existing structured data script
            const existingScript = document.querySelector('script[type="application/ld+json"]');
            if (existingScript) {
                existingScript.remove();
            }

            // Add new structured data script
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
        }

        // Cleanup function
        return () => {
            // Clean up structured data script on unmount
            const script = document.querySelector('script[type="application/ld+json"]');
            if (script) {
                script.remove();
            }
        };
    }, [finalTitle, finalDescription, finalKeywords, finalCanonical, finalOgImage, ogType, structuredData]);

    // This component doesn't render anything visible
    return null;
};

export default SEOHead;
