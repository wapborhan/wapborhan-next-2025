import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <footer className="mt-20 flex justify-between items-center">
      <p className="text-sm">
        Built by ❤️{" "}
        {/* <Link
          href="https://x.com/wapborhan"
          className="hover:underline underline-offset-4"
          target="_blank"
        > */}
        Borhan Uddin
        {/* </Link> */}
      </p>
      <Link
        className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-xs items-center rounded-md overflow-hidden w-auto inline-flex bg-black text-white"
        role="link"
        href="https://nextjs.org/"
        target="_blank"
      >
        <span className="pl-3 font-bold">BUILT WITH NEXTJS</span>
        <span className="text-2xl px-2 py-1 h-full block">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
            <path d="M15 12v-3"></path>
          </svg>
        </span>
      </Link>
    </footer>
  );
};

export default footer;
