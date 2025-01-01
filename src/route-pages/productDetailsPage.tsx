import { getProduct } from "@/queries/getProducts";
import ProductImages from "@/components/product/productImages";
import ProductInfo from "@/components/product/productInfo";
import YouMayAlsoLike from "@/components/product/alsoLike";
import ProductDetails from "@/components/product/productDetails";

export default async function ProductDetailsPage({
  type,
  slug,
}: {
  type: string;
  slug: string;
}) {
  const product = await getProduct(type, slug);
  const item = product[0];
  // console.log("SLUUUG", slug);

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-10 sm:my-16 scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <ProductDetails item={item}/>
      <YouMayAlsoLike type={type} slug={slug} />
    </div>
  );
}
