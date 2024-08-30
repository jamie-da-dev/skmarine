import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Service />
      <About />
      <Footer />
    </div>
  );
}
