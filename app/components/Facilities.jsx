

///-----------final code----------

// "use client";
// import {
//   BuildingOffice2Icon,
//   BuildingOfficeIcon,
//   CloudIcon,
//   UserGroupIcon,
//   PresentationChartBarIcon,
//   TruckIcon,
//   BoltIcon,
//   LightBulbIcon,
//    HomeIcon,  
// } from "@heroicons/react/24/outline";

// export default function Facilities() {
//   const facilities = [
//     {
//       icon: <BuildingOffice2Icon className="w-8 h-8 text-white" />,
//       title: "Mini Function Hall",
//       description:
//         "Good, elegant hall with excellent capacity, ideal for weddings, receptions, and all kinds of celebrations.",
//       gradient: "from-[#FFD447] to-[#FF6F61]", // gradient applied
//     },
//     {
//       icon: <CloudIcon className="w-8 h-8 text-white" />,
//       title: "Fully Air-Conditioned",
//       description:
//         "A cool and comfortable environment for your guests all year round with modern climate control.",
//       solidColor: "#3498DB", // solid color applied
//     },
//     {
//       icon: <UserGroupIcon className="w-8 h-8 text-white" />,
//       title: "Comfortable Seating",
//       description:
//         "Well-arranged chairs and tables with good ambience to suit gatherings of all sizes.",
//       solidColor: "#FF6F61",
//     },
//     {
//       icon: <PresentationChartBarIcon className="w-8 h-8 text-white" />,
//       title: "Beautiful Stage / Platform",
//       description:
//         "An elegant stage setup perfect for weddings, cultural programs, and ceremonies.",
//       gradient: "from-[#FFD447] to-[#FF6F61]", // gradient applied
//     },
//     {
//       icon: <TruckIcon className="w-8 h-8 text-white" />,
//       title: "Limited Parking",
//       description:
//         "Dedicated parking area with easy access for your guests’ convenience and safety.",
//       solidColor: "#3498DB",
//     },
//     {
//       icon: <BuildingOfficeIcon className="w-8 h-8 text-white" />,
//       title: "Restrooms & Wash Areas",
//       description:
//         "Clean, well-maintained restrooms and wash areas designed for comfort and hygiene.",
//       solidColor: "#FFD447",
//     },
//     {
//    icon: <LightBulbIcon className="w-8 h-8 text-white" />,
//    title: "Extra Room Facilities",
//    description:
//     "Enjoy our comfortable and well-equipped extra rooms for guests or family members. Ideal for pre-event preparations, relaxation, or overnight stays with full convenience.",
//   gradient: "from-[#FFD447] to-[#3498DB]", // smooth gold to blue gradient
//   },

//     {
//       icon: <HomeIcon className="w-8 h-8 text-white" />,
//       title: "Lighting & Fans",
//       description:
//         "Good lighting and fan arrangements with affordability and quality included in the hall.",
//       solidColor: "#FF6F61",
//     },
//   ];

//   return (
//     <section
//       id="facilities"
//       className="relative py-20 px-6 bg-gradient-to-b from-white via-[#FFD447]/5 to-white"
//     >
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
//           Our{" "}
//           <span className="bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
//             Facilities
//           </span>
//         </h2>
//         <p className="text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
//           Explore the <strong>best facilities</strong> at our{" "}
//           <strong>banquet hall in Kandrika, Vijayawada</strong>. We focus on{" "}
//           <strong>quality, affordability, ambience, and beautiful interiors</strong> to make your events truly special.
//         </p>
//       </div>

//       {/* Facilities Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//         {facilities.map((facility, index) => (
//           <div
//             key={index}
//             className={`relative group rounded-2xl p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 ${
//               facility.gradient
//                 ? `bg-gradient-to-tr ${facility.gradient}`
//                 : `bg-[${facility.solidColor}]`
//             }`}
//           >
//             {/* Inner Card */}
//             <div
//               className={`h-full w-full rounded-2xl p-6 flex flex-col items-start justify-start transition ${
//                 facility.gradient ? "bg-white" : "bg-white"
//               }`}
//             >
//               {/* Icon */}
//               <div
//                 className={`flex items-center justify-center w-14 h-14 rounded-xl shadow-md mb-5 transition ${
//                   facility.gradient
//                     ? `bg-gradient-to-tr ${facility.gradient} group-hover:scale-110 group-hover:rotate-3`
//                     : `bg-[${facility.solidColor}] group-hover:scale-110`
//                 }`}
//               >
//                 {facility.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 {facility.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {facility.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


//----------After Apply the SEO --------

// "use client";
// import Head from "next/head";
// import {
//   BuildingOffice2Icon,
//   BuildingOfficeIcon,
//   CloudIcon,
//   UserGroupIcon,
//   PresentationChartBarIcon,
//   TruckIcon,
//   BoltIcon,
//   LightBulbIcon,
//   HomeIcon,
// } from "@heroicons/react/24/outline";

// export default function Facilities() {
//   const facilities = [
//     {
//       icon: <BuildingOffice2Icon className="w-8 h-8 text-white" />,
//       title: "Mini Function Hall",
//       description:
//         "Elegant hall with excellent capacity, ideal for weddings, receptions, and celebrations in Kandrika, Vijayawada.",
//       gradient: "from-[#FFD447] to-[#FF6F61]",
//     },
//     {
//       icon: <CloudIcon className="w-8 h-8 text-white" />,
//       title: "Fully Air-Conditioned",
//       description:
//         "Cool and comfortable environment for all guests with modern climate control.",
//       solidColor: "#3498DB",
//     },
//     {
//       icon: <UserGroupIcon className="w-8 h-8 text-white" />,
//       title: "Comfortable Seating",
//       description:
//         "Well-arranged chairs and tables suitable for gatherings of all sizes.",
//       solidColor: "#FF6F61",
//     },
//     {
//       icon: <PresentationChartBarIcon className="w-8 h-8 text-white" />,
//       title: "Beautiful Stage / Platform",
//       description:
//         "Elegant stage setup perfect for weddings, cultural programs, and ceremonies.",
//       gradient: "from-[#FFD447] to-[#FF6F61]",
//     },
//     {
//       icon: <TruckIcon className="w-8 h-8 text-white" />,
//       title: "Limited Parking",
//       description:
//         "Dedicated parking area with easy access for guests’ convenience and safety.",
//       solidColor: "#3498DB",
//     },
//     {
//       icon: <BuildingOfficeIcon className="w-8 h-8 text-white" />,
//       title: "Restrooms & Wash Areas",
//       description:
//         "Clean, well-maintained restrooms and wash areas designed for comfort and hygiene.",
//       solidColor: "#FFD447",
//     },
//     {
//       icon: <LightBulbIcon className="w-8 h-8 text-white" />,
//       title: "Extra Room Facilities",
//       description:
//         "Comfortable extra rooms for guests or family members. Ideal for pre-event preparations, relaxation, or overnight stays.",
//       gradient: "from-[#FFD447] to-[#3498DB]",
//     },
//     {
//       icon: <HomeIcon className="w-8 h-8 text-white" />,
//       title: "Lighting & Fans",
//       description:
//         "Well-planned lighting and fan arrangements for a perfect ambience.",
//       solidColor: "#FF6F61",
//     },
//   ];

//   // JSON-LD Structured Data for Facilities
//   const schemaData = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "name": "SLS Banquets",
//     "description":
//       "SLS Banquets provides premium banquet hall facilities in Kandrika, Vijayawada, including mini function hall, air-conditioning, stage, seating, parking, restrooms, and extra rooms.",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Kandrika",
//       "addressLocality": "Vijayawada",
//       "addressRegion": "Andhra Pradesh",
//       "postalCode": "520010",
//       "addressCountry": "IN"
//     },
//     "telephone": "+91 7672024124",
//     "url": "https://sls-banquets.vercel.app/",
//     "areaServed": "Vijayawada",
//     "hasMap": "https://www.google.com/maps/place/Kandrika+Vijayawada",
//     "amenityFeature": facilities.map((f) => ({
//       "@type": "LocationFeatureSpecification",
//       "name": f.title,
//       "value": f.description
//     })),
//   };

//   return (
//     <>
//       {/* ✅ SEO Head Tags */}
//       <Head>
//         <title>Facilities | SLS Banquets Vijayawada | Function Hall Amenities</title>
//         <meta
//           name="description"
//           content="Explore the premium facilities at SLS Banquets, Kandrika Vijayawada, including mini function hall, AC, stage, seating, parking, restrooms, and extra rooms for weddings and events."
//         />
//         <meta
//           name="keywords"
//           content="function hall facilities Vijayawada, banquet hall amenities Kandrika, wedding hall features, SLS Banquets facilities, mini function hall Vijayawada"
//         />
//         <meta property="og:title" content="SLS Banquets Facilities | Banquet Hall Vijayawada" />
//         <meta
//           property="og:description"
//           content="Discover top facilities at SLS Banquets in Kandrika, Vijayawada. Elegant mini function hall, air-conditioning, stage, seating, parking, restrooms, and extra rooms."
//         />
//         <meta property="og:image" content="https://sls-banquets.vercel.app/heroimg1.jpg" />
//         <meta property="og:url" content="https://sls-banquets.vercel.app/#facilities" />
//         <meta property="og:type" content="website" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//         />
//       </Head>

//       {/* Facilities Section */}
//       <section
//         id="facilities"
//         className="relative py-20 px-6 bg-gradient-to-b from-white via-[#FFD447]/5 to-white"
//       >
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
//             Our{" "}
//             <span className="bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
//               Facilities
//             </span>
//           </h2>
//           <p className="text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
//             Explore the <strong>best facilities</strong> at our{" "}
//             <strong>banquet hall in Kandrika, Vijayawada</strong>. We focus on{" "}
//             <strong>quality, affordability, ambience, and beautiful interiors</strong> to make your events truly special.
//           </p>
//         </div>

//         {/* Facilities Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//           {facilities.map((facility, index) => (
//             <article
//               key={index}
//               className={`relative group rounded-2xl p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 ${
//                 facility.gradient
//                   ? `bg-gradient-to-tr ${facility.gradient}`
//                   : `bg-[${facility.solidColor}]`
//               }`}
//             >
//               <div
//                 className={`h-full w-full rounded-2xl p-6 flex flex-col items-start justify-start transition bg-white`}
//               >
//                 <div
//                   className={`flex items-center justify-center w-14 h-14 rounded-xl shadow-md mb-5 transition ${
//                     facility.gradient
//                       ? `bg-gradient-to-tr ${facility.gradient} group-hover:scale-110 group-hover:rotate-3`
//                       : `bg-[${facility.solidColor}] group-hover:scale-110`
//                   }`}
//                 >
//                   {facility.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }



// -------------mobile view modification col 2---------

"use client";
import Head from "next/head";
import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CloudIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  TruckIcon,
  LightBulbIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export default function Facilities() {
  const facilities = [
    {
      icon: <BuildingOffice2Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Mini Function Hall",
      description:
        "Elegant hall with excellent capacity, ideal for weddings, receptions, and celebrations in Kandrika, Vijayawada.",
      gradient: "from-[#FFD447] to-[#FF6F61]",
    },
    {
      icon: <CloudIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Fully Air-Conditioned",
      description:
        "Cool and comfortable environment for all guests with modern climate control.",
      solidColor: "#3498DB",
    },
    {
      icon: <UserGroupIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Comfortable Seating",
      description:
        "Well-arranged chairs and tables suitable for gatherings of all sizes.",
      solidColor: "#FF6F61",
    },
    {
      icon: <PresentationChartBarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Beautiful Stage / Platform",
      description:
        "Elegant stage setup perfect for weddings, cultural programs, and ceremonies.",
      gradient: "from-[#FFD447] to-[#FF6F61]",
    },
    {
      icon: <TruckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Limited Parking",
      description:
        "Dedicated parking area with easy access for guests’ convenience and safety.",
      solidColor: "#3498DB",
    },
    {
      icon: <BuildingOfficeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Restrooms & Wash Areas",
      description:
        "Clean, well-maintained restrooms and wash areas designed for comfort and hygiene.",
      solidColor: "#FFD447",
    },
    {
      icon: <LightBulbIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Extra Room Facilities",
      description:
        "Comfortable extra rooms for guests or family members. Ideal for pre-event preparations, relaxation, or overnight stays.",
      gradient: "from-[#FFD447] to-[#3498DB]",
    },
    {
      icon: <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Lighting & Fans",
      description:
        "Well-planned lighting and fan arrangements for a perfect ambience.",
      solidColor: "#FF6F61",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SLS Banquets",
    description:
      "SLS Banquets provides premium banquet hall facilities in Kandrika, Vijayawada, including mini function hall, air-conditioning, stage, seating, parking, restrooms, and extra rooms.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kandrika",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      postalCode: "520010",
      addressCountry: "IN",
    },
    telephone: "+91 7672024124",
    url: "https://sls-banquets.vercel.app/",
    areaServed: "Vijayawada",
    hasMap: "https://www.google.com/maps/place/Kandrika+Vijayawada",
    amenityFeature: facilities.map((f) => ({
      "@type": "LocationFeatureSpecification",
      name: f.title,
      value: f.description,
    })),
  };

  return (
    <>
      <Head>
        <title>Facilities | SLS Banquets Vijayawada | Function Hall Amenities</title>
        <meta
          name="description"
          content="Explore the premium facilities at SLS Banquets, Kandrika Vijayawada, including mini function hall, AC, stage, seating, parking, restrooms, and extra rooms for weddings and events."
        />
        <meta
          name="keywords"
          content="function hall facilities Vijayawada, banquet hall amenities Kandrika, wedding hall features, SLS Banquets facilities, mini function hall Vijayawada"
        />
        <meta property="og:title" content="SLS Banquets Facilities | Banquet Hall Vijayawada" />
        <meta
          property="og:description"
          content="Discover top facilities at SLS Banquets in Kandrika, Vijayawada. Elegant mini function hall, air-conditioning, stage, seating, parking, restrooms, and extra rooms."
        />
        <meta property="og:image" content="https://sls-banquets.vercel.app/heroimg1.jpg" />
        <meta property="og:url" content="https://sls-banquets.vercel.app/#facilities" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <section
        id="facilities"
        className="relative py-20 px-6 bg-gradient-to-b from-white via-[#FFD447]/5 to-white"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
              Facilities
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-3xl mx-auto leading-relaxed">
            Explore the <strong>best facilities</strong> at our{" "}
            <strong>banquet hall in Kandrika, Vijayawada</strong>. We focus on{" "}
            <strong>quality, affordability, ambience, and beautiful interiors</strong> to make your events truly special.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <article
              key={index}
              className={`relative group rounded-2xl p-[2px] shadow-xl hover:shadow-2xl transition-all duration-500 ${
                facility.gradient
                  ? `bg-gradient-to-tr ${facility.gradient}`
                  : `bg-[${facility.solidColor}]`
              }`}
            >
              <div className="h-full w-full rounded-2xl p-4 sm:p-6 flex flex-col items-start justify-start bg-white transition">
                <div
                  className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl shadow-md mb-4 sm:mb-5 transition ${
                    facility.gradient
                      ? `bg-gradient-to-tr ${facility.gradient} group-hover:scale-110 group-hover:rotate-3`
                      : `bg-[${facility.solidColor}] group-hover:scale-110`
                  }`}
                >
                  {facility.icon}
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
