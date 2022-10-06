import { FC } from "react";

const Card: FC<Record<string, never>> = () => {
  return (
    <div className="cardShadow flex w-[320px] flex-col rounded-2xl bg-white px-7 pb-9 pt-5">
      <div className="flex items-center justify-center rounded-lg bg-gray-300">
        <button className="rounded-lg bg-btn1 p-2 font-bold text-white">
          Exchange
        </button>
      </div>
      <p className="mt-8 text-center text-[13.28px] font-semibold">
        Trade Elephant Money in an instant
      </p>
      <hr className="border-[rgba(35, 25, 66, 0.36)] mt-7 mb-12 w-full border" />
      <button className="w-full rounded-2xl bg-btn1 py-4 text-sm font-bold text-white">
        Swap
      </button>
    </div>
  );
};

export default Card;
