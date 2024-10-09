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

const Page = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center w-full h-full">
        <Card className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
          {tools.map((tool, index) => {
            return <Tool tool={tool} key={index} index={index} />;
          })}
        </Card>
      </motion.div>
    </div>
  );
};

export default Page;
