// import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// import Image from "next/image";
// import CheckCircleIcon from "@/assets/icons/check-circle.svg";
// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";

// const portfolioProjects = [
//   {
//     company: "Software Solutions",
//     year: "",
//     title: "Transforming Ideas into Digital Excellence",
//     results: [
//       { title: "Custom Software Development" },
//       { title: "Web & Mobile App Development" },
//       { title: "System Integration" },
//     ],
//     // link: "https://youtu.be/4k7IdSLxh6w",
//     image: darkSaasLandingPage,
//   },
//   {
//     company: "Security Services",
//     year: "",
//     title: "Protecting What Matters Most",
//     results: [
//       { title: "Professional Security Guards" },
//       { title: "Advanced Surveillance Systems" },
//       { title: "Event & Corporate Security" },
//     ],
//     // link: "https://youtu.be/7hi5zwO75yc",
//     image: lightSaasLandingPage,
//   },
//   {
//     company: "Cleaning Services",
//     year: "",
//     title: "Ensuring a Hygienic Environment",
//     results: [
//       { title: "Commercial & Residential Cleaning" },
//       { title: "Deep Cleaning & Sanitization" },
//       { title: "Post-Construction & Industrial Cleaning" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section className="pb-16 lg:py-24">
//       <div className="container">
//         <SectionHeader
//           eyebrow="Our Expertise"
//           title="Our Services"
//           description="Providing top-tier security, facility management, and cleaning services to safeguard what matters most."
//         />

//         <div className="flex gap-20 flex-col mt-10 mg:mt-20">
//           {portfolioProjects.map((project, projectIndex) => (
//             <Card
//               key={project.title}
//               className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
//               style={{
//                 top: `calc(134px + ${projectIndex * 40}px`,
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
//                       <li className="flex gap-2 text-sm md:text-base text-white/50">
//                         <CheckCircleIcon className="size-5 md:size-6" />
//                         <span>{result.title}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <a href={project.link}>
//                     <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
//                       <span>More Information</span>
//                       <ArrowUpRightIcon className="size-4" />
//                     </button>
//                   </a>
//                 </div>

//                 <div className="relative">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full  lg:w-auto lg:max-w-none"
//                   />
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


"use client"; // Add this line at the top

import dynamic from "next/dynamic";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useEffect, useState } from "react";

// Import animations
import softwareAnimation from "@/assets/images/Software.json";
import securityAnimation from "@/assets/images/Security.json";
import cleaningAnimation from "@/assets/images/Cleaning.json";

// Dynamically import Lottie (client-side only)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const portfolioProjects = [
  {
    company: "Software Solutions",
    title: "Transforming Ideas into Digital Excellence",
    results: [
      { title: "Custom Software Development" },
      { title: "Web & Mobile App Development" },
      { title: "System Integration" },
    ],
    animation: softwareAnimation,
    link: "/software-services",
  },
  {
    company: "Security Services",
    title: "Protecting What Matters Most",
    results: [
      { title: "Professional Security Guards" },
      { title: "Advanced Surveillance Systems" },
      { title: "Event & Corporate Security" },
    ],
    animation: securityAnimation,
    link: "/security-services",
  },
  {
    company: "Cleaning Services",
    title: "Ensuring a Hygienic Environment",
    results: [
      { title: "Commercial & Residential Cleaning" },
      { title: "Deep Cleaning & Sanitization" },
      { title: "Post-Construction & Industrial Cleaning" },
    ],
    animation: cleaningAnimation,
    link: "/cleaning-services",
  },
];

export const ProjectsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="services" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Our Expertise"
          title="Our Services"
          description="Providing top-tier security, facility management, and cleaning services to safeguard what matters most."
        />

        <div className="flex gap-20 flex-col mt-10 mg:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(134px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-purple-300 to-blue-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text px-8 pt-8 after:pointer-events-none">
                    <div>
                      <span>{project.company}</span>
                    </div>
                  </div>
                  <h3 className="font-serif md:text-4xl md:mt-5 text-2xl mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                     <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                       <span>More Information</span>
                       <ArrowUpRightIcon className="size-4" />
                     </button>
                   </a>
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
      </div>
    </section>
  );
};
