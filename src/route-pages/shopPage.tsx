import AllProducts from "@/components/product/allProducts";

export default function ShopPage() {
  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto py-6 sm:py-10">
        <h1 className="text-3xl sm:text-5xl mb-10 sm:mb-20">Shop Sale</h1>
        <main className="space-y-8">
            <AllProducts />
        </main>
    </div>
  )
}