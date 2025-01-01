"use client";
import CartItems from "@/components/cart/cartItems";
import EmptyCart from "@/components/cart/emptyCart";
import { useAppSelector } from "@/lib/hook";

export default function CartPage() {
  const { cart, total } = useAppSelector((state) => state.cart);

  return (
    <main className="w-[90%] lg:w-[70%] mx-auto py-12">
      {cart.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">Your Cart</h1>
            <p className="underline">Continue Shopping</p>
          </div>
          <section className="w-full">
            <div className="w-full grid grid-cols-12 border-b-[2px] border-gray-200 pb-4">
              <div className="text-left col-span-3 sm:col-span-2 lg:col-span-1 uppercase">
                <p className="font-light text-gray-500 text-sm">product</p>
              </div>
              <div className="text-left col-span-7 sm:col-span-5 lg:col-span-6 uppercase">
                <p className="hidden text-gray-500 text-sm">description</p>
              </div>
              <div className="text-center hidden sm:flex sm:col-span-3 uppercase">
                <p className="font-light text-gray-500 text-sm">quantity</p>
              </div>
              <div className="text-right col-span-2 uppercase">
                <p className="font-light text-gray-500 text-sm">total</p>
              </div>
            </div>
            <CartItems cart={cart} total={total} />
          </section>
        </>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
}
