// Schema Markup for SEO Optimization

export const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tvashtainterior.com/#organization",
    "name": "Tvashta Interior",
    "url": "https://tvashtainterior.com",
    "logo": "https://tvashtainterior.com/assets/companyLogo/Logo.png",
    "description": "Premium interior design company specializing in modular kitchens, wardrobes, and complete home interiors",
    "image": "https://tvashtainterior.com/assets/companyLogo/Logo.png",
    "priceRange": "$$",
    "areaServed": {
        "@type": "City",
        "name": "Bangalore, Bengaluru, Karnataka, India"
    },
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka"
    },
    "sameAs": [
        "https://www.youtube.com/@Tvashtainterior",
        "https://www.instagram.com/tvashtainterior",
        "https://www.facebook.com/tvashtainterior"
    ]
});

export const getHomePageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://tvashtainterior.com/#webpage",
    "url": "https://tvashtainterior.com",
    "name": "Tvashta Interior - Best Interior Design Company in Bangalore",
    "description": "Leading interior design company offering modular kitchens, wardrobes, complete home interiors, and office designs",
    "isPartOf": {
        "@id": "https://tvashtainterior.com/#website"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://tvashtainterior.com?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
});

export const getProjectSchema = (project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "creator": {
        "@type": "Organization",
        "name": "Tvashta Interior",
        "url": "https://tvashtainterior.com"
    },
    "datePublished": "2024-01-01",
    "keywords": [project.category, project.location, "interior design"],
    "about": {
        "@type": "Thing",
        "name": project.category
    }
});

export const getServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://tvashtainterior.com/#service",
    "name": "Interior Design Services",
    "provider": {
        "@id": "https://tvashtainterior.com/#organization"
    },
    "areaServed": {
        "@type": "City",
        "name": "Bangalore, Karnataka, India"
    },
    "serviceType": [
        "Modular Kitchen Design",
        "Wardrobe Design",
        "Home Interior Design",
        "Office Interior Design",
        "Residential Interior Design",
        "Commercial Interior Design"
    ]
});

export const getBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
});

export const getFAQSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
});

export const getContactSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "areaServed": ["IN"],
    "availableLanguage": ["en", "kn", "hi"],
    "email": "info@tvashtainterior.com"
});

export const getAggregateRatingSchema = (name, ratingValue, ratingCount) => ({
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "name": name,
    "image": "https://tvashtainterior.com/assets/companyLogo/Logo.png",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ratingValue,
        "ratingCount": ratingCount
    }
});
