import Link from "next/link";
import { Button } from "../ui/button";

import { MenuIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { Navigation } from "./Navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { AnnouncementBar } from "./AnnouncementBar";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export function Header() {
  return (
    <header className="w-full  sticky top-0 z-50">
      <div
        className={
          "w-full transform transition-transform duration-300 ease-in-out border-b bg-background "
        }
      >
        <AnnouncementBar />

        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 gap-4">
          <nav className="hidden font-medium md:flex md:items-center md:gap-4 md:text-sm lg:gap-6">
            <Navigation />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="shrink-0 md:hidden" variant={"outline"}>
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-xl">Menu</SheetTitle>
              </SheetHeader>
              <nav className="grid p-4 font-medium justify-items-start gap-6 text-xl md:hidden">
                <Navigation />
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-lg font-bold">
            🛍️ MY Shop
          </Link>

          <div className="flex justify-end items-center gap-2 sm:gap-4">
            <Button variant={"ghost"}>
              <SearchIcon />
            </Button>
            <Button asChild>
              <LoginLink>Sign in</LoginLink>
            </Button>
            <Button variant={"ghost"} asChild>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
            <Button variant={"ghost"} className="relative">
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
