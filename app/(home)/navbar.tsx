"use client";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import NavbarSidebar from "./NavbarSidebar";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg hidden lg:flex",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
      variant="outline"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Navbar = () => {
  const [isOpenMobileNavbar, setIsOpenMobileNavbar] = useState(false);
  const pathName = usePathname();
  return (
    <nav className="font-medium bg-white justify-between  flex items-center border-b h-20">
      <Link href="/" className={cn("pl-6 flex items-center")}>
        <span className={cn("font-semibold text-5xl", poppins.className)}>
          funroad
        </span>
      </Link>
      <div className="flex gap-2">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathName === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="h-full hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-r-0 border-t-0 rounded-none border-b-0 px-12 text-lg h-full  bg-white hover:bg-pink-500 transition-all"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-r-0 border-t-0 rounded-none border-b-0 px-5 h-full bg-black text-white hover:bg-pink-500 text-lg transition-all"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>
      <NavbarSidebar
        open={isOpenMobileNavbar}
        onOpenChange={setIsOpenMobileNavbar}
        items={navbarItems}
      />
      <div className="flex lg:hidden pr-4">
        <Button
          className="h-full border-none "
          variant="ghost"
          onClick={() => {
            setIsOpenMobileNavbar(true);
          }}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
