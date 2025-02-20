"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Tool = ({ tool, index }: { tool: { name: string; url: string }; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={item} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
      <Card className="p-2 flex justify-around items-center w-[140px] sm:w-[180px] h-[40px] md:h-[80px] sm:h-[60px]">
        <motion.div animate={{ scale: isHovered ? 1.2 : 1 }}>
          <Image className="dark:invert hidden md:table" src={tool.url} alt={tool.name} height={50} width={50} />
          <Image className="dark:invert hidden sm:table md:hidden" src={tool.url} alt={tool.name} height={25} width={25} />
          <Image className="dark:invert sm:hidden" src={tool.url} alt={tool.name} height={20} width={20} />
        </motion.div>
        <div className="flex justify-center text-center text-xs sm:text-sm">{tool.name}</div>
      </Card>
    </motion.div>
  );
};

export default Tool;
