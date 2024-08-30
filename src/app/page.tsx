import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Service />
    </div>
  );
}
