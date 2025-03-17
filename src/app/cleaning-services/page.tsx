"use client";

// export const dynamic = "force-dynamic";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import cleaningAnimation from "@/assets/images/Cleaning.json";
import c1 from "@/assets/images/c1.json";
import c2 from "@/assets/images/c2.json";
import c3 from "@/assets/images/c3.json";
import c5 from "@/assets/images/c5.json";
import c4 from "@/assets/images/c4.json";
import c6 from "@/assets/images/c6.json";
import c7 from "@/assets/images/c7.json";
import c8 from "@/assets/images/c8.json";
import c9 from "@/assets/images/c9.json";
import c10 from "@/assets/images/c10.json";
// import Lottie from "lottie-react";
import { useState, useEffect } from "react";

// cleaningAnimation => c1 basic cleaning
// c2 => Housing
// c3 => outdoor machine
// c4 => Machine cleaning
// c5 => Corona
// c6 => Hyginic cleaning
// c7 => Outdoor
// c8 => Advanced
// c9 => tiles cleaning
// c1 0 => basic and special cleaning

const portfolioProjects = [
  {
    company: "Specialized Cleaning Services",
    title: "Advanced Cleaning Solutions",
    results: [
      { title: "Basic & Special Cleaning" },
      { title: "Hygiene & Safety Concept (HSC)" },
      { title: "Disinfectant Cleaning" },
    ],
    // animation: c8,
    animation: c10,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
  {
    company: "Cleaning & Service Services",
    title: "Ensuring a Hygienic Environment",
    results: [
      { title: "Maintenance Cleaning" },
      { title: "Daytime & Service Staff" },
      { title: "Glass & Facade Cleaning" },
    ],
    animation: c6,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
  {
    company: "Compliance & Safety Cleaning",
    title: "Meeting Industry Standards",
    results: [
      { title: "Cleaning as part of your HACCP Concept" },
      { title: "Janitorial Services" },
      {
        title: "Outdoor Area Maintenance (Gray & Green Areas, Winter Service)",
      },
    ],
    animation: c2,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
  {
    company: "Facility & Outdoor Maintenance",
    title: "Complete Outdoor & Facility Upkeep",
    results: [
      { title: "Weed Management" },
      { title: "Solar System Cleaning" },
      { title: "Construction Cleaning" },
    ],
    animation: c7,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
  {
    company: "Industrial & Logistics Cleaning",
    title: "Keeping Industrial Spaces Clean",
    results: [
      { title: "Machine Cleaning & Cooling Lubricant Service" },
      { title: "Coating: Long-Lasting Floor Coating" },
      { title: "Specific Industry Solutions" },
    ],
    animation: c4,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
  {
    company: "Healthcare & Residential Cleaning",
    title: "Sanitation for Sensitive Environments",
    results: [
      { title: "Industrial Cleaning & Service" },
      { title: "Clinics & Hospitals" },
      { title: "Senior Citizens & Nursing Homes" },
    ],
    animation: c5,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
  {
    company: "Housing & Logistics Cleaning",
    title: "Efficient Cleaning Solutions",
    results: [
      { title: "Logistics Facility Cleaning" },
      { title: "Housing Industry Maintenance" },
    ],
    animation: c2,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
];

export default function CleaningServices() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-[9rem]">
        <SectionHeader
          title="Cleaning Services"
          eyebrow="Services"
          description="Have a look at the Cleaning Services We Have to Offer."
        />
      </div>
      <div className="flex container mb-20 gap-20 flex-col mt-10 mg:mt-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card
            key={project.title}
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(94px + ${projectIndex * 20}px`,
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
                    <li
                      key={result.title}
                      className="flex gap-2 text-sm md:text-base text-white/50"
                    >
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                {/* <a href={project.link}>
                     <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                       <span>More Information</span>
                       <ArrowUpRightIcon className="size-4" />
                     </button>
                   </a> */}
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
      <Footer />
    </div>
  );
}
