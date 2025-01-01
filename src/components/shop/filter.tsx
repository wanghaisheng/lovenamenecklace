import { FaAngleDown } from "react-icons/fa6";

export default function Filter({amount} : {amount: number}) {
  return (
    <div className="hidden sm:flex justify-between p-0">
      <div className="flex items-center gap-4">
        <p>Filter:</p>
        <div className="flex gap-x-8">
          <div className="flex gap-2">
            <p>Availabilty</p>
            <svg
              aria-hidden="true"
              focusable="false"
              className="w-3 mt-1"
              viewBox="0 0 10 6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="flex gap-2">
            <p>Price</p>
            <svg
              aria-hidden="true"
              focusable="false"
              className="w-3 mt-1"
              viewBox="0 0 10 6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex">
        <p>Sort by:</p>
        <div className="flex gap-x-8">
          <div>
            <select name="featured">
              <option value="default">Featured</option>
              <option value="best_selling">Best Selling</option>
              <option value="a-z">Alphebetically, A-Z</option>
              <option value="z-a">Alphebetically, Z-A</option>
              <option value="low-high">Price, low to high</option>
              <option value="high-low">Price, high to low</option>
              <option value="old-new">Date, old to new</option>
              <option value="new-old">Date, new to old</option>
            </select>
          </div>
          <p>{amount} products</p>
        </div>
      </div>
    </div>
  );
}
