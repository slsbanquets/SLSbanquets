// "use client";
// import {
//   PhoneIcon,
//   EnvelopeIcon,
//   MapPinIcon,
// } from "@heroicons/react/24/outline";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 border-b border-gray-700">
        
//         {/* Column 1 - Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-white">SLS Banquets</h2>
//           <p className="mt-3 text-sm text-gray-400">
//             The Mini Function Hall – A perfect venue for weddings,
//             celebrations, and memorable gatherings.
//           </p>
//         </div>

//         {/* Column 2 - Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
//             <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
//             <li><a href="#about" className="hover:text-white">About Us</a></li>
//             <li><a href="#contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>

//         {/* Column 3 - Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-center gap-2">
//               <PhoneIcon className="w-5 h-5 text-indigo-400" />
//               <span>+91 7672024124 ,</span>
//               <span>+91 9848043782</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <EnvelopeIcon className="w-5 h-5 text-indigo-400" />
//               <span>slsbanquets@gmail.com</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPinIcon className="w-13 h-13 text-indigo-400" />
//               <span>S L S ENCLAVE,
//                     DNO: 77-149-20,
//                     Plot No: 137; 
//                    Journalist Colony,
//                    Rajiv-Kandrika Main Rd (48 R Bus route)
//                    Payakapuram,
//                   Vijayawada.</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="text-center py-6 text-sm text-gray-400">
//         © {new Date().getFullYear()} SLS Banquets. All rights reserved.
//       </div>
//     </footer>
//   );
// }



//---------------After Apply the SEO -------------------

"use client";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 border-b border-gray-700">
        
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">SLS Banquets</h2>
          <p className="mt-3 text-sm text-gray-400">
            The Mini Function Hall – A perfect venue for weddings,
            celebrations, and memorable gatherings.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-indigo-400" aria-hidden="true" />
              <a href="tel:+917672024124" className="hover:underline">+91 7672024124</a>,
              <a href="tel:+919848043782" className="hover:underline">+91 9848043782</a>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-indigo-400" aria-hidden="true" />
              <a href="mailto:slsbanquets@gmail.com" className="hover:underline">
                slsbanquets@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="w-5 h-5 text-indigo-400 mt-1" aria-hidden="true" />
              <address className="not-italic">
                S L S ENCLAVE, DNO: 77-149-20, Plot No: 137, Journalist Colony,
                Rajiv-Kandrika Main Rd (48 R Bus route), Payakapuram, Vijayawada, Andhra Pradesh, India
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} SLS Banquets. All rights reserved.
      </div>
    </footer>
  );
}
