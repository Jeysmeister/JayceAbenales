import { Button } from "@/components/ui/button";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const logoProps = { height: 25, width: 25 };
const logos = [
  { logo: <DiscordLogoIcon {...logoProps} /> },
  { logo: <GitHubLogoIcon {...logoProps} /> },
  { logo: <InstagramLogoIcon {...logoProps} /> },
  { logo: <LinkedInLogoIcon {...logoProps} /> },
  { logo: <TwitterLogoIcon {...logoProps} /> },
];

const SideNav = () => {
  return (
    <div className="absolute h-screen left-0 top-0 flex justify-center items-center px-2 flex-col gap-4">
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
  );
};

export default SideNav;
