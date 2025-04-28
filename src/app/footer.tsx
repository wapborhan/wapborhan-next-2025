import Link from "next/link";
import React from "react";
import { SiNextdotjs } from "react-icons/si";

const footer = () => {
  return (
    <footer className="flex lg:flex-row gap-3 lg:mb-0 pb-5 mt-10 flex-col justify-between items-center max-w-6xl mx-auto">
      <Link
        className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-xs items-center rounded-md overflow-hidden w-auto inline-flex border-2 border-[var(--text-color)]"
        role="link"
        href="https://x.com/wapborhan"
        target="_blank"
      >
        <span className="pl-3 font-bold">BUILT BY </span>
        <span className=" px-2 py-1 h-full block font-bold">
          ❤️ BORHAN UDDIN
        </span>
      </Link>

      <Link
        className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-xs items-center rounded-md overflow-hidden w-auto inline-flex border-2 border-[var(--text-color)]"
        role="link"
        href="https://nextjs.org/"
        target="_blank"
      >
        <span className="pl-3 font-bold">BUILT WITH NEXTJS</span>
        <span className="text-2xl px-2 py-1 h-full block">
          <SiNextdotjs color="#fff" size={20} />
        </span>
      </Link>
    </footer>
  );
};

export default footer;
