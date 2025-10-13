
///---------style chanage fix design----

// "use client";
// import { useState, useEffect } from "react";

// export default function HeroSection() {
//   const images = ["/heroimg.jpg", "/heroimg1.jpg", "/heroimg2.jpg"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((i) => (i + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
//     >
//       {/* Background Images */}
//       {images.map((img, idx) => (
//         <div
//           key={idx}
//           className={`absolute inset-0 bg-center bg-cover transition-all duration-2000 ease-in-out ${
//             idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
//           }`}
//           style={{ backgroundImage: `url('${img}')` }}
//         ></div>
//       ))}

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

//       {/* Optional light sweep / shimmer effect on top */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 animate-light-sweep"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 px-6 sm:px-10 md:px-20 max-w-4xl text-center flex flex-col items-center">
//         {/* Logo / Brand */}
//         <div className="mb-8">
//           <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#FFD447] tracking-wider relative overflow-hidden">
//             <span className="relative z-10">SLS</span>
//             {/* shimmer overlay clipped to text */}
//             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent mix-blend-screen opacity-0 animate-shimmer-text"></span>
//           </div>
//           <div className="mt-2 text-lg sm:text-xl font-light uppercase tracking-wider text-white/80">
//             Banquets
//           </div>
//           <div className="mt-3 flex items-center justify-center gap-2">
//             <div className="h-px w-8 bg-white/60"></div>
//             <p className="text-xs sm:text-sm md:text-base font-serif text-white/70 tracking-widest uppercase">
//               Special • Lifetime • Smiles
//             </p>
//             <div className="h-px w-8 bg-white/60"></div>
//           </div>
//         </div>

//         {/* Main Tagline / Heading */}
//         <h1 className="mb-6 leading-tight">
//           <span className="block font-light italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90">
//             Where Elegance Meets Celebration
//           </span>
//         </h1>

//         {/* Subtitle / Supporting text */}
//         <p className="mb-10 max-w-lg text-sm sm:text-base md:text-lg lg:text-xl font-serif text-white/70 leading-relaxed">
//           Let every event be an experience — a memory you and your guests will cherish forever.
//         </p>

//         {/* CTAs */}
//         <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
//           <a
//             href="#contact"
//             className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFD447] to-[#FF6F61] text-black font-semibold text-base sm:text-lg rounded-full transition-transform duration-300 hover:scale-105"
//           >
//             Book Your Event
//           </a>
//           <a
//             href="#gallery"
//             className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/60 text-white font-semibold text-base sm:text-lg rounded-full transition-colors duration-300 hover:bg-white/10 hover:border-[#FFD447] hover:text-[#FFD447]"
//           >
//             View Gallery
//           </a>
//         </div>
//       </div>

//       {/* Dots / Navigation Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
//               idx === currentIndex ? "bg-[#FFD447] scale-125" : "bg-white/40"
//             }`}
//           ></button>
//         ))}
//       </div>

//       {/* Scroll indicator (optional) */}
//       <div className="absolute bottom-6 right-6 text-white/60 text-xs sm:text-sm">
//         <div className="flex flex-col items-center">
//           <span className="rotate-90 uppercase tracking-wider">Scroll</span>
//           <div className="w-px h-6 bg-white/60 mt-1"></div>
//         </div>
//       </div>
//     </section>
//   );
// }


//-----------Apply the SEO------------




"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function HeroSection() {
  const images = [
    { src: "/heroimg.jpg", alt: "SLS Banquets Hall exterior" },
    { src: "/heroimg3.jpg", alt: "Elegant wedding setup at SLS Banquets" },
    { src: "/heroimg2.jpg", alt: "Birthday party setup in banquet hall" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>
          SLS Banquets Hall – Mini Function Hall in Vijayawada | Weddings, Parties & Corporate Events
        </title>
        <meta
          name="description"
          content="Book SLS Banquets Hall, a premium mini function hall in Vijayawada for weddings, receptions, birthday parties, and corporate events. Elegant decor, catering & full amenities."
        />
        <meta
          name="keywords"
          content="function hall in Vijayawada, mini function hall, wedding hall, party hall, banquet hall, event venue"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sls-banquets.vercel.app/" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SLS Banquets",
              image: images.map((img) => `https://sls-banquets.vercel.app${img.src}`),
              address: {
                "@type": "PostalAddress",
                streetAddress: "S L S ENCLAVE, DNO: 77-149-20, Plot No: 137, Journalist Colony, Rajiv-Kandrika Main Rd (48 R Bus route), Payakapuram",
                addressLocality: "Vijayawada",
                addressRegion: "Andhra Pradesh",
                postalCode: "520010",
                addressCountry: "IN"
              },
              telephone: "+917672024124",
              url: "https://sls-banquets.vercel.app",
              openingHours: "Mo-Su 09:00-22:00",
              sameAs: [
                "https://www.facebook.com/SLSBanquets",
                "https://www.instagram.com/SLSBanquets"
              ]
            }),
          }}
        />
      </Head>

      <section
        id="home"
        className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
        aria-label="SLS Banquets Hero Section"
      >
        {/* Background Slides */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-center bg-cover transition-all duration-2000 ease-in-out ${
              idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url('${img.src}')` }}
            role="img"
            aria-label={img.alt}
          ></div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-20 px-6 sm:px-10 md:px-20 max-w-4xl text-center flex flex-col items-center">
          {/* Logo & Branding */}
          <div className="mb-8">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#FFD447] tracking-wider relative overflow-hidden">
              <span className="relative z-10">SLS</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent mix-blend-screen opacity-0 animate-shimmer-text"></span>
            </div>
            <div className="mt-2 text-lg sm:text-xl font-light uppercase tracking-wider text-white/80">
              Banquets Hall
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-white/60"></div>
              <p className="text-xs sm:text-sm md:text-base font-serif text-white/70 tracking-widest uppercase">
                Special • Lifetime • Smiles
              </p>
              <div className="h-px w-8 bg-white/60"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 leading-tight text-white">
            <span className="block font-light italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90">
              Mini Function Hall in Vijayawada – Where Elegance Meets Celebration
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-lg text-sm sm:text-base md:text-lg lg:text-xl font-serif text-white/70 leading-relaxed">
            Let every event be an experience — a memory you and your guests will cherish forever at SLS Banquets Hall.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="#contact"
              aria-label="Book your event at SLS Banquets"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FFD447] to-[#FF6F61] text-black font-semibold text-base sm:text-lg rounded-full transition-transform duration-300 hover:scale-105"
            >
              Book Your Event
            </a>
            <a
              href="#gallery"
              aria-label="View SLS Banquets gallery"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/60 text-white font-semibold text-base sm:text-lg rounded-full transition-colors duration-300 hover:bg-white/10 hover:border-[#FFD447] hover:text-[#FFD447]"
            >
              View Gallery
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#FFD447] scale-125" : "bg-white/40"
              }`}
              aria-label={`Show slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-6 text-white/60 text-xs sm:text-sm">
          <div className="flex flex-col items-center">
            <span className="rotate-90 uppercase tracking-wider">Scroll</span>
            <div className="w-px h-6 bg-white/60 mt-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}
