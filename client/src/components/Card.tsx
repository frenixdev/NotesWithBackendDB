import type React from "react";
import CloseButton from "./ui/CloseButton"
;
import {motion} from 'motion/react';
type PropType = {
  title: string;
  desc: string;
  containerRef?: React.RefObject<HTMLDivElement | null> ;
  handleClick?: () => void;
};
const Card = ({ title, desc, handleClick, containerRef}: PropType) => {
  return (
    <motion.article
    drag
     dragConstraints={containerRef}
    className="relative min-h-30 w-60 cursor-pointer border  border-emerald-400 rounded-md bg-stone-700 px-2 py-2 shadow transition-all duration-100 hover:bg-stone-600"
    >
      <CloseButton handleClick={handleClick}/>

      <h3 className="text-xl font-bold text-stone-200">{title}</h3>
      <p className="mt-2 font-semibold text-stone-300">{desc}</p>
    </motion.article>
  );
};

export default Card;
