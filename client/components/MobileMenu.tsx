import { AlignLeft } from "lucide-react";
import React from "react";

const MobileMenu = () => {
  return (
    <>
      <button>
        <AlignLeft className="hover:text-slate-950 hoverEffect md:hidden text-slate-600 hover:cursor-pointer" />
      </button>
    </>
  );
};

export default MobileMenu;
