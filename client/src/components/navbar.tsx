'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { Bell, Menu, ShoppingBag, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b shadow-sm sticky top-0 z-50 bg-white transition-shadow">
      <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" className="text-2xl font-extrabold">
            Paathshala
          </Link>
        </div>

        {/* Center: Navigation + Search + My Learning + Icons + Auth */}
        <div className="hidden md:flex items-center flex-1 justify-end gap-6">
          {/* Explore Dropdown */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link 1</NavigationMenuLink>
                  <NavigationMenuLink>Link 2</NavigationMenuLink>
                  <NavigationMenuLink>Link 3</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="max-w-md w-full">
            <Input
              type="search"
              placeholder="Search any courses..."
              className="pl-10 pr-4 w-full"
            />
          </div>

          {/* My Learning */}
          <Link href="/" className="font-bold whitespace-nowrap">
            My Learning
          </Link>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
              3
            </Badge>
          </Button>

          {/* Notification Bell */}
          <Bell className="h-5 w-5" />

          {/* Auth Buttons */}
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent className="pl-4">
                  <NavigationMenuLink>Link 1</NavigationMenuLink>
                  <NavigationMenuLink>Link 2</NavigationMenuLink>
                  <NavigationMenuLink>Link 3</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <Input type="search" placeholder="Search courses..." />

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="font-bold">
                    My Learning
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <div className="flex gap-2">
                <Link href="/login">
                  <Button className="w-full">Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full">Register</Button>
                </Link>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
}
