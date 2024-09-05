import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const services = [
  {
    name: "Engine Maintenance, Repair",
    description: "Servicing outboard, inboard, and sterndrive engines.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
  {
    name: "Electrical System Repair",
    description:
      "Battery replacement, wiring fixes, and electrical diagnostics.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
  {
    name: "Fuel System Maintenance",
    description:
      "Fuel filter changes, fuel line inspections, and carburetor work.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
  {
    name: "Hull Repairs",
    description: "Fixing cracks, scratches, and other hull damage.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
  {
    name: "Propulsion System Services",
    description: "Propeller replacement, steering, and trim systems repair.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
  {
    name: "Plumbing, Cooling Systems",
    description:
      "Maintenance of bilge pumps, water pumps, and cooling systems.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
  {
    name: "Safety Equipment Installation",
    description:
      "Inspection and installation of safety gear like fire extinguishers, life jackets, etc.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
  {
    name: "Trailer Maintenance",
    description: "Brake checks, tire replacements, and bearing services.",
    image:
      "https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988289/test_ocuuty.webp",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="service"
      className="scroll-offset bg-white py-16 text-white relative"
    >
      <div className="container mx-auto text-center">
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
        </div>
        <Marquee className="pt-16">
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/yamaha_kymu75.png"
            alt="Yamaha Logo"
            width={400}
            height={0}
            className="object-contain"
          />
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/suzuki_ycapgc.png"
            alt="Suzuki Logo"
            width={400}
            height={0}
            className="object-contain"
          />
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/honda_exhrvd.png"
            alt="Honda Logo"
            width={400}
            height={0}
            className="object-contain"
          />
          <Image
            src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724988277/mercury_lrtxxb.png"
            alt="Mercury Logo"
            width={400}
            height={0}
            className="object-contain"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
