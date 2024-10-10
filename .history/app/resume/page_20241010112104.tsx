import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="h-full w-full flex items-center justify-center">
      <div className="relative h-[80%] w-[80%]">
        <Link href={"/Resume.pdf"} rel="noopener noreferrer" target="_blank">
          <Image src={"/Resume.jpg"} alt={"Resume"} layout="fill" objectFit="contain" className="rounded-lg" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Page;
