// "use client";

// // export const dynamicMode = "force-dynamic";

// import { Header } from "@/sections/Header";
// import { Footer } from "@/sections/Footer";
// import CheckCircleIcon from "@/assets/icons/check-circle.svg";
// // import dynamic from "next/dynamic";
// // const CheckCircleIcon = dynamic(() => import("@/assets/icons/check-circle.svg"), { ssr: false });
// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";

// import securityAnimation from "@/assets/images/Security.json";
// // import Lottie from "lottie-react";
// import { useState, useEffect } from "react";
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import dynamic from "next/dynamic";

// const portfolioProjects = [
//     {
//       company: "Property Protection",
//       title: "Safeguarding Your Assets",
//       results: [
//         { title: "Commercial & Residential Security" },
//         { title: "Advanced Alarm & Monitoring Systems" },
//         { title: "Access Control & Perimeter Protection" },
//       ],
//     //   animation: propertyProtectionAnimation,
//       animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Event Protection",
//       title: "Ensuring Secure & Safe Events",
//       results: [
//         { title: "Crowd Control & Access Management" },
//         { title: "VIP & Executive Protection" },
//         { title: "Emergency Response Planning" },
//       ],
//     //   animation: eventProtectionAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Emergency Call & Service Control Center",
//       title: "Rapid Response & 24/7 Monitoring",
//       results: [
//         { title: "Emergency Dispatch & Support" },
//         { title: "Live Incident Reporting" },
//         { title: "Real-Time Surveillance Coordination" },
//       ],
//     //   animation: emergencyServiceAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Gatekeeper & Reception Service",
//       title: "Professional Access Control",
//       results: [
//         { title: "Visitor Verification & Registration" },
//         { title: "ID & Access Badge Management" },
//         { title: "Lobby & Entrance Surveillance" },
//       ],
//     //   animation: gatekeeperAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Fire Safety Security Service",
//       title: "Preventing Fire Hazards",
//       results: [
//         { title: "Fire Prevention & Safety Training" },
//         { title: "Fire Alarm & Suppression Systems" },
//         { title: "Emergency Evacuation Planning" },
//       ],
//     //   animation: fireSafetyAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Department Store Detective",
//       title: "Retail Theft Prevention",
//       results: [
//         { title: "Covert Surveillance & Loss Prevention" },
//         { title: "Shoplifting Prevention" },
//         { title: "Store Safety & Incident Reporting" },
//       ],
//     //   animation: detectiveAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Doorman",
//       title: "First Line of Security",
//       results: [
//         { title: "Guest Screening & Assistance" },
//         { title: "Entrance & Exit Monitoring" },
//         { title: "Security Presence & Patrolling" },
//       ],
//     //   animation: doormanAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Mall Guard",
//       title: "Ensuring Safe Shopping Environments",
//       results: [
//         { title: "Surveillance & Security Patrols" },
//         { title: "Crowd & Incident Management" },
//         { title: "Emergency Handling & Response" },
//       ],
//     //   animation: mallGuardAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//     {
//       company: "Construction Site Security",
//       title: "Protecting Active Worksites",
//       results: [
//         { title: "24/7 Site Monitoring & Access Control" },
//         { title: "Equipment & Material Theft Prevention" },
//         { title: "Intruder Detection & Rapid Response" },
//       ],
//     //   animation: constructionSecurityAnimation,
//     animation: securityAnimation,
//       link: "https://youtu.be/Z7I5uSRHMHg",
//     },
//   ];
  

// export default function SecurityServices() {

//     const [isClient, setIsClient] = useState(false);
    
//       useEffect(() => {
//         setIsClient(true);
//       }, []);

//   return (
//     <div>
//       <Header />
//       <div className="pt-[9rem]">
//         <SectionHeader
//           title="Security Services"
//           eyebrow="Services"
//           description="Have a look at the Security Services We Have to Offer."
//         />
//       </div>
//       <div className="flex container mb-20 gap-20 flex-col mt-10 mg:mt-20">
//           {portfolioProjects.map((project, projectIndex) => (
//             <Card
//               key={project.title}
//               className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 cursor-pointer sticky
//               hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
//               style={{
//                 top: `calc(124px + ${projectIndex * 20}px`,
//               }}
//             >
//               <div className="lg:grid lg:grid-cols-2 lg:gap-16">
//                 <div className="lg:pb-16">
//                   <div className="bg-gradient-to-r from-purple-300 to-blue-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text px-8 pt-8 after:pointer-events-none">
//                     <div>
//                       <span>{project.company}</span>
//                     </div>
//                   </div>
//                   <h3 className="font-serif md:text-4xl md:mt-5 text-2xl mt-2">
//                     {project.title}
//                   </h3>
//                   <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
//                   <ul className="flex flex-col gap-4 mt-4 md:mt-5">
//                     {project.results.map((result) => (
//                       <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
//                         <CheckCircleIcon className="size-5 md:size-6" />
//                         <span>{result.title}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   {/* <a href={project.link}>
//                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
//                        <span>More Information</span>
//                        <ArrowUpRightIcon className="size-4" />
//                      </button>
//                    </a> */}
//                 </div>

//                 <div className="relative">
//                   {isClient && (
//                     <Lottie
//                       animationData={project.animation}
//                       loop={true}
//                       className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
//                     />
//                   )}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//         <Footer />
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import securityAnimation from "@/assets/images/Security.json";
import { motion, AnimatePresence } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type Project = {
  company: string;
  title: string;
  results: { title: string }[];
  animation: any;
  link: string;
};

const portfolioProjects: Project[] = [
      {
        company: "Property Protection",
        title: "Safeguarding Your Assets",
        results: [
          { title: "Commercial & Residential Security" },
          { title: "Advanced Alarm & Monitoring Systems" },
          { title: "Access Control & Perimeter Protection" },
        ],
      //   animation: propertyProtectionAnimation,
        animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Event Protection",
        title: "Ensuring Secure & Safe Events",
        results: [
          { title: "Crowd Control & Access Management" },
          { title: "VIP & Executive Protection" },
          { title: "Emergency Response Planning" },
        ],
      //   animation: eventProtectionAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Emergency Call & Service Control Center",
        title: "Rapid Response & 24/7 Monitoring",
        results: [
          { title: "Emergency Dispatch & Support" },
          { title: "Live Incident Reporting" },
          { title: "Real-Time Surveillance Coordination" },
        ],
      //   animation: emergencyServiceAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Gatekeeper & Reception Service",
        title: "Professional Access Control",
        results: [
          { title: "Visitor Verification & Registration" },
          { title: "ID & Access Badge Management" },
          { title: "Lobby & Entrance Surveillance" },
        ],
      //   animation: gatekeeperAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Fire Safety Security Service",
        title: "Preventing Fire Hazards",
        results: [
          { title: "Fire Prevention & Safety Training" },
          { title: "Fire Alarm & Suppression Systems" },
          { title: "Emergency Evacuation Planning" },
        ],
      //   animation: fireSafetyAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Department Store Detective",
        title: "Retail Theft Prevention",
        results: [
          { title: "Covert Surveillance & Loss Prevention" },
          { title: "Shoplifting Prevention" },
          { title: "Store Safety & Incident Reporting" },
        ],
      //   animation: detectiveAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Doorman",
        title: "First Line of Security",
        results: [
          { title: "Guest Screening & Assistance" },
          { title: "Entrance & Exit Monitoring" },
          { title: "Security Presence & Patrolling" },
        ],
      //   animation: doormanAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Mall Guard",
        title: "Ensuring Safe Shopping Environments",
        results: [
          { title: "Surveillance & Security Patrols" },
          { title: "Crowd & Incident Management" },
          { title: "Emergency Handling & Response" },
        ],
      //   animation: mallGuardAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
      {
        company: "Construction Site Security",
        title: "Protecting Active Worksites",
        results: [
          { title: "24/7 Site Monitoring & Access Control" },
          { title: "Equipment & Material Theft Prevention" },
          { title: "Intruder Detection & Rapid Response" },
        ],
      //   animation: constructionSecurityAnimation,
      animation: securityAnimation,
        link: "https://youtu.be/Z7I5uSRHMHg",
      },
    ];

export default function SecurityServices() {
  const [isClient, setIsClient] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openModal = (project: Project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-[9rem]">
        <SectionHeader
          title="Security Services"
          eyebrow="Services"
          description="Have a look at the Security Services We Have to Offer."
        />
      </div>

      <div className="flex container mb-20 gap-20 flex-col mt-10 mg:mt-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card
            key={project.title}
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 cursor-pointer sticky
            hover:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            style={{ top: `calc(124px + ${projectIndex * 20}px)` }}
            onClick={() => openModal(project)}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-purple-300 to-blue-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text px-8 pt-8">
                  <span>{project.company}</span>
                </div>
                <h3 className="font-serif md:text-4xl md:mt-5 text-2xl mt-2">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                {isClient && (
                  <Lottie
                    animationData={project.animation}
                    loop={true}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 text-white p-8 rounded-lg max-w-3xl w-full relative"
              initial={{ y: 50, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent background click from closing
            >
              <button className="absolute top-3 right-3 text-white text-xl" onClick={closeModal}>
                ✖
              </button>
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="text-sm text-gray-400 mt-2">{selectedProject.company}</p>
              <hr className="border-t-2 border-white/10 my-4" />
              <ul className="flex flex-col gap-2">
                {selectedProject.results.map((result) => (
                  <li key={result.title} className="flex gap-2 text-white/70">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              {isClient && (
                <Lottie
                  animationData={selectedProject.animation}
                  loop={true}
                  className="mt-8 h-48 mx-auto"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
