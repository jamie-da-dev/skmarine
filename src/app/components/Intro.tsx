import React from "react";

const Intro: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dzdr7yyz4/video/upload/v1725000194/background_wvse3r.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50"></div>
      <div className="absolute md:bottom-8 md:right-8 lg:bottom-16 lg:right-16 bottom-4 right-4 sm:text-center text-right">
        <img
          src="https://res.cloudinary.com/dzdr7yyz4/image/upload/v1725706558/logo2_pcgy20.png"
          alt="SK MARINE LOGO"
          className="2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-sm sm:max-w-xs max-w-[50%] ml-auto h-auto"
        />
        <p className="mt-2 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl text-gray-300">
          Your Marine Experts for Every Voyage.
        </p>
      </div>
    </section>
  );
};

export default Intro;
