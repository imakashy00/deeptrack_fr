"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import logo from "@/components/assets/deeptrack.png";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const navList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Verify",
      href: "/verify",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "About",
      href: "/about",
    },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="flex justify-between w-full sm:my-10 my-5">
      <div className="flex ">
        <Image className="sm:h-10 sm:w-10 h-8 w-8" src={logo} alt="logo" />{" "}
        <span className="sm:m-auto text-lg ml-2">Deeptrack</span>
      </div>
      <ul className="sm:flex  sm:justify-between hidden">
        {navList.map((item) => {
          return (
            <Link key={item.name} href={item.href}>
              <li
                className={` justify-start items-center  rounded-xl transition flex px-10 my-3 ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : " hover:text-blue-600 "
                }`}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <Link className="hidden sm:block" href="/login">
        <Button className="  bg-blue-500 text-lg hover:bg-blue-400" size={"lg"}>
          Login
        </Button>
      </Link>
      <div className="sm:hidden  ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full sm:w-auto">
            {navList.map((item) => {
              return (
                <Link key={item.name} href={item.href}>
                  <DropdownMenuItem
                    className={`py-1 justify-start items-center space-x-5 rounded-xl px-5 my-3 w-full ${
                      isActive(item.href)
                        ? "text-blue-600"
                        : " hover:text-blue-600 "
                    }`}
                  >
                    {item.name}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </Link>
              );
            })}
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
