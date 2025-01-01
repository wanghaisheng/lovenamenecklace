import { getNewInProducts } from "@/queries/getProducts";
import ProductCard2 from "./productCard2";
import { NewInItems } from "../../../typings";

export default async function YouMayAlsoLike({
  type,
  slug,
}: {
  type: string;
  slug: string;
}) {
  const products = await getNewInProducts(type);
  return (
    <div className="w-full space-y-4 lg:space-y-8 mt-10 lg:mt-20">
      <h1 className="text-2xl">You may also like</h1>
      <div className="flex snap-x snap-mandatory sm:grid sm:grid-cols-12 overflow-auto hide-x-scrollbar">
        <div className="flex gap-x-4 sm:gap-x-10">
          {products
            .filter((item) => item.slug !== slug)
            .map((item) => {
              return (
              <div className="snap-start snap-always" key={item.id}>
                <ProductCard2
                  jewelry={item}
                  widthStyle="w-[15rem] sm:w-[25rem] lg:w-[20rem] "
                  heightStyle="h-[18rem] sm:h-[22rem]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
