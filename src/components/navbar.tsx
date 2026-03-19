import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#121420] border-b border-slate-800 text-white">
      <div className="flex items-center gap-12">
        <div className="flex flex-col cursor-pointer">
          <span className="text-xl font-black text-blue-500 uppercase leading-none">
            Lego
          </span>
          <span className="text-xl font-black text-blue-700 uppercase leading-none ml-2">
            Store
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-slate-800"
        >
          <ShoppingCart className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          className="font-bold bg-blue-600 hover:bg-blue-700 text-white border-none"
        >
          Log In
        </Button>
      </div>
    </nav>
  );
}
