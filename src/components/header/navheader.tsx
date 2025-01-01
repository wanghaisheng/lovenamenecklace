"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function NavHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full hidden lg:flex">
      <ul className="w-[50%] mx-auto flex justify-between items-end">
        <li>
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer hover:underline"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <span>Products</span>{" "}
              <IoIosArrowDown
                size={15}
                className={`transition-all duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
            <ul
              className={`w-48 absolute top-6 py-4 gap-y-3 border-[1px] bg-white border-[#c8c6c6] ${
                open ? "flex flex-col z-50" : "hidden"
              }`}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Stargirl
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Eternal
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Wellness
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Jewelry
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Clothing
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Accessories
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Cover
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                Costume
              </Link>
              <Link
                href="/shop"
                className="px-8 text-sm text-gray-500 hover:text-black hover:underline"
              >
                #hotmoresummer
              </Link>
            </ul>
          </div>
        </li>
        <Link href="/" className="cursor-pointer">
          Last Call
        </Link>
        <Link href="/" className="cursor-pointer">
          Social Responsibility
        </Link>
        <Link href="/" className="cursor-pointer">
          Concept
        </Link>
        <Link href="/" className="cursor-pointer">
          FAQ
        </Link>
        <Link href="/" className="cursor-pointer">
          How to find your ring size
        </Link>
      </ul>
    </div>
  );
}
