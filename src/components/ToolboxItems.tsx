// import { twMerge } from "tailwind-merge";
// import { TechIcon } from "./TechIcon";
// import { Fragment } from "react";

// export const ToolboxItems = ({
//   Items,
//   className,
//   itemsWrapperClassName,
// }: {
//   Items: {
//     title: string;
//     iconType: React.ElementType;
//   }[];
//   className?: string;
//   itemsWrapperClassName?: string;
// }) => {
//   return (
//     <div
//       className={twMerge(
//         "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
//         className
//       )}
//     >
//       <div
//         className={twMerge(
//           "flex flex-none py-0.5 gap-6 pr-6",
//           itemsWrapperClassName
//         )}
//       >
//         {[...new Array(2)].fill(2).map((_, index) => (
//           <Fragment key={index}>
//             {Items.map((item) => (
//               <div
//                 key={item.title}
//                 className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
//               >
//                 <TechIcon component={item.iconType} />
//                 <span className="font-semibold">{item.title}</span>
//               </div>
//             ))}
//           </Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };


import { twMerge } from "tailwind-merge";
import { Fragment } from "react";
import { StaticImageData } from "next/image";

export const ToolboxItems = ({
  Items,
  className,
  itemsWrapperClassName,
}: {
  Items: {
    title: string;
    iconSrc: string | StaticImageData; // ✅ Now supports PNG/JPG images
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(2).map((_, index) => (
          <Fragment key={index}>
            {Items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                {/* ✅ Display PNG Icons */}
                <img src={typeof item.iconSrc === "string" ? item.iconSrc : item.iconSrc.src} 
                     alt={item.title} className="w-6 h-6" />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
