"use client";
import Image from "next/image";
import { NewInItems } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";
import Link from "next/link";

export default function ProductCard2({
  jewelry,
  widthStyle,
  heightStyle,
}: {
  jewelry: NewInItems;
  widthStyle: string;
  heightStyle: string;
}) {
  const [current, setCurrent] = useState(0);
  const { name, images, price, slug, _type } = jewelry;
  // console.log("OBJECT---------", jewelry);
  // console.log("SLUG FOR CARD 2 slug", slug)
  // console.log("SLUG FOR CARD 2 type", _type)
  // console.log("SLUG FOR CARD 2 name", name)
  return (
    <Link
      href={`/products/${_type}/${slug}`}
      className={`group ${widthStyle} space-y-4 snap-center sm:snap-end`}
      onMouseEnter={() => setCurrent(1)}
      onMouseLeave={() => setCurrent(0)}
    >
      <div className={`relative ${widthStyle} ${heightStyle}`}>
        <Image
          src={urlForImage(images[current])}
          alt={name}
          className=""
          fill
        />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm group-hover:underline group-hover:underline-offset-2">
          BUBE {name}
        </h4>
        <p className="text-lg">&#8358; {price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
