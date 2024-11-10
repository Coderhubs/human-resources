import Image from "next/image";
import Navbar from "./components/navbar"
import Hero from  "./components/Hero"
import About from "./components/About"
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
