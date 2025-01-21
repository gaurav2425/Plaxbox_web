// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      {/* General Meta Tags */}
      <title>Tattle Café - Find Your Perfect Match Today</title>
      <meta
        name="description"
        content="Tattle Café is your ultimate dating app. Experience modern matchmaking with equal gender ratios, virtual cafés, and exciting features to find your perfect match!"
      />
      <meta
        name="keywords"
        content="dating app, Tattle Café, find love, matchmaking, online dating, secure dating, virtual cafés, relationships, singles near me"
      />
      <meta name="author" content="Tattle Café" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Tattle Café - Find Your Perfect Match"
      />
      <meta
        property="og:description"
        content="Discover modern dating with unique features like virtual cafés and equal gender ratios. Start your journey with Tattle Café today!"
      />
      <meta
        property="og:image"
        content="https://www.tattlecafe.com/assets/featured-image.jpg"
      />
      <meta property="og:url" content="https://www.tattlecafe.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Tattle Café - Your Modern Dating App"
      />
      <meta
        name="twitter:description"
        content="Join Tattle Café for exciting features like virtual cafés and secure matchmaking. Find your match today!"
      />
      <meta
        name="twitter:image"
        content="https://www.tattlecafe.com/assets/featured-image.jpg"
      />

      {/* Canonical Link */}
      <link rel="canonical" href="https://www.tattlecafe.com" />

      {/* Favicon */}
      <link rel="icon" href="https://www.tattlecafe.com/logo.ico" />

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WTY116E7NT"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WTY116E7NT');
        `}
      </script>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Tattle Café",
          url: "https://www.tattlecafe.com",
          description:
            "Tattle Café is a modern dating app with unique features like virtual cafés and equal gender ratios.",
          sameAs: [
            "https://www.facebook.com/tattlecafe",
            "https://www.twitter.com/tattlecafe",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
