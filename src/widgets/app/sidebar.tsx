"use client";

import { cn } from "@/lib/utils";
import {
  CaretDownIcon,
  ChatBubbleIcon,
  Cross2Icon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const appLinks = [
  { name: "Listings", link: "/" },
  { name: "Itineraries", link: "/" },
  { name: "Ship settings", link: "/" },
];

const AppSideBar = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-end fixed right-6 top-4 md:hidden z-50">
        <button
          aria-label="open navigation menu"
          className="h-9 w-9 ml-auto border border-black/30 flex items-center justify-center rounded"
          onClick={() => setIsNavOpen(true)}
        >
          <HamburgerMenuIcon width="20px" height="20px" />
        </button>
      </div>
      <div
        className={cn([
          "w-full md:w-[240px] duration-300 bg-[#F9F9F9] h-screen fixed md:sticky top-0 left-0 flex justify-between flex-col px-2 py-4 ",
          isNavOpen ? "left-0 z-[999]" : "-left-full md:left-0",
        ])}
      >
        <div className="space-y-4">
          <div className="flex justify-end md:hidden">
            <button
              aria-label="close navigation menu"
              className="p-2"
              onClick={() => setIsNavOpen(false)}
            >
              <Cross2Icon />
            </button>
          </div>
          <div
            role="button"
            aria-label="toggle ship option"
            className="flex items-center justify-between p-2 hover:bg-[#CDCDCD]/20 rounded"
          >
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_52_767)">
                  <path
                    d="M18.9094 14.2125C19.0156 14.3656 19.0281 14.5656 18.9438 14.7312C18.8563 14.8969 18.6594 15 18.5 15H11.4719C11.225 15 10.9719 14.775 10.9719 14.5V4.5C10.9719 4.28181 11.1406 4.08878 11.35 4.02316C11.5563 3.95756 11.7844 4.03453 11.9094 4.21331L18.9094 14.2125ZM17.5406 14L11.9719 6.08625V14H17.5406ZM9.62813 7.01687C9.84688 7.075 9.97188 7.27187 9.97188 7.5V14.5C9.97188 14.775 9.775 15 9.47188 15H5.47188C5.32188 15 5.15688 14.8781 5.0675 14.75C4.97813 14.5969 4.9775 14.4062 5.06594 14.2531L9.06563 7.25312C9.17813 7.055 9.40938 6.95875 9.62813 7.01687ZM6.3625 14H8.97188V9.38437L6.3625 14ZM20.3406 16C20.6719 16 20.9094 16.3156 20.8219 16.6344L20.6969 17.0844C20.2094 18.8094 18.6375 20 16.8438 20H7.12813C5.36313 20 3.78969 18.8094 3.30453 17.0844L3.17863 16.6344C3.08894 16.3156 3.32875 16 3.66 16H20.3406ZM4.32656 17C4.7475 18.1906 5.87719 19 7.12813 19H16.8438C18.1219 19 19.2531 18.1906 19.6719 17H4.32656Z"
                    fill="#171717"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_52_767">
                    <rect
                      width="18"
                      height="16"
                      fill="white"
                      transform="translate(3 4)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="font-medium">Ship name</p>
            </div>

            <CaretDownIcon width="25px" height="25px" />
          </div>

          <ul>
            {appLinks.map(({ link, name }) => (
              <Link key={name} href={link}>
                <li
                  className={cn([
                    "py-2 px-3 rounded w-full text-foreground",
                    name === 'Ship settings'
                      ? "bg-[#CDCDCD]"
                      : "hover:bg-[#CDCDCD]/20",
                  ])}
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            <li className="flex items-center gap-2 px-3 py-2">
              <div>
                <PersonIcon />
              </div>
              <span>First Last</span>
            </li>
            <li className="flex items-center gap-2 px-3 py-2">
              <div>
                <ChatBubbleIcon />
              </div>
              <span>Share feedback</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSideBar;
