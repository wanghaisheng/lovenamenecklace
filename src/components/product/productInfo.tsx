"use client";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { NewInItems } from "../../../typings";
import { useAppDispatch } from "@/lib/hook";
import { addToCart } from "@/lib/features/cartSlice";
import Quantity from "./quantity";
import { useUser } from "@clerk/nextjs";
import { useRouter} from "next/navigation";
import { setLocal } from "@/util/setPathToLocal";

export default function ProductInfo({ item }: { item: NewInItems }) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  const [colorVal, setColorVal] = useState("");
  const [showDesc, setShowDesc] = useState(false);
  const [showSpec, setShowSpec] = useState(false);
  const [showShip, setShowShip] = useState(false);
  const [error, setError] = useState("");

  const { isSignedIn } = useUser();

  const router = useRouter();

  const changeValue = (action: string) => {
    if (action === "increase") {
      setValue(value + 1);
    } else {
      if (value === 1) return;
      setValue(value - 1);
    }
  };


  const addItemToCart = () => {
    if (isSignedIn) {
      if (!colorVal) {
        setError("choose a color");
        return;
      }
      const newItem = {
        id: item.id,
        name: item.name,
        image: item.images[0],
        color: colorVal,
        quantity: value,
        price: item.price,
        total: value * item.price,
      };
      dispatch(addToCart(newItem));
      setValue(1);
    } else {
      setLocal(router);
    }
  };

  useEffect(() => {
    if (item?.colors.length === 1) {
      setColorVal(item.colors[0]);
    }
  }, [item?.colors]);

  return (
    <div className="w-full lg:w-[50%]">
      <div className="space-y-2">
        <p className="text-red-600 font-semibold">SALE</p>
        <h4 className=" text-3xl sm:text-5xl font-medium">BUBE {item?.name}</h4>
        <p className="text-2xl lg:text-xl">
          &#8358; {item?.price.toLocaleString()}
        </p>
        <p className="text-normal lg:text-sm">
          Tax included. <span className="underline">Shipping</span> calculated
          at checkout.
        </p>
      </div>
      <div className="space-y-2 mt-4">
        <p>Material</p>
        <div className="flex gap-x-2">
          {item?.colors.map((color, index) => (
            <div
              key={index}
              className={`border-2 text-black w-20 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                color === colorVal ? "bg-black text-white" : ""
              }`}
              onClick={() => {
                setColorVal(color);
                setError("");
              }}
            >
              <p className="">{color}</p>
            </div>
          ))}
        </div>
        {error && <span className="text-red-600">{error}</span>}
      </div>
      <div className="space-y-2 mt-4">
        <p className="">Quantity</p>
        <Quantity value={value} changeValue={changeValue} />
      </div>
      <div className="w-full mt-8">
        <button
          className="border-[1px] border-black hover:ring-black hover:ring-[1px] w-full py-3 lg:py-2 duration-200 transition-all ease-linear"
          onClick={addItemToCart}
        >
          Add To Cart
        </button>
      </div>
      <div className="mt-8 w-full">
        <div className="w-full border-b-[1px] border-stone-300 py-2 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowDesc(!showDesc)}
          >
            <p className="text-lg font-medium">Description</p>
            <FaAngleDown
              size={15}
              className={`transition-all duration-150 ease-linear ${
                showDesc ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <p className={`text-sm px-2 pb-2 ${showDesc ? "block" : "hidden"}`}>
            {item?.description}
          </p>
        </div>
        <div className="w-full border-b-[1px] border-stone-300 py-2 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowSpec(!showSpec)}
          >
            <p className="text-lg font-medium">Specification</p>
            <FaAngleDown
              size={15}
              className={`transition-all duration-150 ease-linear ${
                showSpec ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <p className={`text-sm px-2 pb-2 ${showSpec ? "block" : "hidden"}`}>
            Materials Constructed in smooth, Italian leather with a spacious
            cotton lined interior and two internal zip pockets for valuables.
            Includes a detachable pouch that can be attached internally or
            externally. Size 26cm (W) x 33.6cm (H) x 16cm (D) Strap drop 25cm
          </p>
        </div>
        <div className="w-full border-b-[1px] border-stone-300 py-2 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowShip(!showShip)}
          >
            <p className="text-lg font-medium">Shipping</p>
            <FaAngleDown
              size={15}
              className={`transition-all duration-150 ease-linear ${
                showShip ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <p className={`text-sm px-2 pb-2 ${showShip ? "block" : "hidden"}`}>
            We offer free shipping across nigeria.
          </p>
        </div>
      </div>
    </div>
  );
}
