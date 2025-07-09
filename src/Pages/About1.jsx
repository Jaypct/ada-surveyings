import React from "react";
import aboutImg from "../assets/about/img1.jpg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-stretch gap-7"
    >
      {/* Left: Image */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        className="relative w-full md:w-1/2 min-h-[300px] min-w-1/2 md:min-h-0 flex items-stretch"
      >
        <img
          src={aboutImg}
          alt="about"
          className="absolute md:static inset-0 w-full h-full object-cover object-center"
          style={{
            minHeight: "100%",
            minWidth: "100%",
            height: "100%",
            width: "100%",
          }}
        />
      </motion.div>

      {/* Right: Content with pattern overlay */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center py-10 md:py-0 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-center">
          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white text-center"
          >
            About Us
          </motion.h1>
          <motion.h2
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-2xl md:text-3xl font-semibold mb-4 text-black dark:text-white text-center"
          >
            Learn more about us
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="flex justify-center"
          >
            <p className="text-base md:text-lg leading-relaxed mb-6 text-black dark:text-white text-center max-w-2xl">
              ADA Land Surveying Services is a licensed and dynamic surveying
              firm founded in 2022 in Silay City, Negros Occidental. With a
              commitment to accuracy, client trust, and technological
              advancement, ADA has steadily built a reputation among real estate
              developers, government agencies, contractors, and private
              landowners across the Philippines. We provide fast, reliable, and
              cost-efficient surveying solutions that help clients make better
              decisions, stay compliant, and keep their projects on track.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-stretch text-center">
            {/* Vision */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              className="flex-1 bg-transparent flex flex-col grow-1"
            >
              <h3 className="font-bold text-lg mb-1 text-black dark:text-white text-center">
                Our Vision
              </h3>
              <p className="text-black dark:text-white text-base leading-relaxed text-center">
                To become the go-to land surveying partner in the Philippines,
                trusted for innovative solutions, effective communication, and
                delivering sharp results every time.
              </p>
            </motion.div>
            {/* Divider for desktop */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              className="hidden md:block w-px bg-black dark:bg-white/30 mx-2 self-stretch"
            ></motion.div>
            {/* Mission */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              className="flex-1 bg-transparent flex flex-col grow-1"
            >
              <h3 className="font-bold text-lg mb-1 text-black dark:text-white text-center">
                Our Mission
              </h3>
              <p className="text-black dark:text-white text-base leading-relaxed text-center">
                To deliver smart, precise, and dependable geospatial services by
                leveraging modern tools, upholding professional integrity, and
                fostering flexible, collaborative relationships that align with
                client timelines and success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
