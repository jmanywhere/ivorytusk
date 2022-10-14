import { FC, useCallback, useRef, useState } from "react";
import Image from "next/image";
import useToken from "hooks/useToken";
import { BigNumber } from "ethers";
import { commify, formatEther, parseEther } from "ethers/lib/utils";
import { useSetAtom } from "jotai";
import { buyCC } from "utils/atoms";

const Card: FC<Record<string, never>> = () => {
  const [fromToken, setFromToken] = useState<string>("busd");
  const [toToken, setToToken] = useState<string>("elephant");

  const setBuyOpen = useSetAtom(buyCC);

  const selectFrom = useRef<HTMLSelectElement>(null);
  const selectTo = useRef<HTMLSelectElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  const { balance: busdBalance } = useToken(
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
  );
  const { balance: trunkBalance } = useToken(
    "0xdd325C38b12903B727D16961e61333f4871A70E0"
  );
  const { balance: elephantBalance } = useToken(
    "0xe283d0e3b8c102badf5e8166b73e02d96d92f688"
  );

  const { balance: bnbBalance } = useToken();

  const switchTokens = () => {
    const cF = fromToken;
    const cT = toToken;
    if (cF === cT) return;
    setFromToken(cT);
    setToToken(cF);
  };

  const currentTokenBalance: { [key: string]: BigNumber } = {
    busd: busdBalance,
    bnb: bnbBalance,
    elephant: elephantBalance.mul(10 ** 9),
    trunk: trunkBalance,
  };

  const swap = useCallback(async () => {
    console.log("swap", {
      sendVal: fromRef.current?.value || "no val",
      selectFrom: selectFrom.current?.value,
    });
  }, []);

  return (
    <div className="cardShadow flex w-[320px] flex-col rounded-2xl bg-white px-7 pb-9 pt-5">
      <div className="flex items-center justify-center rounded-lg bg-gray-300">
        <button className="flex-1 cursor-default rounded-l-lg bg-btn1 p-2 font-bold text-white">
          Exchange
        </button>
        <button
          className="flex-1 rounded-r-lg bg-gray-600 p-2 font-bold text-white hover:bg-gray-200/20 hover:text-black"
          onClick={() => setBuyOpen(true)}
        >
          Buy
        </button>
      </div>
      <p className="mt-8 text-center text-[13.28px] font-semibold">
        Trade Elephant Money in an instant
      </p>
      <hr className="border-[rgba(35, 25, 66, 0.36)] mt-7 mb-12 w-full border" />
      <div className="flex flex-row items-center justify-between pb-1">
        <div className="pl-2 text-sm font-semibold">From</div>
        <div className="flex flex-row items-center justify-end">
          <div
            className="overflow-hidden rounded-full pr-2"
            onClick={() => selectFrom.current?.focus()}
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
            ref={selectFrom}
          >
            <option value="bnb">BNB</option>
            <option value="busd">BUSD</option>
            <option value="trunk">TRUNK</option>
            <option value="elephant">EM</option>
          </select>
        </div>
      </div>
      <div className="pb-8">
        <input
          className="w-full rounded-xl bg-gray-300 py-2 px-4 text-right"
          ref={fromRef}
          placeholder="0.00"
          type="number"
        />
        <div className="pr-2 text-right text-sm">
          Wallet:{" "}
          {commify(
            parseFloat(
              formatEther(currentTokenBalance[fromToken] ?? parseEther("0"))
            ).toFixed(4)
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={switchTokens}>
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.644531"
              y="0.227051"
              width="26.5607"
              height="26.5607"
              rx="13.2804"
              fill="#70155A"
            />
            <path
              d="M14.7558 11.0177C14.5779 11.0177 14.8743 11.1125 14.7558 11.0177L11.4357 8.52761C11.1985 8.33789 11.1985 7.88731 11.4357 7.69759C11.6728 7.50787 12.0285 7.50787 12.2657 7.69759L15.5858 10.1877C15.8229 10.3774 15.8229 10.828 15.5858 11.0177C15.4672 11.1125 14.9336 11.0177 14.7558 11.0177Z"
              fill="white"
            />
            <path
              d="M8.94538 11.0177C8.76752 11.0177 8.23394 11.1125 8.11536 11.0177C7.87821 10.828 7.87821 10.3774 8.11536 10.1877L11.4355 7.69759C11.6726 7.50787 12.0283 7.50787 12.2655 7.69759C12.5026 7.88731 12.5026 8.33789 12.2655 8.52761L8.94538 11.0177C8.82681 11.1125 9.12325 11.0177 8.94538 11.0177Z"
              fill="white"
            />
            <path
              d="M12.2661 16.8278C11.768 16.8278 11.436 16.3021 11.436 15.9977V8.52753C11.436 8.22319 11.768 7.69751 12.2661 7.69751C12.7641 7.69751 13.0961 8.22319 13.0961 8.52753V15.9977C13.0961 16.3021 12.7641 16.8278 12.2661 16.8278Z"
              fill="white"
            />
            <path
              d="M18.9057 19.3177C18.7278 19.3177 19.0242 19.2228 18.9057 19.3177L15.5856 21.8077C15.3484 21.9974 15.3484 22.448 15.5856 22.6377C15.8227 22.8275 16.1784 22.8275 16.4156 22.6377L19.7357 20.1477C19.9728 19.958 19.9728 19.5074 19.7357 19.3177C19.6171 19.2228 19.0835 19.3177 18.9057 19.3177Z"
              fill="white"
            />
            <path
              d="M13.0953 19.3177C12.9174 19.3177 12.3838 19.2228 12.2653 19.3177C12.0281 19.5074 12.0281 19.958 12.2653 20.1477L15.5854 22.6377C15.8225 22.8275 16.1782 22.8275 16.4154 22.6377C16.6525 22.448 16.6525 21.9974 16.4154 21.8077L13.0953 19.3177C12.9767 19.2228 13.2731 19.3177 13.0953 19.3177Z"
              fill="white"
            />
            <path
              d="M16.416 13.5076C15.9179 13.5076 15.5859 14.0333 15.5859 14.3376V21.8078C15.5859 22.1121 15.9179 22.6378 16.416 22.6378C16.914 22.6378 17.246 22.1121 17.246 21.8078V14.3376C17.246 14.0333 16.914 13.5076 16.416 13.5076Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="pt-8">
        <div className="p1-2 flex flex-row items-center justify-between">
          <div className="pl-2 text-sm font-semibold">To</div>
          <div className="flex flex-row items-center justify-end">
            <div
              className="overflow-hidden rounded-full pr-2"
              onClick={() => selectTo.current?.focus()}
            >
              <Image
                src={tokenImage[toToken] || ""}
                height={24}
                width={24}
                alt="fromToken"
              />
            </div>
            <select
              className="text-sm font-semibold"
              onChange={(e) => setToToken(e.target.value)}
              value={toToken}
              ref={selectTo}
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
          ref={toRef}
          placeholder="0.00"
        />
        <div className="pr-2 text-right text-sm">
          Wallet:{" "}
          {commify(
            parseFloat(
              formatEther(currentTokenBalance[toToken] ?? parseEther("0"))
            ).toFixed(4)
          )}
        </div>
      </div>
      <div className="my-6 flex flex-row justify-between">
        <div className="text-sm font-semibold text-accent">Trading fees</div>
        {/* TRADING FEES BY PAIR */}
        {/* Exchange BNB - BUSD and vice versa */}
        <div className="text-sm font-semibold">
          {fromToken == "elephant" || toToken == "elephant" ? "12" : "2"}%
        </div>
      </div>
      <button
        className="w-full rounded-2xl bg-btn1 py-4 text-sm font-bold text-white"
        onClick={swap}
      >
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
