"use client";
import { NewInItems } from "../../../typings";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";

export default function ProductImages({ item }: { item: NewInItems }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-8 w-full lg:w-[50%]">
      <div className="flex flex-row sm:flex-col gap-2 sm:gap-4">
        {item?.images?.map((image, index) => {
          return (
            <div
              className={`relative w-[7rem] h-[6rem] sm:h-[8rem] border-[0.5px] border-gray-200 cursor-pointer ${
                current === index ? "ring-black ring-[1.5px]" : "ring-0"
              }`}
              key={index}
              onClick={() => setCurrent(index)}
            >
              <Image
                src={urlForImage(image)}
                alt={item.name}
                className=""
                loading="lazy"
                fill
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-full h-[25rem] sm:h-[38rem] lg:h-[35rem] border-[0.5px] border-gray-200">
        {item?.images && (
          <Image
            src={urlForImage(item?.images[current])}
            alt={item.name}
            className=""
            loading="lazy"
            fill
          />
        )}
      </div>
    </div>
  );
}
