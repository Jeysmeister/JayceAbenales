import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative h-[80%] w-[80%]">
        <Link href={"/Resume.pdf"} rel="noopener noreferrer" target="_blank">
          <Image
            src={"/Resume.jpg"}
            alt={"Resume"}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Page;
