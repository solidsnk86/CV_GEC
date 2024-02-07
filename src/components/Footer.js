import { PrinterIcon } from "lucide-react";
import { METADATA } from "@/Constants";

export const Footer = () => {
  return (
    <>
      <footer className="border-t border-zinc-200/65 py-4 mt-4">
        <button
          className="border rounded-md px-2 py-1 hover:bg-zinc-100 no-print"
          onClick={() => window.print()}
        >
          <PrinterIcon className="w-[18px] inline text-zinc-500" />
        </button>
      </footer>
      <p className=" justify-center mx-auto pt-4 pb-0 mb-0">
        Currículum Vitae {METADATA.title}
      </p>
    </>
  );
};

export default Footer;
