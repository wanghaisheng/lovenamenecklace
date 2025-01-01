import { getNewInProducts } from "@/queries/getProducts";
import EmptySection from "./emptySection";
import ProductCard2 from "../product/productCard2";

export default async function Jewelry() {
  const jewelry = await getNewInProducts("jewelry");
  //   console.log("Working ???", jewelry);
  return (
    <section className="bg-[#F3F3F3]">
      <div className="py-8 sm:py-12 space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl w-[95%] lg:w-[70%] mx-auto">
          JEWELRY
        </h1>
        {jewelry.length === 0 ? (
          <EmptySection section="Jewelry" />
        ) : (
          <div className="flex snap-x snap-mandatory sm:grid sm:grid-cols-12 overflow-auto hide-x-scrollbar pl-[2%] lg:pl-[15%]">
            <div className="flex gap-x-4 sm:gap-x-6">
              {jewelry.map((item) => {
                return (
                  <ProductCard2
                    jewelry={item}
                    key={item.id}
                    widthStyle="w-[15rem] sm:w-[25rem] lg:w-[20rem]"
                    heightStyle="h-[18rem] sm:h-[22rem]"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
