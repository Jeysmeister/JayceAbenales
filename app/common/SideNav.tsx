import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const logoProps = { height: 25, width: 25 };
const logos = [
  {
    logo: <GitHubLogoIcon {...logoProps} />,
    url: "https://github.com/Jeysmeister/",
  },
  {
    logo: <InstagramLogoIcon {...logoProps} />,
    url: "https://www.instagram.com/jaycebnls/",
  },
  {
    logo: <LinkedInLogoIcon {...logoProps} />,
    url: "https://www.linkedin.com/in/john-carlo-abenales-035a84279/",
  },
  { logo: <TwitterLogoIcon {...logoProps} />, url: "https://x.com/jycbnls" },
];

const SideNav = () => {
  return (
    <>
      <div className="absolute h-screen left-0 top-0 justify-center items-center px-2 flex-col gap-4 hidden sm:flex">
        {logos.map((logo, index) => {
          return (
            <Button
              key={index}
              variant={"ghost"}
              className="w-fit h-fit rounded-full p-1 m-0 transition ease-in-out delay-150 hover:scale-110 cursor-pointer"
            >
              <Link href={logo.url} rel="noopener noreferrer" target="_blank">
                {logo.logo}
              </Link>
            </Button>
          );
        })}
      </div>
      <div className="absolute w-screen bottom-8 justify-center items-center px-2 gap-4 flex sm:hidden">
        {logos.map((logo, index) => {
          return (
            <Button
              key={index}
              variant={"ghost"}
              className="w-fit h-fit rounded-full p-1 m-0 transition ease-in-out delay-150 hover:scale-110 cursor-pointer"
            >
              {logo.logo}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default SideNav;
