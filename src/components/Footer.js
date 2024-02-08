import { PrinterIcon, ShareIcon } from "lucide-react";
import { METADATA, YEAR } from "@/Constants";
import Share from "@/components/Share";

export const Footer = () => {
  return (
    <>
      <footer className="border-t border-zinc-200/65 py-4 mt-4">
        <button
          className="border rounded-md px-2 py-1 no-print func-buttons"
          onClick={() => window.print()}
          title={`Imprimir ${METADATA.title}`}
        >
          <PrinterIcon className="w-[18px] inline text-zinc-500" />
        </button>
        <button
          className="border rounded-md px-2 py-1 no-print func-buttons"
          onClick={Share()}
          title={`Compartir ${METADATA.title}`}
        >
          <ShareIcon className="w-[18px] inline text-zinc-500" />
        </button>
      </footer>
      <p className="text-xs justify-center mx-auto pt-4 pb-0 mb-0">
        &copy;{YEAR} · {METADATA.title}
      </p>
    </>
  );
};

export default Footer;
