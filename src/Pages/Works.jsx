import React, { useState } from "react";
import img from "../assets/works/samar1.png";
import lunaImage from "../assets/works/luna.png";
import lunaImage2 from "../assets/works/luna2.png";
import lunaImage3 from "../assets/works/luna3.png";
import gomezImage from "../assets/works/gomez.png";
import gomezImage2 from "../assets/works/gomez2.png";
import gomezImage3 from "../assets/works/gomez3.png";
import samarImage from "../assets/works/samar1.png";
import samarImage2 from "../assets/works/samar2.png";
import samarImage3 from "../assets/works/samar3.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const worksData = [
    {
      image: lunaImage,
      image2: lunaImage2,
      image3: lunaImage3,
      title: "Relocation - Segregation Survey",
      subtitle: "BRGY. LUNA",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: gomezImage,
      image2: gomezImage2,
      image3: gomezImage3,
      title: "Relocation Survey",
      subtitle: "GOMEZ STREET SILAY CITY",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: samarImage,
      image2: samarImage2,
      image3: samarImage3,
      title: "Staking and Claimants Verification Survey",
      subtitle: "SAMAR (GWEC)",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      image2: img,
      image3: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
    {
      image: img,
      title: "Branding",
      subtitle: "Branding",
      description:
        "This is a description for the selected work. You can display more details here.",
    },
  ]; // You can replace this with dynamic images if needed

  const [selectedWork, setSelectedWork] = useState(null);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(worksData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = worksData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section id="works" className="-scroll-mt-15 p-10 min-h-screen">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold ">Our Works</h1>
        <p className="text-lg text-black dark:text-white">
          - our awesome works -
        </p>
      </motion.div>

      {/* Responsive Grid of Images */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
      >
        {currentItems.map((work, index) => (
          <div
            key={index}
            className="mt-10 max-md:border-2 p-2 border-white group w-full max-w-xs mx-auto h-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative cursor-pointer"
            onClick={() => {
              setSelectedWork(work);
              document.getElementById("worksModal").showModal();
            }}
          >
            {/* Image container with TikTok aspect ratio 9:16 */}
            <div className="relative w-full aspect-[9/12]">
              <img
                src={work.image}
                alt={`work-${index}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay - visible on all screen sizes, positioned bottom with some padding */}
              <div className="hidden md:block absolute bottom-0 inset-x-0 bg-[rgba(0,0,0,0.6)] text-white p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-[#ffde01] text-lg font-semibold">
                  {work.title}
                </h3>
                <p className="text-sm">{work.subtitle}</p>
              </div>
            </div>

            {/* Optional: Title below image on small screens (if you want) */}
            <div className="block md:hidden mt-2 text-center">
              <h3 className="text-[#ffde01] text-lg font-semibold">
                {work.title}
              </h3>
              <p className="text-sm">{work.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <div className="join">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`join-item btn w-10 h-10 text-center rounded-sm transition-all duration-300 border border-gray-300 ${
                currentPage === index
                  ? "bg-[#ffde01] text-black font-semibold"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <dialog id="worksModal" className="modal p-10">
        <div className="modal-box w-full max-w-3xl overflow-y-auto max-h-[80vh]">
          {/* Content */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">{selectedWork?.title}</h3>
            <p className="py-2">{selectedWork?.subtitle}</p>
            <p className="pb-4">{selectedWork?.description}</p>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <img
              src={selectedWork?.image}
              alt="work"
              style={{ display: selectedWork?.image ? "block" : "none" }}
              className="w-full sm:w-[30%] object-cover rounded-md"
            />
            <img
              src={selectedWork?.image2}
              alt="work"
              style={{ display: selectedWork?.image2 ? "block" : "none" }}
              className="w-full sm:w-[30%] object-cover rounded-md"
            />
            <img
              src={selectedWork?.image3}
              alt="work"
              style={{ display: selectedWork?.image3 ? "block" : "none" }}
              className="w-full sm:w-[30%] object-cover rounded-md"
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default Works;
