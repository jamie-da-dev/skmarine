import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-offset bg-gray-100 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-7xl font-bold text-blue-950">About</h2>
          <p className="mt-12 text-4xl text-blue-900">
            Driven by a passion for delivering top-quality marine services with
            a personal touch.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img
              src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1724994431/logo2_puebjh.png"
              alt="Jack"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:order-1">
            <p className="text-2xl text-gray-500 leading-relaxed mb-10 hover:text-gray-900 transition-colors duration-300">
              The journey began in 2009, when I first entered the marine
              industry in South Korea. With a deep-rooted love for the ocean and
              a commitment to excellence, I honed my skills and expertise over
              the years.
            </p>
            <p className="mt-4 text-2xl text-gray-500 leading-relaxed mb-10 hover:text-gray-900 transition-colors duration-300">
              In 2014, I brought my talents to New Zealand, joining Silverdale
              Marine in Silverdale, where I worked until 2022. During this time,
              I built a reputation for my dedication, technical know-how, and
              genuine care for every boat and client I worked with.
            </p>
            <p className="mt-4 text-2xl text-gray-500 leading-relaxed mb-10 hover:text-gray-900 transition-colors duration-300">
              In 2022, I took the bold step of starting my own venture—SK
              Marine. Our business is built on the foundation of years of
              experience, a strong work ethic, and the belief that every boat
              deserves the best care possible.
            </p>
            <p className="mt-4 text-2xl text-gray-500 leading-relaxed mb-10 hover:text-gray-900 transition-colors duration-300">
              At SK Marine, we&apos;re not just about fixing boats; we&apos;re
              about building relationships, ensuring your vessel is in the best
              hands, and making your marine experience as smooth and enjoyable
              as possible.
            </p>
            <p className="mt-4 text-2xl text-gray-900 leading-relaxed hover:text-red-600 transition-colors duration-300">
              Whether you need routine maintenance, complex repairs, or expert
              advice, we&apos;re here to help. Welcome to SK Marine—where your
              boat is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
