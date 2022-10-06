import Image from "next/image";
import { FC } from "react";

import SwapCard from "components/swap/Card";

const Section: FC<Record<string, never>> = () => {
  return (
    <section className="relative w-full overflow-hidden py-[70px] text-black">
      <div className="absolute top-5 left-[-10px] z-[-2] h-[10vh] w-[80vw] md:left-[-500px]">
        <Image
          src="/assets/swap_bg.png"
          width={2124}
          height={2124}
          alt="swap_bg"
        />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-evenly md:flex-row">
        <div>
          <SwapCard />
        </div>
        <div className="max-w-[75vw] pt-10 md:max-w-[450px] md:pt-0">
          <h2 className="text-7xl font-black italic text-btn1">TRADE</h2>
          <h3 className="pb-4 text-4xl font-black italic text-accent2">
            ELEPHANT MONEY
          </h3>
          <div className=" whitespace-pre-line break-normal leading-6">
            <strong>ELEPHANT MONEY</strong> is simply the first global
            decentralized community bank of it&apos;s kind.{"\n"}
            <strong>Trade</strong>, <strong>Buy</strong> and{" "}
            <strong>Save</strong> Elephant Money with{"\n"}
            <span className="font-bold text-btn1">IvoryTusk AUM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
