import ProductCard from "../product/productCard";
import { getNewInProducts } from "@/queries/getProducts";
import EmptySection from "./emptySection";

// export const revalidate = 60;

export default async function NewIn() {
  const newInItems = await getNewInProducts("newIn");
  // console.log(newInItems)

  return (
    <section className="py-12">
      <div className="w-[90%] lg:w-[70%] mx-auto space-y-4 sm:space-y-8">
        <h1 className="text-[28px] sm:text-4xl">BUBE NEW IN & MUST HAVE!</h1>
        {newInItems.length === 0 ? (
          <EmptySection section="New In" />
        ) : (
          <div className="flex snap-x snap-mandatory sm:grid sm:grid-cols-12 gap-4 overflow-auto">
            {newInItems.map((item, idx) => {
              return <ProductCard newInItem={item} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
