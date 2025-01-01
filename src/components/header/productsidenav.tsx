import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProductSideNav({
  showProductNav,
  setShowProductNav,
}: {
  showProductNav: boolean;
  setShowProductNav: (val: boolean) => void;
}) {
  return (
    <div className={`${showProductNav ? "block" : "hidden"}`}>
      <ul className="py-8">
        <li className="text-lg px-6 py-2 hover:bg-gray-100">
          <div
            className="flex items-center gap-2"
            onClick={() => setShowProductNav(false)}
          >
            <FaArrowLeftLong size={15} />
            <p>Products</p>
          </div>
        </li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Stargirl</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Eternal</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Wellness</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Jewelry</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Clothing</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Accessories</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Cover</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">Costumi</li>
        <li className="text-lg px-6 py-2 hover:bg-gray-100">#hotmoresummer</li>
      </ul>
    </div>
  );
}
