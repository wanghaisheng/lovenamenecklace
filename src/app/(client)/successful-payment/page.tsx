import Link from "next/link";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center h-[70vh] sm:h-[50vh] lg:h-[80vh]">
      <div className="flex flex-col items-center gap-8 sm:gap-10">
        <FaRegCircleCheck size={55} color="#52e248" />
        <div className="text-center space-y-2">
          <h1 className="text-3xl lg:text-4xl font-semibold">Payment Successful!</h1>
          <p className="text-gray-600">Your payment has been completed</p>
        </div>
        <Link
          href="/shop"
          className="bg-black text-white w-80 py-2 rounded-md text-center"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
