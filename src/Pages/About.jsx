import React from "react";
import aboutImg from "../assets/about/img1.jpg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section id="about" className="-scroll-mt-24 px-6 py-8">
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col justify-center items-center text-center "
      >
        <h1 className="text-3xl md:text-4xl font-bold mt-10">About Us</h1>
        <p className="text-lg text-black dark:text-white">
          Learn more about us
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl m-auto p-6">
        {/* Text Block */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          className="w-full"
        >
          <p className="text-justify text-base md:text-lg leading-relaxed">
            <strong>ADA Land Surveying Services</strong> is a licensed and
            dynamic surveying firm founded in 2022 in Silay City, Negros
            Occidental.
            <br />
            With a commitment to accuracy, client trust, and technological
            advancement, ADA has steadily built a reputation among real estate
            developers, government agencies, contractors, and private landowners
            across the Philippines.
            <br />
            We provide fast, reliable, and cost-efficient surveying solutions
            that help clients make better decisions, stay compliant, and keep
            their projects on track.
          </p>
        </motion.div>

        {/* Image Block */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          className="w-full flex justify-center"
        >
          <img
            src={aboutImg}
            alt="about"
            className="w-full max-w-md h-auto rounded-2xl object-cover"
          />
        </motion.div>

        {/* Vision */}
        <motion.div
          className="w-full"
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-base leading-relaxed">
            To become the go-to land surveying partner in the Philippines,
            trusted for innovative solutions, effective communication, and
            delivering sharp results every time.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          className="w-full"
        >
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-base leading-relaxed">
            To deliver smart, precise, and dependable geospatial services by
            leveraging modern tools, upholding professional integrity, and
            fostering flexible, collaborative relationships that align with
            client timelines and success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
