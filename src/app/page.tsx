import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Service />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
