"use client";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Sterniz from "@/assets/images/Sterniz-bg.png";
import cleaningIcon from "@/assets/icons/cleaningIcon.png";
import SecurityIcon from "@/assets/icons/securityIcon.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import softwareIcon from "@/assets/icons/softwareIcon.png";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

const securityTools = [
  { title: "Property protection", iconSrc: SecurityIcon },
  { title: "Event Protection", iconSrc: SecurityIcon },
  { title: "Emergency call", iconSrc: SecurityIcon },
  { title: "Service control center", iconSrc: SecurityIcon },
  { title: "Gatekeeper", iconSrc: SecurityIcon },
  { title: "Reception service", iconSrc: SecurityIcon },
  { title: "Security service", iconSrc: SecurityIcon },
  { title: "Fire safety", iconSrc: SecurityIcon },
  { title: "Department store detective", iconSrc: SecurityIcon },
  { title: "Doorman", iconSrc: SecurityIcon },
  { title: "Mall Guard", iconSrc: SecurityIcon },
  { title: "Construction Site", iconSrc: SecurityIcon },
  { title: "Backup", iconSrc: SecurityIcon },
];

const safetyStandards = [
  { title: "Maintenance cleaning", iconSrc: cleaningIcon },
  { title: "Daytime", iconSrc: cleaningIcon },
  { title: "Service staff", iconSrc: cleaningIcon },
  { title: "Glass and facade cleaning", iconSrc: cleaningIcon },
  { title: "Basic and special cleaning", iconSrc: cleaningIcon },
  { title: "Hygiene & Safety Concept (HSC)", iconSrc: cleaningIcon },
  { title: "Disinfectant cleaning", iconSrc: cleaningIcon },
  { title: "Outdoor area maintenance", iconSrc: cleaningIcon },
  { title: "Weed management", iconSrc: cleaningIcon },
  { title: "Janitorial services", iconSrc: cleaningIcon },
  { title: "Construction cleaning", iconSrc: cleaningIcon },
  { title: "Solar system cleaning", iconSrc: cleaningIcon },
  { title: "logistics", iconSrc: cleaningIcon },
  { title: "Housing Industry", iconSrc: cleaningIcon },
  { title: "Clinics & Hospitals", iconSrc: cleaningIcon },
  { title: "Industrial cleaning", iconSrc: cleaningIcon },
  { title: "Coating: Long-lasting floor coating", iconSrc: cleaningIcon },
  { title: "Machine cleaning", iconSrc: cleaningIcon },
];

const softwareSolutions = [
  { title: "Custom Software Development", iconSrc: softwareIcon },
  { title: "Web Application Development", iconSrc: softwareIcon },
  { title: "Mobile App Development", iconSrc: softwareIcon },
  { title: "Enterprise Software Solutions", iconSrc: softwareIcon },
  { title: "Cloud-Based Solutions", iconSrc: softwareIcon },
  { title: "AI & Machine Learning Integration", iconSrc: softwareIcon },
  { title: "E-commerce Solutions", iconSrc: softwareIcon },
  { title: "Cybersecurity Solutions", iconSrc: softwareIcon },
  { title: "Blockchain Development", iconSrc: softwareIcon },
  { title: "IT Consulting & Digital Transformation", iconSrc: softwareIcon },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Us"
          title="Your Trusted Security Partner"
          description="Sterniz provides reliable and professional security solutions, ensuring safety and peace of mind for businesses and individuals."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Our Services"
                description="Delivering Excellence in Every Service We Provide."
              />
              <div className="w-60 mx-auto mt-2 md:mt-0">
                <ul className="flex flex-col gap-4 mt-2 md:mt-5">
                    <li className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6 text-blue-500" />
                      <span>Software Solutions</span>
                    </li>
                    <li className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6 text-blue-500" />
                      <span>Cleaning Solutions</span>
                    </li>
                    <li className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6 text-blue-500" />
                      <span>Security Solutions</span>
                    </li>
                </ul>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="Facility Management"
                description="Explore the Facility Management Services we offer to our clients."
              />
              <ToolboxItems
                Items={securityTools}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                Items={safetyStandards}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:90s]"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="Software Solutions"
                description="Explore the Innovative Software Solutions we offer to our clients."
              />
              <ToolboxItems
                Items={softwareSolutions}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                Items={softwareSolutions}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:90s]"
              />
            </Card>
            {/* <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interest and hobbies beyond the interest."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card> */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-auto rounded-lg after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 -z-10"></div>
                <Image src={Sterniz} alt="me" className="w-[150px]" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
