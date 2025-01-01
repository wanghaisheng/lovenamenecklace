import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="w-full flex flex-col items-center gap-y-10 lg:gap-y-14 my-10 sm:my-20">
      <div className="flex flex-col items-center gap-y-6 lg:gap-y-8">
        <h1 className="text-[32px] sm:text-[40px] lg:text-5xl">
          Your cart is empty
        </h1>
        <Link href="/shop" className="px-10 py-3 bg-black text-white">
          Continue Shopping
        </Link>
      </div>
      <div className="text-center space-y-2 sm:space-y-0">
        <h4 className="text-xl sm:text-2xl">Have an account?</h4>
        <p>
          <Link
            href="/sign-in"
            className="border-b-[1px] hover:border-b-[3px] border-black pb-[0.5px] cursor-pointer text-[#7247FF]"
          >
            Log in
          </Link>{" "}
          to check out faster
        </p>
      </div>
    </div>
  );
}
