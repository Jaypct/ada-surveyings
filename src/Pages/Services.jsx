import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPuzzleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { IoCheckboxOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "../Layout/Navbar/Navbar";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      icon: <IoCheckboxOutline />,
      title: "Relocation/Boundary Survey",
      question: "Worried about land disputes or unclear property lines?",
      description: `Our Relocation or Boundary Survey clearly marks your property boundaries using legal monuments, giving you peace of mind. Whether you're building a home or securing your investment, we ensure you know exactly what you own—no guessing, no conflicts.`,
    },
    {
      id: 2,
      icon: <BsFillPuzzleFill />,
      title: "Subdivision/Consilidation Survey",
      question: "Expanding or dividing your property?",
      description:
        "We handle the technical and legal process of dividing a property into smaller lots (subdivision) or merging multiple lots into one (consolidation). Perfect for landowners, developers, and families planning to sell, title, or build. We ensure compliance with DENR standards—making titling and development stress-free.",
    },
    {
      id: 3,
      icon: <FaSearch />,
      title: "Verification Survey",
      question: "Not sure if the old documents match your actual land?",
      description:
        "Our Verification Survey cross-checks what’s on paper with what’s on the ground. It’s essential for settling land disputes, confirming boundaries, or verifying old survey records before making any property transaction or development decision.",
    },
    {
      id: 4,
      icon: <FaMountainSun />,
      title: "Topographic Survey",
      question: "Need to understand your land’s shape before building?",
      description:
        "Our Topographic Survey captures the elevation, slopes, and features of your property—natural and man-made. It’s the foundation for good design, ensuring you don’t build on unstable ground or overlook drainage, slope, or terrain issues.",
    },
  ];

  const navigate = useNavigate();
  return (
    <section id="services" className="-scroll-mt-24 px-6 py-8">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="title text-center"
      >
        <h1 className="text-3xl font-bold mt-10">What we do</h1>
        <p className="text-lg text-black dark:text-white">
          - services we provide -
        </p>
      </motion.div>
      <div className="flex gap-25 flex-wrap justify-center p-6 text-center">
        {serviceData.map((s, index) => (
          <div
            key={index}
            className="card group border-2 border-[#D1D9E0] dark:border-amber-600 min-w-50 w-100 h-auto p-6 shadow-md shadow-[rgba(0,0,0,0.5)] dark:shadow-[rgba(255,165,0,0.5)] rounded-3xl hover:-translate-y-3 duration-300 transition-all"
          >
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full text-2xl text-[#ffde01] transition-colors duration-300 ease-in-out group-hover:bg-[#ffde01] group-hover:text-black"
            >
              <span className="scale-125 group-hover:scale-100 transition-colors duration-300 text-2xl font-bold hover:text-2xl hover:font-bold">
                {s.icon}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              className="font-bold md:text-xl text-lg"
            >
              {s.title}
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="show"
              className="text-sm text-white italic font-medium mb-5"
            >
              {s.question}
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="overflow-auto h-auto"
            >
              {s.description}
            </motion.p>
          </div>
        ))}
      </div>
      <div>
        <motion.button
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-black m-auto w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 p-3 flex justify-center items-center bg-[#ffde01] rounded-lg border hover:bg-black hover:text-white hover:border-[#ffde01] transition-colors duration-300 cursor-pointer"
          onClick={() => {
            navigate("/more-services");
          }}
        >
          More Services
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
