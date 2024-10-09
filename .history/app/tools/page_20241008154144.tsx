import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="flex items-center justify-center w-full h-full">
      <Card className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {tools.map((tool, index) => {
          return (
            <div>
              <Card key={index} className="p-2 flex gap-8 items-center w-[140px] sm:w-[180px] h-[40px] md:h-[80px] sm:h-[60px]">
                <Image className="dark:invert hidden md:table" src={tool.url} alt={tool.name} height={50} width={50} />
                <Image className="dark:invert hidden sm:table md:hidden" src={tool.url} alt={tool.name} height={25} width={25} />
                <Image className="dark:invert sm:hidden" src={tool.url} alt={tool.name} height={20} width={20} />
                <div className="w-full flex justify-center text-center text-xs sm:text-sm">{tool.name}</div>
              </Card>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Page;
