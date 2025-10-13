// "use client";
// import Head from "next/head";

// export default function SEO({ 
//   title = "SLS Banquets | Mini Function Hall in Vijayawada",
//   description = "SLS Banquets is the premium mini function hall in Kandrika, Vijayawada. Perfect for weddings, receptions, birthdays, cultural programs, and corporate events.",
//   keywords = "function hall in Vijayawada, banquet hall Kandrika, wedding hall Vijayawada, birthday party hall, cultural events, SLS Banquets",
//   url = "https://sls-banquets.vercel.app",
//   image = "/logo7.png"
// }) {
//   return (
//     <Head>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />
//       <meta name="author" content="SLS Banquets" />

//       {/* Open Graph / Social Media */}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={url} />
//       <meta property="og:image" content={image} />

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={image} />

//       {/* Favicon */}
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//   );
// }





"use client";
import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      {/* Open Graph */}
      <meta property="og:title" content="SLS Banquets | Mini Function Hall in Vijayawada" />
      <meta
        property="og:description"
        content="Celebrate your events at SLS Banquets, the premium mini function hall in Kandrika, Vijayawada."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/logo7.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SLS Banquets | Mini Function Hall in Vijayawada" />
      <meta
        name="twitter:description"
        content="Celebrate your events at SLS Banquets, the premium mini function hall in Kandrika, Vijayawada."
      />
      <meta name="twitter:image" content="/logo7.png" />

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SLS Banquets",
            image: "https://sls-banquets.vercel.app/logo7.png",
            "@id": "https://sls-banquets.vercel.app",
            url: "https://sls-banquets.vercel.app",
            telephone: "+917672024124",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "S L S ENCLAVE, DNO: 77-149-20, Plot No: 137, Journalist Colony, Rajiv-Kandrika Main Rd (48 R Bus route), Payakapuram",
              addressLocality: "Vijayawada",
              addressRegion: "Andhra Pradesh",
              postalCode: "520010",
              addressCountry: "IN",
            },
            geo: { "@type": "GeoCoordinates", latitude: 16.555263, longitude: 80.650418 },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "22:00",
              },
            ],
          }),
        }}
      />
    </Head>
  );
}
