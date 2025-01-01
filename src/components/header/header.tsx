"use client";
import SubHeader from "./subheader";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import NavHeader from "./navheader";
import SideNav from "./sidenav";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/lib/hook";
import { getCartFromLocalStorage } from "@/lib/features/cartSlice";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { setLocal } from "@/util/setPathToLocal";

export default function Header() {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const router = useRouter();

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    dispatch(getCartFromLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [show]);

  return (
    <header className="w-full">
      <SubHeader />
      <nav className="py-2 sm:py-6 space-y-6 border-b-[0.5px] border-stone-200">
        <div className="w-[95%] sm:w-[95%] lg:w-[70%] mx-auto flex justify-between items-center">
          <IoIosSearch
            size={24}
            color="#000"
            className="cursor-pointer hidden lg:block"
          />
          <div className="flex items-center gap-x-4 sm:gap-x-8 lg:gap-x-0">
            <div onClick={toggle}>
              {!show ? (
                <FaBars
                  color="#000"
                  className="cursor-pointer block lg:hidden text-xl sm:text-2xl"
                />
              ) : (
                <IoMdClose
                  size={28}
                  color="#000"
                  className="cursor-pointer block lg:hidden"
                />
              )}
            </div>
            <Link
              href="/"
              className="text-[28px] sm:text-4xl font-bold text-black cursor-pointer"
            >
              Bube
            </Link>
          </div>
          <div className="flex items-end gap-3 sm:gap-5">
            <IoIosSearch
              color="#000"
              className="cursor-pointer block lg:hidden text-xl sm:text-2xl"
            />
            <div className="hidden sm:flex items-end p-0 m-0">
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
              </SignedIn>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <p
                  // href="/sign-in"
                  className="hover:bg-gray-300 py-1 px-3 rounded-2xl text-sm cursor-pointer"
                  onClick={() => setLocal(router)}
                >
                  Sign in
                </p>
              </SignedOut>
            </div>
            <Link href="/cart" className="relative cursor-pointer">
              <IoBagHandleOutline
                color="#000"
                className="text-xl sm:text-2xl"
              />
              {cart.length > 0 && (
                <span className="text-white bg-black h-4 w-4 rounded-full text-xs flex justify-center items-center absolute -bottom-[4px] -right-1">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
        <NavHeader />
      </nav>
      <SideNav show={show} setLocal={setLocal} toggle={toggle} />
    </header>
  );
}
