


//-----------After Apply the SEO -------------

"use client";
import Head from "next/head";
import {
  Gift,
  Cake,
  Sparkles,
  Users,
  Music,
  Heart,
  Star,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: "Weddings & Receptions in Vijayawada",
      description:
        "Celebrate your special day at our elegant wedding hall in Kandrika, Vijayawada. Perfect for receptions, engagements, and traditional South Indian marriages.",
      gradient: "from-[#FFD447] to-[#FF6F61]",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      title: "Half-Saree & Coming of Age Functions",
      description:
        "Our banquet hall is ideal for half-saree ceremonies and coming-of-age celebrations with traditional elegance and modern facilities.",
      gradient: "from-[#FF6F61] to-[#FFD447]",
    },
    {
      icon: <Gift className="w-10 h-10 text-white" />,
      title: "Pelli Vididulu / Groom Stay Venue",
      description:
        "A spacious private event hall and suite in Vijayawada designed for Pelli Vididulu and pre-wedding rituals with comfort and cultural authenticity.",
      gradient: "from-[#3498DB] to-[#FFD447]",
    },
    {
      icon: <Cake className="w-10 h-10 text-white" />,
      title: "Birthday Party Hall in Vijayawada",
      description:
        "Host unforgettable birthday parties in our stylish birthday party hall at SLS Banquets, Kandrika, with vibrant interiors and guest-friendly spaces.",
      gradient: "from-[#FF6F61] to-[#3498DB]",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Private Events & Family Gatherings",
      description:
        "Whether it’s an anniversary, reunion, or private party, our hall in Vijayawada provides a perfect venue for intimate and grand celebrations.",
      gradient: "from-[#FFD447] to-[#3498DB]",
    },
    {
      icon: <Music className="w-10 h-10 text-white" />,
      title: "Cultural & Community Event Venue",
      description:
        "From musical nights to cultural programs, our community event space offers excellent seating and stage facilities in Vijayawada.",
      gradient: "from-[#3498DB] to-[#FF6F61]",
    },
    {
      icon: <Star className="w-10 h-10 text-white" />,
      title: "Other Celebrations & Events",
      description:
        "Our multipurpose function hall is flexible for corporate meetings, engagement parties, or any celebration you want to host in Kandrika, Vijayawada.",
      gradient: "from-[#FFD447] to-[#FF6F61]",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SLS Banquets",
    "image": "https://sls-banquets.vercel.app/heroimg.jpg",
    "description":
      "SLS Banquets is the best function hall in Kandrika, Vijayawada offering wedding halls, birthday party halls, and cultural event venues.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kandrika",
      "addressLocality": "Vijayawada",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "520010",
      "addressCountry": "IN",
    },
    "telephone": "+91 7672024124",
    "url": "https://sls-banquets.vercel.app/",
    "priceRange": "₹₹₹",
    "sameAs": [
      "https://www.instagram.com/",
      "https://www.facebook.com/",
    ],
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>SLS Banquets Services | Wedding, Birthday, and Event Halls in Vijayawada</title>
        <meta
          name="description"
          content="Explore our range of banquet hall services in Vijayawada including weddings, receptions, birthdays, cultural programs, and corporate events at SLS Banquets, Kandrika."
        />
        <meta
          name="keywords"
          content="function hall Vijayawada, banquet hall Kandrika, wedding hall Vijayawada, SLS Banquets, birthday party hall Vijayawada, cultural event space Vijayawada"
        />
        <meta property="og:title" content="Banquet Hall Services | SLS Banquets Vijayawada" />
        <meta
          property="og:description"
          content="Discover elegant wedding and event spaces at SLS Banquets in Kandrika, Vijayawada. Perfect for receptions, parties, and cultural events."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sls-banquets.vercel.app/#services" />
        <meta property="og:image" content="https://sls-banquets.vercel.app/heroimg.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* ✅ Service Section */}
      <section
        id="services"
        className="py-24 px-6 bg-gradient-to-b from-white via-[#FFD447]/5 to-white"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
              Banquet Hall Services
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            SLS Banquets in Kandrika, Vijayawada offers wedding halls, birthday
            party halls, private event spaces, and cultural venues designed to
            make your celebrations unforgettable.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden"
              style={{
                clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
              }}
            >
              <div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-tr ${service.gradient} opacity-20 blur-3xl group-hover:opacity-50 transition-opacity duration-500`}
              ></div>
              <div className="relative z-10 flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-white/40 to-white/10 shadow-md group-hover:scale-110 transition-transform duration-500">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg`}
                >
                  {service.icon}
                </div>
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] transition-all duration-500">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-700 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto text-center mt-20">
          <div className="bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] rounded-3xl p-10 text-white shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Book Your Banquet Hall?
            </h3>
            <p className="text-white/90 mb-6 md:text-lg">
              Contact SLS Banquets in Vijayawada today to check availability and
              book the perfect marriage hall, birthday party hall, or cultural
              event venue.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/917672024124?text=Hello%20SLS%20Banquets,%20I%20would%20like%20to%20get%20a%20quote"
                )
              }
              className="bg-white text-[#FF6F61] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


