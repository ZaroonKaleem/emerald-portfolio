// import memojiImage from "@/assets/images/memoji-computer.png";
// import Image from "next/image";
// import ArrowDown from "@/assets/icons/arrow-down.svg";
// import grainImage from "@/assets/images/grain.jpg";
// import StarIcon from "@/assets/icons/star.svg";
// import SparkleIcon from "@/assets/icons/sparkle.svg";
// import { HeroOrbit } from "@/components/HeroOrbit";

// export const HeroSection = () => {
//   return (
//     <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
//       <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
//       <div
//         className="absolute inset-0 -z-30 opacity-5"
//         style={{
//           backgroundImage: `url(${grainImage.src})`,
//         }}
//       ></div>
//       <div className="size-[620px] hero-ring"></div>
//       <div className="size-[820px] hero-ring"></div>
//       <div className="size-[1020px] hero-ring"></div>
//       <div className="size-[1220px] hero-ring"></div>
//       <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
//         <SparkleIcon className="size-8 text-purple-300/20"/>
//       </HeroOrbit>
//       <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
//         <SparkleIcon className="size-5 text-purple-300/20"/>
//       </HeroOrbit>
//       <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
//         <div className="size-2 rounded-full text-purple-300/20"/>
//       </HeroOrbit>
//       <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
//         <SparkleIcon className="size-10 text-purple-300/20"/>
//       </HeroOrbit>
//       <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
//         <StarIcon className="size-12 text-purple-300" />
//       </HeroOrbit>
//       <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
//         <StarIcon className="size-8 text-purple-300" />
//       </HeroOrbit>
//       <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="32s">
//         <div className="size-2 rounded-full text-purple-300/20"/>
//       </HeroOrbit>
//       <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
//         <SparkleIcon className="size-14 text-purple-300/20" />
//       </HeroOrbit>
//       <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
//         <div className="size-3 rounded-full text-purple-300/20"/>
//       </HeroOrbit>
//       <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
//         <StarIcon className="size-28 text-purple-300" />
//       </HeroOrbit>
//       </div>
//       <div className="container">
//         <div className="flex flex-col items-center">
//           <Image
//             src={memojiImage}
//             className="size-[100px]"
//             alt="person peeking from behind laptop"
//           />
//           <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg">
//             <div className="bg-purple-500 size-2.5 rounded-full relative">
//               <div className="bg-purple-500 absolute inset-0 rounded-full animate-ping-large"></div>
//             </div>
//             <div className="text-sm font-medium">
//             Sterniz Security – Now Accepting New Clients!
//             </div> 
//           </div>
//         </div>
//         <div className="max-w-lg mx-auto">
//           <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
//             Ensuring Unmatched Security & Protection
//           </h1>
//           <p className="mt-4 text-center text-white/60 md:text-lg">
//           Sterniz delivers reliable security solutions with trained professionals ensuring safety and peace of mind. From businesses to residential properties, we protect what matters most—your safety, our priority.
//           </p>
//         </div>
//         <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center z-10">
//           <a href="#services" className="z-10">
//           <button className="inline-flex cursor-pointer z-10 hover:bg-gray-100/10 items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
//             <span className="font-semibold">Learn More</span>
//             <ArrowDown className="size-4" />
//           </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";

import { motion } from "framer-motion";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></motion.div>

        {/* Hero Rings with a slight scale-in effect */}
        {[620, 820, 1020, 1220].map((size, index) => (
          <motion.div
            key={size}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className={`size-[${size}px] hero-ring`}
          ></motion.div>
        ))}
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Animated Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={memojiImage}
              className="size-[100px]"
              alt="person peeking from behind laptop"
            />
          </motion.div>

          {/* Announcement Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg"
          >
            <div className="bg-purple-500 size-2.5 rounded-full relative">
              <div className="bg-purple-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Sterniz Security – Now Accepting New Clients!
            </div>
          </motion.div>
        </div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-lg mx-auto"
        >
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Ensuring Unmatched Security & Protection
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Sterniz delivers reliable security solutions with trained professionals ensuring safety and peace of mind. From businesses to residential properties, we protect what matters most—your safety, our priority.
          </p>
        </motion.div>

        {/* CTA Button with Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center z-10"
        >
          <a href="#services" className="z-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex cursor-pointer z-10 hover:bg-gray-100/10 items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="font-semibold">Learn More</span>
              <ArrowDown className="size-4" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
