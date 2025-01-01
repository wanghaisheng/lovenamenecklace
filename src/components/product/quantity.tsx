export default function Quantity({
  value,
  changeValue,
}: {
  value: number;
  changeValue: (input: string) => void
}) {
  return (
    <div className="w-40 h-12 flex border-[1px] border-black">
      <button
        className={`basis-[50%] w-full h-full flex justify-center items-center ${
          value === 1 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => changeValue("decrease")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          className="w-4"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <div className="basis-[50%] flex justify-center items-center">
        <span className="text-lg">{value}</span>
      </div>
      <button
        className="text-3xl basis-[50%] w-full h-full"
        onClick={() => changeValue("increase")}
      >
        +
      </button>
    </div>
  );
}
