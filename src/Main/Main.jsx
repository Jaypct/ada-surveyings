import React from "react";
import Hero from "../Pages/Hero";
import About from "../Pages/About1";
import Services from "../Pages/Services";
import Works from "../Pages/Works";
import Teams from "../Pages/Teams";
import Contact from "../Pages/Contact";

const Main = () => {
  // Simple fade-in animation for each section

  return (
    <div className="slider-container w-full m-auto overflow-x-hidden">
      <section className="min-h-screen">
        <Hero />
      </section>
      <section className="min-h-screen lg:p-30 p-10">
        <About />
      </section>
      <section className="min-h-screen lg:p-30 p-10">
        <Services />
      </section>
      <section className="min-h-screen lg:p-30 p-10">
        <Works />
      </section>
      <section className="min-h-screen lg:p-30 p-10">
        <Teams />
      </section>
      <section className="min-h-screen lg:p-30 p-10">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
