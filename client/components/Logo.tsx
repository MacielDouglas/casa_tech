import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl font-black tracking-wider uppercase hover:text-slate-500 group",
          className
        )}
      >
        Casa
        <span className="text-slate-500 group-hover:text-black hoverEffect">
          Tech
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
