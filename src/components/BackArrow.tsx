import { ArrowLeft } from "lucide-react";

export const BackArrow = ({ className = "" }) => {
    return (
        <div
            title="Volver al Inicio"
            className="cursor-pointer hover:bg-[#eee] p-1 w-fit rounded-md xl:my-4 xl:mx-3 border text-zinc-500"
            onClick={() => window.open("/")}
        >
            <ArrowLeft className={`w-6 ${className}`} />
        </div>
    );
};

export default BackArrow;
