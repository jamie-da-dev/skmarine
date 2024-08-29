import React from "react";

const Intro: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50"></div>
    </section>
  );
};

export default Intro;
