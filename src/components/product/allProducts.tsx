import { getAllProducts } from "@/queries/getProducts";
import ProductCard2 from "./productCard2";
import Filter from "../shop/filter";

export default async function AllProducts() {
  const allProducts = await getAllProducts();

  if (allProducts.length === 0) {
    throw new Error("Couldn't retrieve Items 😔");
  }

  return (
    <>
      <Filter amount={allProducts?.length} />
      <div className="grid grid-cols-12 gap-x-2 gap-y-6 sm:gap-y-8">
        {allProducts?.map((item) => {
          return (
            <ProductCard2
              jewelry={item}
              key={item.id}
              widthStyle="col-span-6 lg:col-span-4 w-full"
              heightStyle="h-[12rem] sm:h-[26rem]"
            />
          );
        })}
      </div>
    </>
  );
}
