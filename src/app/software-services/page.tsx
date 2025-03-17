"use client";

export const dynamicMode = "force-dynamic";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import dynamic from "next/dynamic";
import softwareAnimation from "@/assets/images/Software.json";
// import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const portfolioProjects = [
    {
      company: "Sterniz",
      title: "Employee Management System",
      results: [
        { title: "Attendance & Time Tracking" },
        { title: "Payroll & Benefits Management" },
        { title: "Performance Evaluation & Reporting" },
        { title: "Shift Scheduling & Coverage Management" },
      ],
      animation: softwareAnimation,
      link: "",
    },
  ];
  
  

export default function SoftwareServices() {

    const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        setIsClient(true);
      }, []);

  return (
    <div>
      <Header />
      <div className="pt-[9rem]">
        <SectionHeader
          title="Software Solutions"
          eyebrow="Services"
          description="Have a look at the Software Solutions We Have to Offer."
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
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                     <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                       <span>Visit Site</span>
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
        <Footer />
    </div>
  );
}
