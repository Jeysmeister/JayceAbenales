"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Tool from "./components/Tool";

const tools = [
  { name: "React", url: "/React.svg" },
  { name: "NextJS", url: "/NextJs.png" },
  { name: "Tailwind", url: "/Tailwind.png" },
  { name: "Shadcn", url: "/Shadcn.png" },
  { name: "NodeJS", url: "/NodeJs.png" },
  { name: "NestJS", url: "/NestJs.png" },
  { name: "Prisma", url: "/Prisma.png" },
  { name: "TypeScript", url: "/TypeScript.png" },
  { name: "JavaScript", url: "/JavaScript.png" },
  { name: "Python", url: "/Python.png" },
  { name: "Android Studio", url: "/AndroidStudio.png" },
  { name: "Java", url: "/Java.png" },
  { name: "Azure", url: "/Azure.png" },
  { name: "SQL", url: "/SQL.png" },
  { name: "Unity", url: "/Unity.png" },
  { name: "C#", url: "/CSharp.png" },
];

const container = {
  hiddenz: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Page = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card>
        <motion.div variants={container} initial="hiddenz" animate="visible" className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
          {tools.map((tool, index) => {
            return <Tool tool={tool} key={index} index={index} />;
          })}
        </motion.div>
      </Card>
    </div>
  );
};

export default Page;
