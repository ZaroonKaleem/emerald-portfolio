"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-purple-300 to-blue-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                ready to bring your next project to life? let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// import React, 
// { useRef, useState, ChangeEvent, FormEvent } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "@/styles";
// import EarthCanvas  from "@/sections/canvas/Earth";
// import SectionWrapper from "@/hoc/SectionWrapper"; 
// import { slideIn } from "../utils/motion";

// interface FormFields {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactSection: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [form, setForm] = useState<FormFields>({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//     .send(
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//       {
//         name: form.name,
//         to_name: "Zaroon",
//         email: form.email,
//         to_email: "zaroonklm@gmail.com",
//         message: form.message,
//       },
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//     )
    
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. We will get back to you as soon as possible.");
//           setForm({ name: "", email: "", message: "" });
//         },
//         (error: any) => {
//           setLoading(false);
//           console.error(error);
//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h2
//           className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
//         >
//           Contact.
//         </h2>

//         <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email address?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows={7}
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What's your message?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(ContactSection, "contact");