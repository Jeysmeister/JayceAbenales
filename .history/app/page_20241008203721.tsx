"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="h-full w-full flex items-center justify-center">
      <Card className={`hidden md:table`}>
        <CardHeader className="w-full flex justify-center items-center text-2xl relative">
          <motion.div variants={item}>
            <CardTitle className="font-light">Developer Identification</CardTitle>
          </motion.div>
          <motion.div variants={item} className="absolute top-6 right-6 text-xs">
            ID # : 915124512
          </motion.div>
        </CardHeader>
        <CardContent className="flex divide-x-[1px] gap-4">
          <Card className="p-2">
            <Image className="rounded-lg " src={"/IDPicture.png"} alt="IDPicture" height={200} width={200} />
          </Card>
          <div className="min-h-full">
            <div className="pl-4 flex gap-8 text-sm h-full items-center">
              <div className="flex flex-col gap-2 text-nowrap">
                <div>Name :</div>
                <div>Nickname :</div>
                <div>Date Of Birth :</div>
                <div>Contact # :</div>
                <div>Occupation :</div>
              </div>
              <div className="flex flex-col gap-2 italic w-full items-end">
                <div>Abenales, John Carlo H.</div>
                <div>Jayce</div>
                <div>01 / 11 / 2000</div>
                <div>+63 9209607652</div>
                <div>Full Stack Web Developer</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="md:hidden flex flex-col justify-center items-center gap-4 divide-y-[1px] p-4 pt-8 relative">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="absolute top-4 text-xs">ID # : 915124512</div>
          <div>Developer Identification</div>
          <Card className="p-2">
            <Image className="rounded-lg" src={"/IDPicture.png"} alt="IDPicture" height={100} width={200} />
          </Card>
        </div>
        <div className="flex gap-4 text-sm pt-4">
          <div className="flex flex-col gap-1">
            <div>Name :</div>
            <div>Nickname :</div>
            <div>Date Of Birth :</div>
            <div>Contact # :</div>
            <div>Occupation :</div>
          </div>
          <div className="flex flex-col gap-1 italic text-end">
            <div>Abenales, John Carlo H.</div>
            <div>Jayce</div>
            <div>01 / 11 / 2000</div>
            <div>+63 9209607652</div>
            <div>Full Stack Web Developer</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
