import Image from "next/image";
import { FC } from "react";

const Section: FC<Record<string, never>> = () => {
  return (
    <section className="relative w-full overflow-hidden py-[70px] text-black">
      <div className="absolute -left-44 -top-14 z-[-2] h-[600px] w-[600px]">
        <Image
          src="/assets/swap_bg.png"
          width={2124}
          height={2124}
          alt="swap_bg"
        />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div>SWAP CARD</div>
        <div className="max-w-[75vw] md:max-w-[450px]">
          <h2 className="text-7xl font-black italic text-btn1">TRADE</h2>
          <h3 className="text-4xl font-black italic text-accent2">
            ELEPHANT MONEY
          </h3>
          <p className=" whitespace-pre break-normal leading-6">
            <strong>ELEPHANT MONEY</strong> is simply the first global
            decentralized{"\n"}community bank of it&apos;s kind.{"\n"}
            <strong>Trade</strong>, <strong>Buy</strong> and{" "}
            <strong>Save</strong> Elephant Money with{"\n"}
            <span className="font-bold text-btn1">IvoryTusk AUM</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
