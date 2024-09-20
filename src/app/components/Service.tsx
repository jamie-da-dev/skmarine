"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Gallery from "./Gallery";

const services = [
  {
    name: "Engine Maintenance, Repair",
    description: "Servicing outboard, inboard, and sterndrive engines.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798166/1_toylei.png",
  },
  {
    name: "Electrical System Repair",
    description:
      "Battery replacement, wiring fixes, and electrical diagnostics.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798169/2_y8mj6l.png",
  },
  {
    name: "Fuel System Maintenance",
    description:
      "Fuel filter changes, fuel line inspections, and carburetor work.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798168/3_ws17wd.png",
  },
  {
    name: "Trailer Maintenance",
    description: "Brake checks, tire replacements, and bearing services.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798175/4_l0nqqq.png",
  },
  {
    name: "Propulsion System Services",
    description: "Propeller replacement, steering, and trim systems repair.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798166/5_ypflu6.png",
  },
  {
    name: "Plumbing, Cooling Systems",
    description:
      "Maintenance of bilge pumps, water pumps, and cooling systems.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798167/6_mxgvwo.png",
  },
  {
    name: "Safety Equipment Installation",
    description:
      "Inspection and installation of safety gear like fire extinguishers, life jackets, etc.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798165/7_xhvj4j.png",
  },
  {
    name: "And More...",
    description: "Please enquire if you don't see what you need.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726798167/8_x5abhc.png",
  },
];

const Services: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  return (
    <section
      id="service"
      className="scroll-offset bg-white py-16 text-white relative"
    >
      <div className="container mx-auto text-center overflow-x-hidden">
        <h2 className="text-6xl text-blue-950 font-bold mb-12">SERVICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const splitName = service.name.split(" ");
            return (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 aspect-w-1 aspect-h-1"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 p-4 bg-black bg-opacity-50 transition-all duration-300">
                  <h3
                    className="absolute bottom-4 left-6 text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-6xl sm:text-5xl text-gray-100 uppercase drop-shadow-lg transition-all duration-500 ease-in-out transform group-hover:left-[-150%] origin-left whitespace-nowrap text-left"
                    style={{ lineHeight: "0.75" }}
                  >
                    {splitName.map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>
                  <p className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out text-white text-center text-4xl xl:text-3xl lg:text-xl sm:text-3xl">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>{" "}
        <button
          onClick={() => setIsGalleryOpen(true)}
          className="bg-blue-950 hover:bg-blue-800 transition duration-300 text-white text-2xl font-bold py-2 px-4 rounded mt-16"
        >
          Previous Work
        </button>
        <Gallery
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
        <Marquee speed={125} className="pt-10">
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/yamaha_kymu75.png"
            alt="Yamaha Logo"
            width={400}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain mr-12"
            priority
          />
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/suzuki_ycapgc.png"
            alt="Suzuki Logo"
            width={400}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain mr-12"
          />
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/honda_exhrvd.png"
            alt="Honda Logo"
            width={400}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain mr-12"
          />
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/mercury_lrtxxb.png"
            alt="Mercury Logo"
            width={400}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain mr-12"
          />{" "}
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726721529/Evinrude_Brp_j33lls.png"
            alt="Evinrude Logo"
            width={400}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain mr-12"
          />{" "}
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1726721776/tohatsu-logo_y0oavv.png"
            alt="Tohatsu Logo"
            width={400}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="object-contain mr-12"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
