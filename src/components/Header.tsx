import { useWeb3React } from "@web3-react/core";
import { useSetAtom } from "jotai";
import { connectWallet } from "utils/atoms";
import { useAuth } from "utils/useAuth";

const Header = () => {
  const setModal = useSetAtom(connectWallet);

  const { account } = useWeb3React();
  const { logout } = useAuth();

  return (
    <header className="top-0 flex items-center justify-between bg-transparent py-8 px-6 text-white">
      <div className="text-md font-black sm:text-3xl">
        IvoryTusk AUM
        <div className="mx-2 inline h-[40px] w-[35px] border-l-[10px] border-r-[10px] border-white">
          &nbsp;
        </div>
      </div>
      <nav className="hidden flex-grow gap-4 text-2xl font-semibold md:flex ">
        <div className="w-28 text-center">
          <a>Home</a>
        </div>
        <div className="w-28 text-center">
          <a>About</a>
        </div>
      </nav>
      <button
        className="sButton rounded-md px-4 py-2"
        onClick={() => (account ? logout() : setModal(true))}
      >
        <div className="unskew">
          {account
            ? account.substring(0, 5) +
              "..." +
              account.substring(account.length - 4, account.length)
            : "Connect Wallet"}
        </div>
      </button>
    </header>
  );
};

export default Header;
