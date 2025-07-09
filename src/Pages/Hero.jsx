import img from "../assets/imgHero/img1.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero1 = () => {
  return (
    <section
      id="home"
      className="relative p-10 min-h-screen w-full flex flex-col justify-center items-center gap-10 overflow-hidden"
    >
      {/* Text Section */}
      <div className="text-center max-w-xl animate-fade-in-left">
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="text-6xl md:text-5xl font-bold">
            Major Project Milestones
          </h1>
          <p className="text-lg md:text-2xl mb-5 mt-6">
            Delivering accurate and dependable surveying solutions for seamless
            project execution and development.
          </p>
        </motion.div>
        <motion.button
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="bg-[#ffde01] text-black border px-5 py-2 mt-10 rounded-lg hover:bg-black hover:text-[#ffde01] hover:border-[#ffde01]  transition-colors duration-300 cursor-pointer"
        >
          Learn more {">"}
        </motion.button>
      </div>

      {/* Image Section */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        className="hidden md:flex justify-center items-end flex-wrap animate-fade-in-right -z-10"
      >
        {[1, 2, 3, 4].map((_, index) => {
          const positionClass =
            index === 0 || index === 3 ? "-translate-y-20" : "translate-y-0";

          const leftAndRight =
            index === 0 || index === 1
              ? "drop-shadow-[-10px_0_0_white]"
              : "drop-shadow-[10px_0_0_white]";

          return (
            <img
              key={index}
              src={img}
              alt={`Project Illustration ${index + 1}`}
              className={`w-full sm:w-1/2 md:w-1/4 xl:w-[20rem] h-auto ${leftAndRight} -m-2 transform ${positionClass}`}
            />
          );
        })}
      </motion.div>

      {/* Pentagon background behind images */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        className="clip-pentagon bg-[#ffde01] w-screen h-100 absolute bottom-1 0 left-0 -z-100 overflow-hidden"
      />
    </section>
  );
};

export default Hero1;
