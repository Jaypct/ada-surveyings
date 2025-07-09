import React, { useState } from "react";
import img3 from "../assets/team/1.jpg";
import img7 from "../assets/team/2.jpg";
import img4 from "../assets/team/3.jpg";
import img2 from "../assets/team/4.jpg";
import img5 from "../assets/team/5.jpg";
import img6 from "../assets/team/6.jpg";
import modalImg3 from "../assets/team/modal3.jpg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Teams = () => {
  const founderData = [
    {
      id: 1,
      image: img3,
      modalImage: img3,
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Engr. Agustini D. Amar",
      designation: "Founder",
      license: "PRC Reg. No.: 0011102",
      description: `Engr. Agustini D. Amar Jr. is the founder and principal geodetic engineer of ADA Surveying Services. He completed his Bachelor of Science degree in Geodetic Engineering at the University of the Philippines – Diliman, a notable institution recognized for academic and technical excellence. He earned his professional license from the Professional Regulation Commission (PRC) in 2021 and is an active member of the Geodetic Engineers of the Philippines (GEP), particularly within Region VI.

Engr. Amar specializes in a wide range of geospatial and land surveying services, with core expertise in land surveys, topographic mapping, and engineering surveys. His professional experience includes complex subdivision projects, land titling, and survey documentation for regulatory approvals involving various government agencies. He has also been involved in large-scale projects supporting the renewable energy sector, where accuracy, continuity, and coordination across expansive areas are essential. In addition, he has extensive experience in industrial surveys, boundary and cadastral assessments, and GIS-based mapping—delivering data-driven insights that support planning, development, and compliance.

With a strong commitment to precision, regulatory adherence, and technical integrity, Engr. Amar brings leadership grounded in field expertise and a results-oriented approach. Under his direction, ADA Surveying Services continues to provide professional, reliable, and forward-looking surveying solutions tailored to the evolving needs of clients in both the private and public sectors.`,
    },
  ];
  const teamsData = [
    {
      id: 1,
      image: img2,
      modalImage: img2,
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Nirabelle P. Dionela",
      designation: "Administrative Officer",
      description: `Nirabelle P. Dionela joined the company in September 2024 and has since become a vital part of its administrative operations. As the Administrative Officer, she plays a key role in managing the day-to-day office activities—coordinating internal tasks, maintaining essential records, supporting the staff, and ensuring a well-organized and productive work environment. She works closely with clients and project leads to make sure that all administrative requirements are met, contributing to the smooth execution of both in-office and field-related projects. Her logistical responsibilities include managing internal resources and ensuring that all necessary supplies and equipment are efficiently allocated and readily available.
    
    Known for her analytical thinking and strong sense of initiative, Ms. Dionela has proven to be an effective support figure within the team. She is involved in data processing, report generation, and the preparation of survey documentation, playing a quiet yet essential role in the technical and operational workflow.
    
   She earned her Bachelor of Science degree in Computer Science from Silay Institute Inc. in Silay City, Negros Occidental, and graduated in 2024 with distinction as a Cum Laude and a consistent Dean’s Lister, demonstrating a strong academic foundation and a commitment to excellence that she now brings to her professional work. `,
    },
    {
      id: 2,
      image: img3,
      modalImage: modalImg3,
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Mohammed S. Sahi",
      designation: "Lead CAD Operator",
      description: `Mohammed S. Sahi joined the company in January 2024 and currently serves as the Lead CAD Operator, where he is responsible for managing and producing technical drawings and documentation for various surveying and mapping projects. His role plays a crucial part in translating field data into precise and detailed visual outputs. He is actively involved in client communications, regularly presenting CAD drawings and clarifying technical aspects of project deliverables. In addition, he ensures that all outputs comply with industry standards and project specifications, contributing to the overall quality and integrity of the company’s deliverables.
    
    Known for his technical proficiency, problem-solving ability, and analytical mindset, Mr. Sahi excels in using Autodesk Civil3D, where he demonstrates expert-level proficiency. His day-to-day work includes drafting, digitizing existing plans, and maintaining the accuracy and regulatory compliance of all CAD outputs—ensuring that every design aligns with the project's technical and spatial requirements.
    
    Mr. Sahi earned his Bachelor of Engineering Technology, Major in Computer Engineering Technology from the Technological University of the Philippines – Visayas (TUPV), located in Talisay City, Negros Occidental, and graduated in 2022. His academic background and specialized training continue to support his role as a valuable technical contributor in the company’s surveying team.`,
    },
    {
      id: 3,
      image: img4,
      modalImage: img4,
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Marc Aronne Siason",
      designation: "Lead Instrument Man",
      description: `Marc Aronne Siason joined the company in September 2024 and currently holds the position of Administrative Assistant. As part of the technical and operations team, they support a range of responsibilities that include managing day-to-day office operations, coordinating with clients to ensure that requirements are met, and assisting in the mobilization and deployment of field teams.  
    
    He demonstrate strong personal strengths such as initiative, analytical thinking, and leadership. Although primarily in an administrative role, they are familiar with survey equipment such as UAVs, Total Stations, RTK, and Echo Sounders, and have a working knowledge of software tools like CAD, GIS, and other data processing applications, with a proficiency level ranging from intermediate to expert. Task often involve data processing, report preparation, and assisting in the compilation of survey documentation. While not a field surveyor by title, they have been actively involved in survey projects including Subdivision, Topographic, and Relocation surveys across various geographic locations such as Cebu, Tarlac, Batangas, Iloilo, Guimaras, Escalante, Silay, Talisay, Cadiz, Victorias, Bacolod, and Calbayog, Samar. This exposure has contributed significantly to their technical understanding and operational efficiency. 

    Additionally, they have experience in supporting team management and mentoring tasks within a diverse work environment. The employee holds a Bachelor of Science in Industrial Technology major in Mechanical Technology, which they earned from Carlos Hilado Memorial State College in 2018.`,
    },
    {
      id: 4,
      image: img5,
      modalImage: img5,
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Kyle Jacobe Suriaga",
      designation: "Survey Aide",
      description: `Nirabelle P. Dionela joined the company in September 2024 and has since become a vital part of its administrative operations. As the Administrative Officer, she plays a key role in managing the day-to-day office activities—coordinating internal tasks, maintaining essential records, supporting the staff, and ensuring a well-organized and productive work environment. She works closely with clients and project leads to make sure that all administrative requirements are met, contributing to the smooth execution of both in-office and field-related projects. Her logistical responsibilities include managing internal resources and ensuring that all necessary supplies and equipment are efficiently allocated and readily available.
    
    Known for her analytical thinking and strong sense of initiative, Ms. Dionela has proven to be an effective support figure within the team. She is involved in data processing, report generation, and the preparation of survey documentation, playing a quiet yet essential role in the technical and operational workflow.
    
   She earned her Bachelor of Science degree in Computer Science from Silay Institute Inc. in Silay City, Negros Occidental, and graduated in 2024 with distinction as a Cum Laude and a consistent Dean’s Lister, demonstrating a strong academic foundation and a commitment to excellence that she now brings to her professional work. `,
    },
    {
      id: 5,
      image: img6,
      modalImage: img6,
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Kierwin Key Alba",
      designation: "Survey Aide",
      description: `Nirabelle P. Dionela joined the company in September 2024 and has since become a vital part of its administrative operations. As the Administrative Officer, she plays a key role in managing the day-to-day office activities—coordinating internal tasks, maintaining essential records, supporting the staff, and ensuring a well-organized and productive work environment. She works closely with clients and project leads to make sure that all administrative requirements are met, contributing to the smooth execution of both in-office and field-related projects. Her logistical responsibilities include managing internal resources and ensuring that all necessary supplies and equipment are efficiently allocated and readily available.
    
    Known for her analytical thinking and strong sense of initiative, Ms. Dionela has proven to be an effective support figure within the team. She is involved in data processing, report generation, and the preparation of survey documentation, playing a quiet yet essential role in the technical and operational workflow.
    
   She earned her Bachelor of Science degree in Computer Science from Silay Institute Inc. in Silay City, Negros Occidental, and graduated in 2024 with distinction as a Cum Laude and a consistent Dean’s Lister, demonstrating a strong academic foundation and a commitment to excellence that she now brings to her professional work. `,
    },

    {
      id: 6,
      image: img7,
      modalImage: img7,
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Joshua R. Sibongga",
      designation: "Survey Aide",
      description: `Nirabelle P. Dionela joined the company in September 2024 and has since become a vital part of its administrative operations. As the Administrative Officer, she plays a key role in managing the day-to-day office activities—coordinating internal tasks, maintaining essential records, supporting the staff, and ensuring a well-organized and productive work environment. She works closely with clients and project leads to make sure that all administrative requirements are met, contributing to the smooth execution of both in-office and field-related projects. Her logistical responsibilities include managing internal resources and ensuring that all necessary supplies and equipment are efficiently allocated and readily available.
    
    Known for her analytical thinking and strong sense of initiative, Ms. Dionela has proven to be an effective support figure within the team. She is involved in data processing, report generation, and the preparation of survey documentation, playing a quiet yet essential role in the technical and operational workflow.
    
   She earned her Bachelor of Science degree in Computer Science from Silay Institute Inc. in Silay City, Negros Occidental, and graduated in 2024 with distinction as a Cum Laude and a consistent Dean’s Lister, demonstrating a strong academic foundation and a commitment to excellence that she now brings to her professional work. `,
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState(null);
  return (
    <section id="teams" className="px-4 md:px-10 py-10 min-h-screen">
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Our Teams</h1>
        <p className="text-lg text-black dark:text-white">
          - some of our experts -
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-10">
        <div className="bg-base-100 shadow-sm p-4 sm:p-6 min-h-[28rem] md:min-w-65 sm:max-w-90 flex flex-col justify-between">
          {founderData.map((founder, indx) => (
            <div key={indx}>
              <motion.figure
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                className="w-full aspect-[4/3] overflow-hidden"
              >
                <img
                  src={founder.image}
                  alt="Founder"
                  className="object-cover lg:w-70 w-full h-full rounded-md"
                />
              </motion.figure>
              <div className="card-body flex flex-col flex-1 min-h-10 w-auto md:text-sm justify-between items-center text-center">
                <div>
                  <motion.h2
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="card-title"
                  >
                    {founder.name}
                  </motion.h2>
                  <motion.p
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView="show"
                  >
                    {founder.designation}
                  </motion.p>
                </div>

                <motion.button
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn w-full min-w-30 mt-4 px-4 py-2 text-sm md:text-base bg-[#ffde01] text-black rounded-lg hover:border-[#ffde01] hover:bg-black hover:text-white transition-color duration-300"
                  onClick={() => {
                    setSelectedTeam(founder);
                    document.getElementById("teamModal").showModal();
                  }}
                >
                  Meet {founder.name.split(" ")[0]}
                </motion.button>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-md:w-screen gap-6 px-4">
            {teamsData.map((team) => (
              <div
                key={team.id}
                className="card bg-base-100 shadow-sm p-10 sm:p-6 min-h-[28rem] lg:min-w-65 md:min-w-60 flex flex-col justify-between"
              >
                <motion.figure
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  className="w-full aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={team.image}
                    alt={`Photo of ${team.name}`}
                    className="object-cover w-full h-full rounded-md"
                  />
                </motion.figure>

                <div className="card-body flex flex-col flex-1 justify-between items-center text-center mt-4">
                  <div>
                    <motion.h2
                      variants={fadeIn("right", 0.3)}
                      initial="hidden"
                      whileInView="show"
                      className="card-title text-lg sm:text-xl"
                    >
                      {team.name}
                    </motion.h2>
                    <motion.p
                      variants={fadeIn("left", 0.3)}
                      initial="hidden"
                      whileInView="show"
                      className="text-sm sm:text-base"
                    >
                      {team.designation}
                    </motion.p>
                  </div>

                  <motion.button
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn w-full mt-4 px-4 py-2 text-sm sm:text-base bg-[#ffde01] text-black rounded-lg hover:border-[#ffde01] hover:bg-black hover:text-white transition-colors duration-300"
                    onClick={() => {
                      setSelectedTeam(team);
                      document.getElementById("teamModal").showModal();
                    }}
                  >
                    Meet {team.name.split(" ")[0]}
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <dialog id="teamModal" className="modal">
          <div className="modal-box w-[95%] sm:max-w-2xl lg:max-w-3xl overflow-y-auto max-h-[80vh]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className=" border-b-2 h-10 flex justify-end">
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
              </div>
            </form>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left: Image and Info */}
              <div className="p-6 flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
                <img
                  src={selectedTeam?.image}
                  alt={selectedTeam?.name}
                  className="w-full h-auto rounded-lg object-cover"
                />
                <h3 className="font-bold text-lg mt-4">
                  {selectedTeam?.name || "No name"}
                </h3>
                <p className="py-2 text-[#ffde01]">
                  {selectedTeam?.designation || "Team member"}
                </p>
              </div>

              {/* Right: Description */}
              <div className="md:w-2/3">
                <p className="text-sm md:mt-5 text-black dark:text-white whitespace-pre-wrap break-words">
                  {selectedTeam?.description || "No description provided."}
                </p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );

  //
};

export default Teams;
