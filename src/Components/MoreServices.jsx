import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsFillPuzzleFill, BsFillHouseFill } from "react-icons/bs";
import { FaSearch, FaTools } from "react-icons/fa";
import { FaMountainSun, FaLocationDot } from "react-icons/fa6";
import { IoCheckboxOutline, IoAirplaneSharp } from "react-icons/io5";
import { GiBigWave, GiDeliveryDrone } from "react-icons/gi";
import { RiSurveyFill } from "react-icons/ri";
import { GiPin } from "react-icons/gi";
import { CgRuler } from "react-icons/cg";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import MapComponent from "../Sample/MapComponent";
import { fadeIn, textVariant } from "../utils/motion";

const notifySucess = () => toast.success("Sent Successfully!");
const notifyError = () => toast.error("Failed to send message.");

const MoreServices = () => {
  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    cel_num: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_mysu3wd", // Your EmailJS service ID
        "template_0swp5je", // Your EmailJS template ID
        formRef.current,
        "yN4z9qhMnunLtMEIz" // Your EmailJS public key
      )
      .then(
        (result) => {
          notifySucess();
          formRef.current.reset();
          setLoading(false);
          document.getElementById("my_modal_3").close();
        },
        (error) => {
          notifyError();
          setLoading(false);
        }
      );
  };

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
    {
      id: 5,
      icon: <BsFillHouseFill />,
      title: "As-Built Survey",
      question: "Worried your construction is off-plan?",
      description:
        "An As-Built Survey checks and documents what has actually been built on-site. It helps ensure your construction aligns with plans, making it easier to pass inspections, apply for permits, and avoid costly mistakes during or after building.",
    },
    {
      id: 6,
      icon: <GiBigWave />,
      title: "Hydrographic Survey",
      question: "Planning near water?",
      description:
        "Our Hydrographic Survey maps underwater features, depths, and contours in rivers, lakes, and coastal areas. It’s crucial for safe navigation, marine construction, reclamation, and flood risk analysis. We help you avoid surprises under the surface.",
    },
    {
      id: 7,
      icon: <FaTools />,
      title: "Engineering and Specialized Survey",
      question: "Precision is everything in infrastructure projects.",
      description:
        "We provide highly accurate data for roads, bridges, tunnels, and large-scale engineering works. From elevations to alignments, we support design and construction with exact measurements—ensuring safety, quality, and regulatory compliance.",
    },
    {
      id: 8,
      icon: <CgRuler />,
      title: "Construction and Alignment Survey",
      question: "Don’t let misaligned structures ruin your project.",
      description:
        "This survey ensures buildings, roads, and utilities are built exactly where they should be—according to plan. We guide contractors with pinpoint accuracy to avoid reworks, delays, or costly legal issues.",
    },
    {
      id: 9,
      icon: <IoAirplaneSharp />,
      title: "CAAP Height Clearance & Obstacle Limitation Assistance",
      question: "Building near an airport?",
      description:
        "We help you secure CAAP clearance by checking your structure against aviation height limits and obstacle regulations. This service protects lives and fast-tracks your approval process for hassle-free development near flight paths.",
    },
    {
      id: 10,
      icon: <RiSurveyFill />,
      title: "Survey Plan Approval & Titling Assistance",
      question: "Confused by government survey and titling requirements?",
      description:
        "We simplify the process by assisting with plan approval from DENR and other agencies, and guiding you through land titling. We make sure your land is legally recognized and properly documented—worry-free.",
    },
    {
      id: 11,
      icon: <FaLocationDot />,
      title: "Vicinity & Location Mapping",
      question: "Need to show where your property is?",
      description:
        "Need to show where your property is?We create clear maps showing your land’s location relative to roads, landmarks, and other features. These are essential for permits, project proposals, and official documentation—making your property easy to locate and understand.",
    },
    {
      id: 12,
      icon: <GiDeliveryDrone />,
      title: "Drone Surveying & GIS Mapping",
      question: "Need fast, detailed, and high-tech land insights?",
      description:
        "Using drones and Geographic Information Systems (GIS), we capture aerial data and create detailed 2D/3D maps and models. This service helps you plan smarter, monitor progress, and make informed decisions with speed and accuracy.",
    },
    {
      id: 13,
      icon: <GiPin />,
      title: "Control Station Establishment",
      question: "Need a reliable reference for large-scale surveys?",
      description:
        "We set up fixed control points on the ground—ensuring all your future surveys are based on accurate, consistent coordinates. Ideal for subdivisions, infrastructure, and long-term projects that demand professional-grade precision.",
    },
  ];
  return (
    <section id="services" className="p-10">
      <Toaster />
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
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
      >
        {serviceData.map((s, index) => {
          return (
            <div
              key={index}
              className={
                "card group border-2 border-[#D1D9E0] dark:border-amber-600 w-full h-full p-6 shadow-md shadow-[rgba(0,0,0,0.5)] dark:shadow-[rgba(255,165,0,0.5)] rounded-3xl hover:-translate-y-3 duration-300 transition-all"
              }
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
              <button
                className="btn text-black m-auto w-[200px] mt-30 p-3 flex justify-center items-center flex=2 bg-[#ffde01] rounded-lg border hover:bg-black hover:text-white hover:border-[#ffde01] transition-all duration-300 cursor-pointer"
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                  setSelectedService(s);
                }}
              >
                Request a qoute
              </button>
            </div>
          );
        })}
      </motion.div>

      {/* map */}

      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-10 md:p-6">
        <MapComponent />
        <div className="flex flex-col md:w-1/2 w-full">
          <div>
            <motion.h1
              variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              className="text-2xl md:text-5xl sm:text-3xl font-bold"
            >
              Major Project Milestones
            </motion.h1>
          </div>
          <div>
            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              className="text-lg mt-5"
            >
              Since its inception in February 2008, ESC has expanded its land
              surveying operations from the Negros Island to its neighboring
              regions in the Visayas to the NCR and the greater Manila area to
              major cities in Mindanao and eventually the MIMAROPA region.
            </motion.p>
          </div>
          <div>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              className="text-lg mt-10"
            >
              Click on the markers to view more details.
            </motion.p>
          </div>
        </div>
      </div>

      {/* button */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
      >
        <button
          className="btn mt-10 text-black mx-auto w-10/12 sm:w-6/12 md:mt-0 md:w-4/12 lg:w-3/12 xl:w-2/12 p-3 flex justify-center items-center bg-[#ffde01] rounded-lg border hover:bg-black hover:text-white hover:border-[#ffde01] transition-all duration-300 cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Request a qoute
        </button>
      </motion.div>

      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <Toaster />
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form ref={formRef} className="max-w-md mx-auto" onSubmit={sendEmail}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="fullname"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full name
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  name="cel_num"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <select
                  name="selectedServices"
                  id="service_interest"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  defaultValue=""
                  onChange={handleChange}
                >
                  <option
                    value={selectedService?.title || ""}
                    className="text-black"
                  >
                    {selectedService?.title || "Select a service"}
                  </option>
                  {serviceData.map((s) => (
                    <option key={s.id} value={s.title} className="text-black">
                      {s.title}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="service_interest"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Service Interested In
                </label>
              </div>
            </div>
            {/* Textarea at the bottom */}
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="text-black bg-[#ffde01] hover:bg-black hover:text-white transition-color duration-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default MoreServices;
