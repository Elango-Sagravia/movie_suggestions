"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
const routes = [
  { path: "/advertise", name: "Advertise" },
  { path: "/archives", name: "Archives" },
  { path: "/articles", name: "Articles" },
  { path: "/contact", name: "Contact us" },
];
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 w-full bg-nl_sec_background px-4 md:px-16 py-4 flex justify-between items-center border-b border-nl_sec_background z-50">
      <Link href="/">
        <div className="w-32 md:w-40">
          <img src="/logo.png" layout="responsive" alt="Logo" />
        </div>
      </Link>

      <nav className="text-[12px] sm:text-base hidden lg:block text-white">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`ml-2 md:ml-6 ${
              pathname === route.path && "underline underline-offset-4"
            }`}
          >
            {route.name}
          </Link>
        ))}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="block lg:hidden text-white">
          <Menu className="h-5 w-5 text-white" />
          <span className="sr-only">Toggle navigation menu</span>
        </SheetTrigger>
        <SheetContent className="bg-nl_sec_background">
          <SheetClose className="absolute right-4 top-8 text-white">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <nav className="flex flex-col mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={handleLinkClick} // Close sheet on click
                    className={`mt-4 text-lg text-white ${
                      pathname === route.path &&
                      "underline underline-offset-4 text-white"
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
