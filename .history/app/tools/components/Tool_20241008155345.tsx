import { Card } from "@/components/ui/card";
import Image from "next/image";

const Tool = ({ tool, index }: { tool: { name: string; url: string }; index: number }) => {
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
};

export default Tool;
