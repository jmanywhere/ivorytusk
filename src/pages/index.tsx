import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { trpc } from "utils/trpc";

import Header from "components/Header";
import ConnectModal from "components/ConnectModal";
import SwapSection from "components/swap/Section";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>IvoryTusk AUM</title>
        <meta
          name="description"
          content="Trade, Earn, Elephant Money on the most popular decentralized platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen w-full flex-col pb-4 text-white">
        <ConnectModal />
        <section className="relative w-full overflow-hidden">
          <div className="absolute z-[-1] h-full w-full overflow-hidden">
            <Image
              src="/assets/bg.png"
              layout="fill"
              objectFit="cover"
              alt="bg"
            />
          </div>
          <Header />
          <div className="flex-col items-center justify-center px-14 pt-20 pb-24 md:flex md:flex-row">
            <div className="w-full md:w-[50%]">
              <h1 className="text-4xl font-bold">
                Trade, Earn,{" "}
                <span className=" text-secondaryLight">Elephant Money</span> on
                the most popular decentralized platform.
              </h1>
              <button className="sButton mt-2 px-6 py-2">
                <div className="unskew">Buy Elephant</div>
              </button>
            </div>
            <div className="w-full md:w-[50%]">Other Image</div>
          </div>
        </section>
        <SwapSection />
      </main>
    </>
  );
};

export default Home;
