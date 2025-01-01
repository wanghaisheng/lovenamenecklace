"use client";
import Image from "next/image";
import { CartType } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";
import Quantity from "../product/quantity";
import { useState } from "react";
import { setItemQuantity, deleteItem } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/hook";

export default function CartItem({ item }: { item: CartType }) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(item.quantity);

  const changeValue = (action: string) => {
    if (action === "increase") {
      dispatch(
        setItemQuantity({ id: item.id, color: item.color, quantity: value + 1 })
      );
      setValue(value + 1);
    } else if (action === "decrease" && value === 1) {
      return;
    } else if (action === "decrease" && value > 1) {
      dispatch(
        setItemQuantity({
          id: item.id,
          color: item.color,
          quantity: value - 1,
        })
      );
      setValue(value - 1);
    }
  };

  return (
    <div className="grid grid-cols-12 border-b-[1px] border-gray-200">
      <div className="relative w-full sm:w-[7rem] lg:w-full h-[6rem] row-span-2 col-span-3 sm:col-span-2 lg:col-span-1">
        <Image src={urlForImage(item.image)} alt={item.name} fill />
      </div>
      <div className="col-span-7 sm:col-span-8 lg:col-span-9 sm:grid sm:grid-cols-12">
        <div className="sm:col-span-7 lg:col-span-8 py-0 px-4 sm:p-4 space-y-1">
          <p className="text-lg">BUBE {item.name}</p>
          <p>&#8358; {item.price.toLocaleString()}</p>
          <p className="text-sm capitalize">Color: {item.color}</p>
        </div>
        <div className="sm:col-span-5 lg:col-span-4 p-4 flex items-center gap-x-6 lg:gap-x-4">
          <Quantity value={value} changeValue={changeValue} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            focusable="false"
            className="w-6 h-6 sm:w-5 sm:h-5 cursor-pointer"
            onClick={() =>
              dispatch(deleteItem({ id: item.id, color: item.color }))
            }
          >
            <path
              d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
              fill="currentColor"
            ></path>
            <path
              d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="col-span-2 sm:place-content-center text-right whitespace-nowrap">
        &#8358;{item.total.toLocaleString()}
      </div>
    </div>
  );
}
