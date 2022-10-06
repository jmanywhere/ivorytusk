import { FC, useRef, useState } from "react";
import Image from "next/image";

const Card: FC<Record<string, never>> = () => {
  const [fromToken, setFromToken] = useState<string>("busd");

  const selRef = useRef<HTMLSelectElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);

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
      <div className="flex flex-row items-center justify-between pb-2">
        <div className="pl-2 text-sm font-semibold">From</div>
        <div className="flex flex-row items-center justify-end">
          <div
            className="overflow-hidden rounded-full pr-2"
            onClick={() => selRef.current?.focus()}
          >
            <Image
              src={tokenImage[fromToken] || ""}
              height={24}
              width={24}
              alt="fromToken"
            />
          </div>
          <select
            className="text-sm font-semibold"
            onChange={(e) => setFromToken(e.target.value)}
            value={fromToken}
            ref={selRef}
          >
            <option value="bnb">BNB</option>
            <option value="busd">BUSD</option>
            <option value="trunk">TRUNK</option>
            <option value="elephant">EM</option>
          </select>
        </div>
      </div>
      <input
        className="w-full rounded-xl bg-gray-300 py-2 px-4 text-right"
        ref={fromRef}
        placeholder="0.00"
      />
      <div className="text-right text-sm">Wallet: 1.2586794613</div>
      <button className="w-full rounded-2xl bg-btn1 py-4 text-sm font-bold text-white">
        Swap
      </button>
    </div>
  );
};

export default Card;

const tokenImage: { [key: string]: string } = {
  bnb: "/tokens/bnb.webp",
  busd: "/tokens/BUSD.webp",
  elephant: "/tokens/em.webp",
  trunk: "/tokens/trunk.png",
};
