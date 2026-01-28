"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Portfólio", href: "/#portfolio" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-background",
        isScrolled && "shadow-md",
      )}
    >
      <div className="container mx-auto flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-light.png"
            alt="OBC Produções"
            width={150}
            height={50}
            className="h-10 w-auto dark:hidden"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="OBC Produções"
            width={150}
            height={50}
            className="h-10 w-auto hidden dark:block"
            priority
          />
        </Link>

        {/* Desktop Navigation + Theme Toggle + CTA */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <nav className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: Theme Toggle & Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Logo in Sheet */}
                <div className="mb-8 pt-2 flex items-center gap-2">
                  <svg
                    viewBox="0 0 60 70"
                    className="h-10 w-9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C10 12 16 6 24 6H36C44 6 50 12 50 20V55C50 60 46 64 41 64H19C14 64 10 60 10 55V20Z"
                      fill="currentColor"
                      className="text-primary"
                    />
                    <path
                      d="M15 22C15 16 19 12 25 12H35C41 12 45 16 45 22V52C45 56 42 59 38 59H22C18 59 15 56 15 52V22Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="3"
                    />
                    <rect
                      x="22"
                      y="6"
                      width="16"
                      height="12"
                      rx="2"
                      fill="white"
                      stroke="black"
                      strokeWidth="3"
                    />
                    <path
                      d="M26 28V38M30 30V40M34 26V36"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M24 48V52M28 46V54M32 48V52M36 47V51"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-xl font-black">
                    <span className="text-foreground">OBC</span>
                    <span className="text-primary block text-xs font-semibold tracking-widest">
                      PRODUÇÕES
                    </span>
                  </span>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-semibold uppercase tracking-wide transition-colors hover:text-primary py-3 border-b border-border",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="mt-8">
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
