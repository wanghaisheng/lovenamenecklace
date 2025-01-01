"use client"
import { NewInItems } from "../../../typings";
import ProductImages from "./productImages";
import ProductInfo from "./productInfo";

export default function ProductDetails({ item }: { item: NewInItems }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ProductImages item={item} />
      <ProductInfo item={item} />
    </div>
  );
}

