import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { X } from "lucide-react";

import Link from "next/link";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface NavbarSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: NavbarItemProps[];
}

export default function NavbarSidebar({
  open,
  onOpenChange,
  items,
}: NavbarSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="flex items-center">Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea>
          <div className="flex flex-col overflow-y-auto h-full pb-2">
            {items.map(({ href, children }) => (
              <Link
                key={href}
                href={href}
                onClick={() => onOpenChange(false)}
                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              >
                {children}
              </Link>
            ))}
          </div>
          <div className="border-t flex flex-col">
            <Link
              href="/sign-in"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              Start selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
