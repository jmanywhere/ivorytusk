import { useAtom } from "jotai";
import { buyCC } from "utils/atoms";

const BuyWithCardModal = () => {
  const [isOpen, setIsOpen] = useAtom(buyCC);
  return (
    <>
      {isOpen && (
        <dialog
          open={isOpen}
          className="fixed top-[20%] bottom-auto left-auto right-auto z-50 mx-auto flex min-h-[390px] min-w-[330px] max-w-[80vw] items-stretch justify-center self-center overflow-hidden rounded-lg border border-[rgb(51,13,83)] bg-[rgb(21,5,35)] p-0 text-white"
        >
          <iframe
            frameBorder="none"
            className="flex-grow"
            src="https://widget.changelly.com?from=usd%2Ceur%2Cgbp%2Cngn%2Ccad&to=busdbsc%2Cbnbbsc&amount=35&address=&fromDefault=usd&toDefault=busdbsc&merchant_id=BbASMs0V_qcBBAdI&payment_id=&v=3&type=no-rev-share&color=&headerId=1&logo=hide&buyButtonTextId=1"
          >
            Can&apos;t load widget
          </iframe>
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

export default BuyWithCardModal;
