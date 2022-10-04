const Header = () => {
  return (
    <header className="bg-transparent top-0 flex items-center justify-between py-8 px-4 text-white">
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
        onClick={() => console.log("connectClick")}
      >
        <div className="unskew">Connect Wallet</div>
      </button>
    </header>
  );
};

export default Header;
