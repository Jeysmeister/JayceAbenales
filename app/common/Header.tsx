"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { name: "Home", url: "/" },
  { name: "Tools", url: "/tools" },
  { name: "Projects", url: "/projects" },
];

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const clickHandler = (url: string) => {
    router.push(url);
  };
  return (
    <div className="w-full flex p-2 fixed top-0">
      <div className="max-w-[800px] w-full mx-auto flex justify-between items-center">
        <div className="flex items-end gap-2">
          <div className="pr-2">Jayce Abenales</div>
          {links.map((link, index) => {
            return (
              <div
                key={index}
                className={`${
                  pathName !== link.url
                    ? "text-gray-400 hover:text-primary cursor-pointer "
                    : ""
                }font-light text-sm`}
                onClick={() => {
                  clickHandler(link.url);
                }}
              >
                {link.name}
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
