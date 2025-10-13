//--------------without SEO-----------------------



// "use client";
// import Link from "next/link";

// import {
//   BuildingOffice2Icon,
//   Squares2X2Icon,
//   UsersIcon,
//   SparklesIcon,
//   TruckIcon,
//   AcademicCapIcon,
//   BanknotesIcon,
// } from "@heroicons/react/24/outline";

// export default function AboutUs() {
//   return (
//     <section id="about" className="relative py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50"></div>
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-56 h-56 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-500"></div>
//         <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-amber-300 rounded-full blur-2xl opacity-70"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 shadow-lg mb-6">
//             <SparklesIcon className="w-8 h-8 text-white" />
//           </div>
//           <h2 className="text-5xl md:text-6xl font-light mb-6">
//             About{" "}
//             <span className="font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 bg-clip-text text-transparent">
//               SLS Banquets
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Discover a venue where <strong>tradition meets elegance</strong>.  
//             Designed exclusively for <strong>weddings, receptions, birthdays, and corporate events</strong>,  
//             SLS Banquets ensures your celebration is filled with timeless beauty and modern comfort.
//           </p>
//         </div>

//         {/* Floor Layout Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
//           {/* Ground Floor */}
//           <div className="group relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
//             <div className="relative bg-white rounded-3xl p-10 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//               <BuildingOffice2Icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                 Ground Floor
//               </h3>
//               <span className="block text-center mb-4 bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold">
//                 Parking Area
//               </span>
//               <p className="text-gray-600 leading-relaxed text-center">
//                 Spacious and secure parking designed to welcome all your guests
//                 with ease and convenience.
//               </p>
//             </div>
//           </div>

//           {/* First Floor */}
//           <div className="group relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-500 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
//             <div className="relative bg-white rounded-3xl p-10 shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//               <UsersIcon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                 First Floor
//               </h3>
//               <span className="block text-center mb-4 bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold">
//                 Main Function Hall
//               </span>
//               <p className="text-gray-600 leading-relaxed text-center">
//                 A refined hall featuring elegant interiors, flexible seating, and
//                 a professional stage setup for grand occasions.
//               </p>
//             </div>
//           </div>

//           {/* Second Floor */}
//           <div className="group relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-amber-400 to-yellow-500 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
//             <div className="relative bg-white rounded-3xl p-10 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//               <Squares2X2Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                 Second Floor
//               </h3>
//               <span className="block text-center mb-4 bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold">
//                 Dressing Suites / Vididhillu
//               </span>
//               <p className="text-gray-600 leading-relaxed text-center">
//                 Luxurious triple-bedroom suite serving as a dressing lounge or{" "}
//                 <em>Vididhillu</em> space for traditional pre-wedding rituals.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
//           <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>

//           <div className="relative z-10">
//             <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
//               Why Choose{" "}
//               <span className="text-amber-400">SLS Banquets?</span>
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//               {[
//                 {
//                   icon: <AcademicCapIcon className="w-10 h-10 mx-auto text-amber-400" />,
//                   title: "Cultural Authenticity",
//                   desc: "Blending timeless traditions with contemporary elegance.",
//                 },
//                 {
//                   icon: <BuildingOffice2Icon className="w-10 h-10 mx-auto text-amber-400" />,
//                   title: "Premium Architecture",
//                   desc: "Modern design that complements every celebration.",
//                 },
//                 {
//                   icon: <TruckIcon className="w-10 h-10 mx-auto text-amber-400" />,
//                   title: "Flexible Spaces",
//                   desc: "Layouts tailored for weddings, parties, and events.",
//                 },
//                 {
//                   icon: <SparklesIcon className="w-10 h-10 mx-auto text-amber-400" />,
//                   title: "Memorable Experiences",
//                   desc: "Crafting celebrations that stay with you forever.",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="text-center group hover:scale-105 transition-transform duration-500"
//                 >
//                   <div className="mb-4">{item.icon}</div>
//                   <h4 className="font-bold text-amber-300 mb-2">{item.title}</h4>
//                   <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Closing Statement */}
//         <div className="text-center mt-20 max-w-3xl mx-auto">
//           <p className="text-2xl leading-relaxed text-gray-700">
//             Be it a{" "}
//             <span className="font-semibold text-amber-700">grand South Indian wedding</span>,  
//             a <span className="font-semibold text-amber-700">special birthday celebration</span>, or a{" "}
//             <span className="font-semibold text-amber-700">professional corporate event</span>,  
//             <strong> SLS Banquets </strong> is your perfect venue for moments that matter.
//           </p>
//           <a href="#contact">
//           <div className="mt-10">
//             <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-110 transform transition-all duration-500 shadow-xl hover:shadow-amber-500/40">
//               Schedule a Visit
//             </button>
//           </div>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }






//------with SEO -------------------



// "use client";
// import Head from "next/head";
// import Link from "next/link";
// import {
//   BuildingOffice2Icon,
//   Squares2X2Icon,
//   UsersIcon,
//   SparklesIcon,
//   TruckIcon,
//   AcademicCapIcon,
// } from "@heroicons/react/24/outline";

// export default function AboutUs() {
//   return (
//     <>
//       {/* ✅ SEO Meta Tags */}
//       <Head>
//         <title>About SLS Banquets | Best Function Hall in Kandrika Vijayawada</title>
//         <meta
//           name="description"
//           content="SLS Banquets is a premium function hall in Kandrika, Vijayawada. Perfect venue for weddings, receptions, birthdays, cultural programs, and corporate events."
//         />
//         <meta
//           name="keywords"
//           content="function hall in Vijayawada, function hall in Kandrika, wedding hall Vijayawada, banquet hall Kandrika, birthday party hall Vijayawada, cultural event space Vijayawada, SLS Banquets"
//         />
//         <meta name="author" content="SLS Banquets" />
//         <meta
//           property="og:title"
//           content="About SLS Banquets | Best Banquet Hall in Vijayawada"
//         />
//         <meta
//           property="og:description"
//           content="Celebrate your special occasions at SLS Banquets in Kandrika, Vijayawada. Elegant interiors, spacious halls, and a blend of tradition with modern style."
//         />
//         <meta property="og:type" content="website" />
//       </Head>

//       {/* ✅ About Section */}
//       <section id="about" className="relative py-24 overflow-hidden">
//         {/* Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50"></div>
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-56 h-56 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-500"></div>
//           <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-amber-300 rounded-full blur-2xl opacity-70"></div>
//         </div>

//         <div className="relative z-10 container mx-auto px-6">
//           {/* Section Header */}
//           <header className="text-center mb-20">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 shadow-lg mb-6">
//               <SparklesIcon className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-5xl md:text-6xl font-light mb-6">
//               About{" "}
//               <span className="font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 bg-clip-text text-transparent">
//                 SLS Banquets
//               </span>
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Welcome to <strong>SLS Banquets</strong>, the{" "}
//               <strong>best function hall in Kandrika, Vijayawada</strong>.
//               Our venue is designed for <strong>weddings, receptions, birthdays, cultural programs</strong>,
//               and <strong>corporate events</strong> — where tradition meets elegance.
//             </p>
//           </header>

//           {/* Floor Layout Cards */}
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
//             {/* Ground Floor */}
//             <article className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
//               <div className="relative bg-white rounded-3xl p-10 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//                 <BuildingOffice2Icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                   Ground Floor – Parking Area
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed text-center">
//                   Spacious and secure parking for guests, ensuring convenience for every event.
//                 </p>
//               </div>
//             </article>

//             {/* First Floor */}
//             <article className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-500 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
//               <div className="relative bg-white rounded-3xl p-10 shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//                 <UsersIcon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                   First Floor – Main Function Hall
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed text-center">
//                   Elegant interiors and professional stage setup — ideal for{" "}
//                   <strong>weddings and receptions in Vijayawada</strong>.
//                 </p>
//               </div>
//             </article>

//             {/* Second Floor */}
//             <article className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-amber-400 to-yellow-500 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
//               <div className="relative bg-white rounded-3xl p-10 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//                 <Squares2X2Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                   Second Floor – Dressing Suites / Vididhillu
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed text-center">
//                   Luxurious <strong>dressing suites</strong> and{" "}
//                   <em>Vididhillu</em> space for traditional pre-wedding rituals.
//                 </p>
//               </div>
//             </article>
//           </section>

//           {/* Why Choose Us */}
//           <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//               Why Choose <span className="text-amber-400">SLS Banquets?</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//               {[
//                 {
//                   icon: (
//                     <AcademicCapIcon className="w-10 h-10 mx-auto text-amber-400" />
//                   ),
//                   title: "Cultural Authenticity",
//                   desc: "Blending South Indian traditions with modern elegance.",
//                 },
//                 {
//                   icon: (
//                     <BuildingOffice2Icon className="w-10 h-10 mx-auto text-amber-400" />
//                   ),
//                   title: "Premium Architecture",
//                   desc: "Elegant design that complements weddings and events.",
//                 },
//                 {
//                   icon: <TruckIcon className="w-10 h-10 mx-auto text-amber-400" />,
//                   title: "Flexible Spaces",
//                   desc: "Custom layouts for receptions, parties, and corporate events.",
//                 },
//                 {
//                   icon: (
//                     <SparklesIcon className="w-10 h-10 mx-auto text-amber-400" />
//                   ),
//                   title: "Memorable Experiences",
//                   desc: "Unforgettable celebrations in Kandrika, Vijayawada.",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="text-center group hover:scale-105 transition-transform duration-500"
//                 >
//                   <div className="mb-4">{item.icon}</div>
//                   <h3 className="font-bold text-amber-300 mb-2">{item.title}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Closing Statement */}
//           <footer className="text-center mt-20 max-w-3xl mx-auto">
//             <p className="text-2xl leading-relaxed text-gray-700">
//               Whether it’s a{" "}
//               <span className="font-semibold text-amber-700">
//                 South Indian wedding in Vijayawada
//               </span>
//               , a{" "}
//               <span className="font-semibold text-amber-700">
//                 birthday celebration
//               </span>
//               , or a{" "}
//               <span className="font-semibold text-amber-700">
//                 corporate event
//               </span>
//               , <strong>SLS Banquets</strong> in{" "}
//               <strong>Kandrika, Vijayawada</strong> is your perfect venue.
//             </p>
//             <div className="mt-10">
//               <Link href="#contact">
//                 <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-110 transform transition-all duration-500 shadow-xl hover:shadow-amber-500/40">
//                   Schedule a Visit
//                 </button>
//               </Link>
//             </div>
//           </footer>
//         </div>
//       </section>
//     </>
//   );
// }



//-----------------apply the final colors---------------


// "use client";
// import Head from "next/head";
// import Link from "next/link";
// import {
//   BuildingOffice2Icon,
//   Squares2X2Icon,
//   UsersIcon,
//   SparklesIcon,
//   TruckIcon,
//   AcademicCapIcon,
// } from "@heroicons/react/24/outline";

// export default function AboutUs() {
//   return (
//     <>
//       {/* ✅ SEO Meta Tags */}
//       <Head>
//         <title>About SLS Banquets | Best Function Hall in Kandrika Vijayawada</title>
//         <meta
//           name="description"
//           content="SLS Banquets is a premium function hall in Kandrika, Vijayawada. Perfect venue for weddings, receptions, birthdays, cultural programs, and corporate events."
//         />
//         <meta
//           name="keywords"
//           content="function hall in Vijayawada, function hall in Kandrika, wedding hall Vijayawada, banquet hall Kandrika, birthday party hall Vijayawada, cultural event space Vijayawada, SLS Banquets"
//         />
//         <meta name="author" content="SLS Banquets" />
//         <meta
//           property="og:title"
//           content="About SLS Banquets | Best Banquet Hall in Vijayawada"
//         />
//         <meta
//           property="og:description"
//           content="Celebrate your special occasions at SLS Banquets in Kandrika, Vijayawada. Elegant interiors, spacious halls, and a blend of tradition with modern style."
//         />
//         <meta property="og:type" content="website" />
//       </Head>

//       {/* ✅ About Section */}
//       <section id="about" className="relative py-24 overflow-hidden">
//         {/* Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#FFD447]/20 via-white to-[#FF6F61]/10"></div>
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-40 h-40 bg-[#FFD447] rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-56 h-56 bg-[#FF6F61] rounded-full blur-3xl animate-pulse delay-500"></div>
//           <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-[#3498DB] rounded-full blur-2xl opacity-70"></div>
//         </div>

//         <div className="relative z-10 container mx-auto px-6">
//           {/* Section Header */}
//           <header className="text-center mb-20">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFD447] to-[#FF6F61] shadow-lg mb-6">
//               <SparklesIcon className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-5xl md:text-6xl font-light mb-6">
//               About{" "}
//               <span className="font-bold bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
//                 SLS Banquets
//               </span>
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Welcome to <strong>SLS Banquets</strong>, the{" "}
//               <strong>best function hall in Kandrika, Vijayawada</strong>.
//               Our venue is designed for <strong>weddings, receptions, birthdays, cultural programs</strong>,
//               and <strong>corporate events</strong> — where tradition meets elegance.
//             </p>
//           </header>

//           {/* Floor Layout Cards */}
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
//             {/* Ground Floor */}
//             <article className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-[#FFD447] via-[#FF6F61] to-[#FFD447] rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
//               <div className="relative bg-white rounded-3xl p-10 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//                 <BuildingOffice2Icon className="w-12 h-12 text-[#FFD447] mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                   Ground Floor – Parking Area
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed text-center">
//                   Spacious and secure parking for guests, ensuring convenience for every event.
//                 </p>
//               </div>
//             </article>

//             {/* First Floor */}  {/* Second Floor */}
//             <article className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F61] via-[#FFD447] to-[#FF6F61] rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
//               <div className="relative bg-white rounded-3xl p-10 shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//                 <UsersIcon className="w-12 h-12 text-[#FF6F61] mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                   First & Second Floor – Main Function Hall
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed text-center">
//                   Elegant interiors and professional stage setup — ideal for{" "}
//                   <strong>weddings and receptions in Vijayawada</strong>.
//                 </p>
//               </div>
//             </article>

           
//             {/* Third Floor */}
//             <article className="group relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-[#3498DB] via-[#FFD447] to-[#FF6F61] rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
//               <div className="relative bg-white rounded-3xl p-10 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
//                 <Squares2X2Icon className="w-12 h-12 text-[#3498DB] mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
//                   Third Floor – Dressing Suites / Vididhillu
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed text-center">
//                   Luxurious <strong>dressing suites</strong> and{" "}
//                   <em>Vididhillu</em> space for traditional pre-wedding rituals.
//                 </p>
//               </div>
//             </article>
           
           

//           </section>

//           {/* Why Choose Us */}
//           <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//               Why Choose{" "}
//               <span className="text-[#FFD447]">SLS Banquets?</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//               {[
//                 {
//                   icon: <AcademicCapIcon className="w-10 h-10 mx-auto text-[#FFD447]" />,
//                   title: "Cultural Authenticity",
//                   desc: "Blending South Indian traditions with modern elegance.",
//                 },
//                 {
//                   icon: <BuildingOffice2Icon className="w-10 h-10 mx-auto text-[#FFD447]" />,
//                   title: "Premium Architecture",
//                   desc: "Elegant design that complements weddings and events.",
//                 },
//                 {
//                   icon: <TruckIcon className="w-10 h-10 mx-auto text-[#FFD447]" />,
//                   title: "Flexible Spaces",
//                   desc: "Custom layouts for receptions, parties, and corporate events.",
//                 },
//                 {
//                   icon: <SparklesIcon className="w-10 h-10 mx-auto text-[#FFD447]" />,
//                   title: "Memorable Experiences",
//                   desc: "Unforgettable celebrations in Kandrika, Vijayawada.",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="text-center group hover:scale-105 transition-transform duration-500"
//                 >
//                   <div className="mb-4">{item.icon}</div>
//                   <h3 className="font-bold text-[#FF6F61] mb-2">{item.title}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Closing Statement */}
//           <footer className="text-center mt-20 max-w-3xl mx-auto">
//             <p className="text-2xl leading-relaxed text-gray-700">
//               Whether it’s a{" "}
//               <span className="font-semibold text-[#FF6F61]">
//                 South Indian wedding in Vijayawada
//               </span>
//               , a{" "}
//               <span className="font-semibold text-[#FFD447]">
//                 birthday celebration
//               </span>
//               , or a{" "}
//               <span className="font-semibold text-[#3498DB]">
//                 corporate event
//               </span>
//               , <strong>SLS Banquets</strong> in{" "}
//               <strong>Kandrika, Vijayawada</strong> is your perfect venue.
//             </p>
//             <div className="mt-10">
//               <Link href="#contact">
//                 <button className="bg-gradient-to-r from-[#FFD447] to-[#FF6F61] text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-110 transform transition-all duration-500 shadow-xl hover:shadow-[#FFD447]/40">
//                   Schedule a Visit
//                 </button>
//               </Link>
//             </div>
//           </footer>
//         </div>
//       </section>
//     </>
//   );
// }



//----------After SEO-----



"use client";
import Head from "next/head";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  Squares2X2Icon,
  UsersIcon,
  SparklesIcon,
  TruckIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function AboutUs() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventVenue"],
    name: "SLS Banquets",
    alternateName: "SLS Banquet Hall Kandrika Vijayawada",
    description:
      "SLS Banquets is a premium mini function hall in Kandrika, Vijayawada. Perfect for weddings, receptions, birthdays, cultural programs, and corporate events.",
    image: [
      "https://sls-banquets.vercel.app/heroimg.jpg",
      "https://sls-banquets.vercel.app/galleryimg2.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kandrika",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      postalCode: "520011",
      addressCountry: "IN",
    },
    telephone: "+91-9876543210",
    url: "https://sls-banquets.vercel.app/",
    openingHours: "Mo-Su 08:00-23:00",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.5062",
      longitude: "80.6480",
    },
    sameAs: [
      "https://www.facebook.com/slsbanquets",
      "https://www.instagram.com/slsbanquets",
      "https://www.google.com/maps/place/SLS+Banquets/",
    ],
  };

  return (
    <>
      <Head>
        <title>About SLS Banquets | Best Function Hall in Kandrika Vijayawada</title>
        <meta
          name="description"
          content="SLS Banquets is a premium function hall in Kandrika, Vijayawada — perfect for weddings, receptions, birthdays, cultural programs, and corporate events."
        />
        <meta
          name="keywords"
          content="function hall in Vijayawada, function hall in Kandrika, wedding hall Vijayawada, banquet hall Kandrika, birthday party hall Vijayawada, cultural event space Vijayawada, SLS Banquets"
        />
        <meta name="author" content="SLS Banquets" />
        <meta property="og:title" content="About SLS Banquets | Best Banquet Hall in Vijayawada" />
        <meta
          property="og:description"
          content="Celebrate your special occasions at SLS Banquets in Kandrika, Vijayawada. Elegant interiors, spacious halls, and a blend of tradition with modern style."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sls-banquets.vercel.app/about" />
        <meta property="og:image" content="https://sls-banquets.vercel.app/heroimg.jpg" />
        <link rel="canonical" href="https://sls-banquets.vercel.app/about" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section
        id="about"
        className="relative py-24 overflow-hidden"
        aria-labelledby="about-heading"
        role="region"
      >
        {/* Background Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD447]/20 via-white to-[#FF6F61]/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#FFD447] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-[#FF6F61] rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-[#3498DB] rounded-full blur-2xl opacity-70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <header className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFD447] to-[#FF6F61] shadow-lg mb-6">
              <SparklesIcon className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h2
              id="about-heading"
              className="text-5xl md:text-6xl font-light mb-6"
            >
              About{" "}
              <span className="font-bold bg-gradient-to-r from-[#FFD447] via-[#FF6F61] to-[#3498DB] bg-clip-text text-transparent">
                SLS Banquets
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to <strong>SLS Banquets</strong>, the{" "}
              <strong>best function hall in Kandrika, Vijayawada</strong>. Our
              venue is perfect for{" "}
              <strong>weddings, receptions, birthdays, cultural programs</strong>,
              and <strong>corporate events</strong> — where tradition meets elegance.
            </p>
          </header>

          {/* Floor Layout Cards */}
          <section
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
            aria-label="Banquet hall floor layout"
          >
            {[
              {
                icon: BuildingOffice2Icon,
                title: "Ground Floor – Parking Area",
                desc: "Good and secure parking for guests, ensuring convenience for every event.",
                gradient: "from-[#FFD447] via-[#FF6F61] to-[#FFD447]",
              },
              {
                icon: UsersIcon,
                title: "First & Second Floor – Main Function Hall",
                desc: "Elegant interiors and professional stage setup — ideal for weddings and receptions in Vijayawada.",
                gradient: "from-[#FF6F61] via-[#FFD447] to-[#FF6F61]",
              },
              {
                icon: Squares2X2Icon,
                title: "Third Floor – Dressing Suites / Vididhillu",
                desc: "Luxurious dressing suites and Vididhillu space for traditional pre-wedding rituals.",
                gradient: "from-[#3498DB] via-[#FFD447] to-[#FF6F61]",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="group relative rounded-3xl"
                aria-label={item.title}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500`}></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-gray-100">
                  <item.icon className="w-12 h-12 text-[#FFD447] mx-auto mb-4" aria-hidden="true" />
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-center">{item.desc}</p>
                </div>
              </article>
            ))}
          </section>

          {/* Why Choose Us */}
          <section
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl"
            aria-labelledby="why-choose-heading"
          >
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose <span className="text-[#FFD447]">SLS Banquets?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: AcademicCapIcon,
                  title: "Cultural Authenticity",
                  desc: "Blending South Indian traditions with modern elegance.",
                },
                {
                  icon: BuildingOffice2Icon,
                  title: "Premium Architecture",
                  desc: "Elegant design that complements weddings and events.",
                },
                {
                  icon: TruckIcon,
                  title: "Flexible Spaces",
                  desc: "Custom layouts for receptions, parties, and corporate events.",
                },
                {
                  icon: SparklesIcon,
                  title: "Memorable Experiences",
                  desc: "Unforgettable celebrations in Kandrika, Vijayawada.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-500">
                  <div className="mb-4"><item.icon className="w-10 h-10 mx-auto text-[#FFD447]" aria-hidden="true" /></div>
                  <h3 className="font-bold text-[#FF6F61] mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing Statement */}
          <footer className="text-center mt-20 max-w-3xl mx-auto">
            <p className="text-2xl leading-relaxed text-gray-700">
              Whether it’s a <span className="font-semibold text-[#FF6F61]">South Indian wedding in Vijayawada</span>, a{" "}
              <span className="font-semibold text-[#FFD447]">birthday celebration</span>, or a{" "}
              <span className="font-semibold text-[#3498DB]">corporate event</span>, <strong>SLS Banquets</strong> in{" "}
              <strong>Kandrika, Vijayawada</strong> is your perfect venue.
            </p>
            <div className="mt-10">
              <Link href="#contact">
                <button
                  aria-label="Schedule a visit to SLS Banquets"
                  className="bg-gradient-to-r from-[#FFD447] to-[#FF6F61] text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-110 transform transition-all duration-500 shadow-xl hover:shadow-[#FFD447]/40"
                >
                  Schedule a Visit
                </button>
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
