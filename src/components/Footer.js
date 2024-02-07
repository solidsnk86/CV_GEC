import { PrinterIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200/65 py-4 mt-4">
      <button
        className="border rounded-md px-2 py-1 hover:bg-zinc-100 no-print"
        onClick={() => window.print()}
      >
        <PrinterIcon className="w-[18px] inline text-zinc-500" />
      </button>
    </footer>
  );
};

export default Footer;
