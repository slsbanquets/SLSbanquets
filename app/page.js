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
