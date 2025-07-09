import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const notifySucess = () => toast.success("Email Successfully Sent");
const notifyError = () => toast.error("Failed to send message.");

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    cel_number: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!form.user_name.trim()) newErrors.user_name = "Name is required";
    if (!form.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.user_email)) {
      newErrors.user_email = "Invalid email address";
    }
    if (!form.cel_number.trim())
      newErrors.cel_number = "Contact number is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);

    emailjs
      .sendForm(
        "service_mysu3wd", // Replace with your EmailJS service ID
        "template_p26nl2g", // Replace with your EmailJS template ID
        formRef.current, // Form element
        "yN4z9qhMnunLtMEIz" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          notifySucess();
          formRef.current.reset(); // optional: clear form
          setLoading(false);
        },
        (error) => {
          notifyError();
          setLoading(false); // End loading
        }
      );
  };
  return (
    <section id="contact" className="px-6">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-25">
          Reach Us
        </h1>
      </motion.div>

      {/* Form */}
      <motion.form
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        ref={formRef}
        onSubmit={sendEmail}
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your full name"
              className="rounded-lg p-3 w-full"
              value={form.user_name}
              onChange={handleChange}
            />
            {errors.user_name && (
              <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              className="rounded-lg p-3 w-full"
              value={form.user_email}
              onChange={handleChange}
            />
            {errors.user_email && (
              <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="cel_number"
              placeholder="Enter your contact number"
              className="rounded-lg p-3 w-full"
              value={form.cel_number}
              onChange={handleChange}
            />
            {errors.cel_number && (
              <p className="text-red-500 text-xs mt-1">{errors.cel_number}</p>
            )}
          </div>
          <div className="md:col-span-3">
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full p-5 min-h-[120px] rounded-lg mt-3"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-[#ffde01] text-black rounded-md px-6 py-2 cursor-pointer hover:bg-black hover:text-white transition-color duration-300"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Send Email"
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="bg-gray-500 text-white rounded-md px-6 py-2 cursor-pointer hover:bg-black transition-color duration-300"
            onClick={() => document.getElementById("contactsModal").showModal()}
          >
            More Info
          </motion.button>
        </div>
      </motion.form>

      {/* Google Map */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="mb-6"
      >
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ada surveying services&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="w-full h-64 md:h-96 rounded-md"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col md:flex-row gap-10 justify-center text-center"
      >
        <div className="flex flex-col items-center">
          <CiMail className="w-10 h-10 mb-2" />
          <p className="text-sm">adasurveying@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <BsFillTelephoneFill className="w-10 h-10 mb-2" />
          <p className="text-sm">Mobile: 0995-994-4019</p>
          <p className="text-sm">Tel.No: (034) 213 1074</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLocationSharp className="w-10 h-10 mb-2" />
          <p className="text-sm max-w-xs">
            Zulueta St, Silay City, 6116 Negros Occidental
          </p>
        </div>
      </motion.div>

      {/* modal more info */}

      <dialog id="contactsModal" className="modal ">
        <div className="modal-box flex flex-col items-start gap-4">
          <h1 className="text-xl font-bold">Contact Details</h1>
          <hr className="w-full border-gray-300" />

          {/* Email */}
          <div className="flex items-center gap-3">
            <CiMail className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffde01]" />
            <p className="text-sm sm:text-base">adasurveying@gmail.com</p>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-3">
              <BsFillTelephoneFill className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffde01]" />
              <p className="text-sm sm:text-base">Mobile: 0995-994-4019</p>
            </div>
            <p className="text-sm sm:text-base ml-9 sm:ml-0">
              Tel.No: (034) 213 1074
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <IoLocationSharp className="w-6 h-6 sm:w-8 sm:h-8 text-[#ffde01] mt-1" />
            <p className="text-sm sm:text-base max-w-xs">
              Zulueta St, Silay City, 6116 Negros Occidental
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Close" />
        </form>
      </dialog>
    </section>
  );
};

export default Contact;
