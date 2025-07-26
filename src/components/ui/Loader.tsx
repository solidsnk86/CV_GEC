import { Loader2 } from "lucide-react";

export const Preloader = ({ className }: { className?: string }) => {
  return (
    <div className={`h-[450px] flex justify-center mx-auto ${className}`}>
      <Loader2 className="animate-spin transition-transform duration-1000" />
    </div>
  );
};
