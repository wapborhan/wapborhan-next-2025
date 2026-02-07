"use client";

import { useEffect, useRef } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { iconsData } from "@/data/iconsData";
import Link from "next/link";

export default function MacDock() {
  const dockRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!dockRef.current) return;

    const icons = dockRef.current.querySelectorAll<HTMLImageElement>(".ico");

    const handleMouseOver = (index: number, target: HTMLImageElement) => {
      focus(target, index, icons);
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        icon.style.transform = "scale(1) translateY(0px)";
      });
    };

    icons.forEach((icon, index) => {
      icon.addEventListener("mouseover", () => handleMouseOver(index, icon));
      icon.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      icons.forEach((icon) => {
        icon.replaceWith(icon.cloneNode(true));
      });
    };
  }, []);

  const focus = (
    elem: HTMLImageElement,
    index: number,
    icons: NodeListOf<HTMLImageElement>,
  ) => {
    const prev = index - 1;
    const prev2 = index - 2;
    const next = index + 1;
    const next2 = index + 2;

    elem.style.transform = "scale(1.5) translateY(-10px)";

    if (icons[prev]) {
      icons[prev].style.transform = "scale(1.2) translateY(-6px)";
    }
    if (icons[prev2]) {
      icons[prev2].style.transform = "scale(1.1)";
    }
    if (icons[next]) {
      icons[next].style.transform = "scale(1.2) translateY(-6px)";
    }
    if (icons[next2]) {
      icons[next2].style.transform = "scale(1.1)";
    }
  };

  return (
    <>
      <div className=" fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <div className="dock">
        <ul className="dock-container" ref={dockRef}>
          {iconsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className={`li-${index + 1}`}>
                <Link
                  href={item?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="name">{item.name}</div>
                  <Icon className="ico" size={30} />
                </Link>
              </li>
            );
          })}
          <li className="li-11">
            <div className="name">Theme Switch</div>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </>
  );
}
