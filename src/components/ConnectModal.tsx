import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect } from "react";
import { connectWallet } from "utils/atoms";
import { ConnectorNames, useAuth } from "utils/useAuth";

const ConnectModal = () => {
  const [isOpen, setIsOpen] = useAtom(connectWallet);

  const { login, account } = useAuth();

  useEffect(() => {
    if (account) setIsOpen(false);
  });

  return (
    <>
      {isOpen && (
        <dialog
          open={isOpen}
          className="fixed top-[20%] bottom-auto left-auto right-auto z-50 grid min-w-[300px] max-w-[80vw] grid-cols-1 grid-rows-2 items-center justify-center self-center rounded-lg border border-[rgb(51,13,83)] bg-[rgb(21,5,35)] p-0 text-white md:max-w-[50vw] md:grid-cols-2"
        >
          <div className="flex items-center justify-center border-r-[1px] border-[rgb(51,13,83)]">
            <WalletCard
              wallet="Metamask"
              img="/assets/metamask.png"
              onClick={() => login(ConnectorNames["INJECTED"])}
            />
          </div>
          <div className="flex items-center justify-center">
            <WalletCard
              wallet="WalletConnect"
              img="/assets/walletconnect.png"
              sizes={{ height: 28.5, width: 40 }}
              secondary="Connect to your Wallet"
              onClick={() => login(ConnectorNames["WALLET_CONNECT"])}
            />
          </div>
          <div className="flex items-center justify-center border-r-[1px] border-t-[1px] border-[rgb(51,13,83)]">
            <WalletCard
              wallet="Binance Wallet"
              img="/assets/binance.png"
              secondary="Connect to your Binance Wallet"
              onClick={() => login(ConnectorNames["BINANCE"])}
            />
          </div>
          <div className="flex items-center justify-center border-t-[1px] border-[rgb(51,13,83)]">
            <WalletCard
              wallet="Coinbase Wallet"
              img="/assets/coinbase.png"
              secondary="Scan with Coinbase Wallet"
              onClick={() => login(ConnectorNames["COINBASE"])}
            />
          </div>
        </dialog>
      )}

      {isOpen && (
        <div
          className="pin fixed z-40 flex h-screen w-screen overflow-auto bg-smoke-light"
          id="connect-modal"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ConnectModal;

const WalletCard = (props: {
  wallet: string;
  secondary?: string;
  img: string;
  sizes?: {
    width: number;
    height: number;
  };
  onClick: () => void;
}) => {
  const { wallet, img, secondary, sizes, onClick } = props;

  return (
    <button
      className="flex min-w-[320px] flex-col items-center justify-center p-5 md:p-[40px]"
      onClick={onClick}
    >
      <div className="h-[40px]">
        <Image
          src={img}
          height={sizes?.height || 40}
          width={sizes?.width || 40}
          alt="metamask_logo"
        />
      </div>
      <div className="py-[8px] text-center text-2xl font-semibold">
        {wallet}
      </div>
      <div className="font-regular flex-shrink-0 text-center text-sm">
        {secondary || `Connect to your ${wallet}`}
      </div>
    </button>
  );
};
