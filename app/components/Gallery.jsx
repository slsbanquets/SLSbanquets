



//--------------------images will display more -------------------------


// "use client";
// import { useState, useEffect } from "react";

// export default function Gallery() {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [itemsToShow, setItemsToShow] = useState(4); // default for mobile

//   const images = [
//     { src: "/heroimg1.jpg", alt: "Banquet Hall in Kandrika Vijayawada" },
//     { src: "/galleryimg2.jpg", alt: "Wedding and Reception Stage Decoration" },
//     { src: "/galleryimg3.jpg", alt: "Marriage Hall Lighting and Floral Setup" },
//     { src: "/heroimg2.jpg", alt: "Birthday Party Hall with Elegant Lighting" },
//     { src: "/galleryimg1.jpg", alt: "South Indian Wedding Stage at SLS Banquets" },
//     { src: "/galleryimg4.jpg", alt: "Reception Hall Seating Arrangement" },
//     { src: "/heroimg1.jpg", alt: "Function Hall Setup for Private Events" },
//     { src: "/galleryimg5.jpg", alt: "Cultural Event Venue in Vijayawada" },
//     { src: "/heroimg2.jpg", alt: "Corporate Event and Party Hall Setup" },
//     { src: "/galleryimg4.jpg", alt: "Banquet Hall for Family Gatherings" },
//   ];

//   // Detect screen size & set default items
//   useEffect(() => {
//     const updateItems = () => {
//       if (window.innerWidth >= 768) {
//         setItemsToShow(6); // tablet and up
//       } else {
//         setItemsToShow(4); // mobile
//       }
//     };

//     updateItems();
//     window.addEventListener("resize", updateItems);
//     return () => window.removeEventListener("resize", updateItems);
//   }, []);

//   const visibleImages = showAll ? images : images.slice(0, itemsToShow);

//   return (
//     <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-white via-amber-50 to-white">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
//           Banquet Hall <span className="text-amber-600">Gallery</span>
//         </h2>
//         <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//           Explore our <strong>marriage hall in Kandrika, Vijayawada</strong> featuring elegant 
//           setups for weddings, receptions, birthday parties, cultural programs, and private events.
//         </p>
//         <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-5 rounded-full"></div>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {visibleImages.map((img, index) => (
//           <div
//             key={index}
//             className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer"
//             onClick={() => setSelectedImage(img)}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* View More / View Less Button (only if needed) */}
//       {images.length > itemsToShow && (
//         <div className="text-center mt-12">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-amber-400/50 transform hover:scale-110 transition-all duration-500"
//           >
//             {showAll ? "View Less" : "View More"}
//           </button>
//         </div>
//       )}

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl w-full">
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
//             />
//             <button
//               className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-amber-400 transition"
//               onClick={() => setSelectedImage(null)}
//             >
//               ×
//             </button>
//             <p className="text-center text-white mt-4">{selectedImage.alt}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


//-------------After apply the SEO ---------


"use client";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { galleryImages } from "../data/galleryImages";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(4);

  const images = galleryImages;

  // Responsive images to display count
  useEffect(() => {
    const updateItems = () => {
      setItemsToShow(window.innerWidth >= 768 ? 6 : 4);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const visibleImages = showAll ? images : images.slice(0, itemsToShow);

  // ✅ JSON-LD structured data for ImageGallery
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "SLS Banquets Gallery - Function Hall Vijayawada",
    description:
      "Photo gallery of SLS Banquets, the best function hall in Kandrika Vijayawada. Explore wedding decor, stage setups, lighting, and event spaces.",
    image: images.map((img) => `https://sls-banquets.vercel.app${img.src}`),
  };

  return (
    <>
      {/* ✅ SEO Head Tags */}
      <Head>
        <title>
          Gallery | SLS Banquets Vijayawada | Function Hall, Weddings & Events
        </title>
        <meta
          name="description"
          content="Browse the photo gallery of SLS Banquets in Kandrika, Vijayawada. View our wedding hall decor, reception stage, birthday party setup, and event arrangements."
        />
        <meta
          name="keywords"
          content="function hall Vijayawada, banquet hall Kandrika, wedding hall Vijayawada, birthday hall Vijayawada, SLS Banquets gallery, reception stage Vijayawada"
        />
        <meta
          property="og:title"
          content="SLS Banquets Gallery | Banquet Hall Vijayawada"
        />
        <meta
          property="og:description"
          content="See photos of our function hall in Vijayawada. Explore wedding decorations, birthday celebrations, and cultural event spaces at SLS Banquets Kandrika."
        />
        <meta
          property="og:image"
          content="https://sls-banquets.vercel.app/galleryimg1.jpg"
        />
        <meta
          property="og:url"
          content="https://sls-banquets.vercel.app/#gallery"
        />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
        />
      </Head>

      {/* ✅ Gallery Section */}
      <section
        id="gallery"
        className="py-20 px-6 bg-gradient-to-b from-white via-amber-50 to-white"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Banquet Hall <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our{" "}
            <strong>marriage hall in Kandrika, Vijayawada</strong> featuring
            elegant setups for weddings, receptions, birthday parties, cultural
            programs, and private events.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleImages.map((img, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <figcaption className="sr-only">{img.alt}</figcaption>
            </figure>
          ))}
        </div>

        {/* View More / View Less Button */}
        {images.length > itemsToShow && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-amber-400/50 transform hover:scale-110 transition-all duration-500"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-amber-400 transition"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <p className="text-center text-white mt-4">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
