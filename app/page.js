import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";
import Services from "./components/Services";
import Facilities from "./components/Facilities";
import SEO from "./components/SEO";

export const metadata = {
  title: " SLS Banquets (Kandrika) | Best Banquet Hall in Vijayawada ",
  description:
    "SLS Banquets – best mini function hall in Vijayawada (Kandrika/Payakapuram). Perfect for weddings, engagements, naming ceremony, birthdays, corporate events (50-100 guests).",
  keywords: [
    "best banquet halls in Vijayawada",
    "banquet halls Vijayawada",
    "function halls in Vijayawada",
    "mini function hall in Vijayawada",
    "banquet hall for 100 people Vijayawada",
    "affordable function hall Vijayawada",
    "birthday party halls Vijayawada",
    "engagement halls in Vijayawada",
    "small event hall Vijayawada",
    "banquet hall in Kandrika Vijayawada",
    "mini hall in Payakapuram Vijayawada",
    "private party hall in Vijayawada",
  ],
  openGraph: {
    title: "Best Banquet Hall in Vijayawada | SLS Banquets",
    description:
      "Premium AC mini function hall in Kandrika, Vijayawada. Weddings, receptions, birthdays, corporate events.",
    url: "/",
    images: [{ url: "/heroimg1.jpg", width: 1200, height: 630, alt: "SLS Banquets Vijayawada" }],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <Services/>
        <Gallery />
        <Facilities/>
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  );
}
