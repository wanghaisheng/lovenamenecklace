"use client";
import { FaFacebookF, FaYoutube, FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useState } from "react";
import ProductSideNav from "./productsidenav";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

export default function SideNav({
  show,
  toggle,
  setLocal,
}: {
  show: boolean;
  toggle: () => void;
  setLocal: (router: AppRouterInstance) => void;
}) {
  const [showProductNav, setShowProductNav] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`fixed top-[90px] z-50 h-[90vh] w-full block lg:hidden ${
        show ? "translate-x-0 " : "-translate-x-[500px]"
      }`}
    >
      <div
        className={`relative w-full h-full`}
      >
        <div
          className={`bg-black absolute top-0 right-0 left-0 bottom-0 ${
            show
              ? "bg-opacity-0 block sm:bg-opacity-30 lg:hidden sm:backdrop-blur"
              : "bg-opacity-0 hidden"
          }`}
          onClick={toggle}
        ></div>
        <div
          className={`w-full overflow-auto flex flex-col justify-between sm:w-[400px] bg-white h-full border-[#d4d1d1] border-[0.5px] z-[200] ease-in-out duration-300 delay-[30ms] ${
            show ? "translate-x-0" : "-translate-x-[700px]"
          }`}
        >
          <ul className={`py-8 ${showProductNav ? "hidden" : "block"}`}>
            <li className="text-lg px-6 py-2 hover:bg-gray-100">
              <div
                className="flex items-center justify-between"
                onClick={() => setShowProductNav(true)}
              >
                <p>Products</p>
                <FaArrowRightLong size={15} />
              </div>
            </li>
            <li className="text-lg px-6 py-2 hover:bg-gray-100">Last Call</li>
            <li className="text-lg px-6 py-2 hover:bg-gray-100">
              Social Responsibility
            </li>
            <li className="text-lg px-6 py-2 hover:bg-gray-100">Concept</li>
            <li className="text-lg px-6 py-2 hover:bg-gray-100">FAQ</li>
            <li className="text-lg px-6 py-2 hover:bg-gray-100">
              How to find your ring size
            </li>
          </ul>
          <ProductSideNav
            showProductNav={showProductNav}
            setShowProductNav={setShowProductNav}
          />

          <div className="pt-8 pb-16 px-6 space-y-8 sm:space-y-0 bg-gray-100">
            <div className="flex sm:hidden items-end p-0 m-0">
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
              </SignedIn>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <p
                  // href="/sign-in"
                  className="hover:bg-gray-300 py-1 px-3 rounded-2xl text-base cursor-pointer"
                  onClick={() => setLocal(router)}
                >
                  Sign in
                </p>
              </SignedOut>
            </div>
            <div className="flex justify-start items-end gap-x-4">
              <FaFacebookF size={20} />
              <FaInstagram size={20} />
              <FaTiktok size={20} />
              <FaYoutube size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
