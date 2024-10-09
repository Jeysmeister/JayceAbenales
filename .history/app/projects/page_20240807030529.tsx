import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const projects = [
  { src: "/IBCF.png", name: "Enhancement of IBCF Recommendation System" },
  { src: "/J4CK.png", name: "J4CK Compiler" },
  { src: "/Mang Juan.jpg", name: "Mang Juan" },
  { src: "/Look Back.jpg", name: "Look Back" },
  { src: "/P2P.png", name: "P2P" },
];

const Page = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="max-w-[18rem] sm:max-w-sm md:max-w-md p-4">
        <Carousel>
          <CarouselContent>
            {projects.map((project, index) => {
              return (
                <CarouselItem
                  key={index}
                  className={`w-full h-full flex flex-col gap-y-4 justify-center items-center ${
                    index === projects.length - 1 ? "pl-0" : ""
                  }`}
                >
                  <Card className="p-4">
                    <div className="w-[200px] sm:w-[300px] md:w-[350px] h-[200px] sm:h-[300px] md:h-[350px] relative">
                      <Image
                        src={project.src}
                        alt={project.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </Card>
                  <div className="text-xs sm:text-sm w-2/3 flex justify-center items-center text-center">
                    {project.name}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Page;
