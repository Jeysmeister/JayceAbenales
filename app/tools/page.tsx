import { Card } from "@/components/ui/card";
import Image from "next/image";

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
      <Card className="p-4 grid grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          return (
            <Card
              key={index}
              className="p-2 flex gap-8 items-center w-[180px] h-[80px]"
            >
              <Image
                className="dark:invert"
                src={tool.url}
                alt={tool.name}
                height={50}
                width={50}
              />
              <div className="w-full flex justify-center text-center">
                {tool.name}
              </div>
            </Card>
          );
        })}
      </Card>
    </div>
  );
};

export default Page;
