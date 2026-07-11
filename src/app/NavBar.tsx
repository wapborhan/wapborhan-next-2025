import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  return (
    <nav
      className="w-full border-y px-4 md:px-0 fixed z-20 transition-all duration-300 bg-background/10 backdrop-blur-sm 
                top-4 border-border
                "
    >
      <div className="w-full md:max-w-5xl mx-auto border-x border-border flex justify-between items-center py-2 px-5 md:px-14">
        <div className="flex gap-8 items-center">
          <Link
            className="relative py-2 text-secondary hover:text-primary focus:text-primary transition-all duration-300 before:opacity-0 focus:before:opacity-0 before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-1 before:w-2 before:h-px before:rounded-lg before:bg-primary/80 text-primary! before:opacity-0!"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              color="currentColor"
              className=""
              stroke-width="1.3"
              stroke="currentColor"
            >
              <path
                d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
              <path
                d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
            </svg>
            <span className="hidden text-xs px-1 border rounded-sm absolute top-14 left-1/2 transform -translate-x-1/2">
              Home
            </span>
          </Link>
          <Link
            className="relative py-2 text-secondary hover:text-primary focus:text-primary transition-all duration-300 before:opacity-0 focus:before:opacity-0 before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-1 before:w-2 before:h-px before:rounded-lg before:bg-primary/80 "
            href="#about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              color="currentColor"
              className=""
              stroke-width="1.3"
              stroke="currentColor"
            >
              <path
                d="M18.5 20V17.9704C18.5 16.7281 17.9407 15.5099 16.8103 14.9946C15.4315 14.3661 13.7779 14 12 14C10.2221 14 8.5685 14.3661 7.18968 14.9946C6.05927 15.5099 5.5 16.7281 5.5 17.9704V20"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
              <circle
                cx="12"
                cy="7.5"
                r="3.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></circle>
            </svg>
            <span className="hidden text-xs px-1 border rounded-sm absolute top-14 left-1/2 transform -translate-x-1/2">
              About
            </span>
          </Link>
          <Link
            className="relative py-2 text-secondary hover:text-primary focus:text-primary transition-all duration-300 before:opacity-0 focus:before:opacity-0 before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-1 before:w-2 before:h-px before:rounded-lg before:bg-primary/80 "
            href="#projects"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              color="currentColor"
              className=""
              stroke-width="1.3"
              stroke="currentColor"
            >
              <path
                d="M12.0027 21C7.2874 21 4.92973 21 3.46487 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38042 4.53806C2.6516 4.05227 3.05255 3.65142 3.53848 3.38032C4.22017 3 5.12865 3 6.94562 3C8.10969 3 8.69172 3 9.20122 3.19101C10.3645 3.62712 10.8442 4.68358 11.3691 5.73313L12.0027 7M8.00164 7H16.754C18.8613 7 19.9149 7 20.6718 7.50559C20.9995 7.72447 21.2808 8.00572 21.4997 8.33329C21.8937 8.92282 21.9808 9.69244 22 11"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
              <path
                d="M22 18V16.7426C22 16.1295 22 15.823 21.8858 15.5473C21.7716 15.2716 21.5549 15.0549 21.1213 14.6213L20.3787 13.8787C19.9451 13.4451 19.7284 13.2284 19.4527 13.1142C19.177 13 18.8705 13 18.2574 13C16.8431 13 15.8787 13 15.4393 13.4393C15 13.8787 15 14.5858 15 16V18C15 19.4142 15 20.1213 15.4393 20.5607C15.8787 21 16.5858 21 18 21H19C20.4142 21 21.1213 21 21.5607 20.5607C22 20.1213 22 19.4142 22 18Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
            </svg>
            <span className="hidden text-xs px-1 border rounded-sm absolute top-14 left-1/2 transform -translate-x-1/2">
              Projects
            </span>
          </Link>
          <Link
            className="relative py-2 text-secondary hover:text-primary focus:text-primary transition-all duration-300 before:opacity-0 focus:before:opacity-0 before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-1 before:w-2 before:h-px before:rounded-lg before:bg-primary/80 "
            href="#contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              color="currentColor"
              className=""
              stroke-width="1.3"
              stroke="currentColor"
            >
              <path
                d="M2.5 7.5V13.5C2.5 17.2712 2.5 19.1569 3.67157 20.3284C4.84315 21.5 6.72876 21.5 10.5 21.5H13.5C17.2712 21.5 19.1569 21.5 20.3284 20.3284C21.5 19.1569 21.5 17.2712 21.5 13.5V7.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
              <path
                d="M3.86909 5.31461L2.5 7.5H21.5L20.2478 5.41303C19.3941 3.99021 18.9673 3.2788 18.2795 2.8894C17.5918 2.5 16.7621 2.5 15.1029 2.5H8.95371C7.32998 2.5 6.51812 2.5 5.84013 2.8753C5.16215 3.2506 4.73113 3.93861 3.86909 5.31461Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
              <path
                d="M12 7.5V2.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
              <path
                d="M6 18H11M6 15H9"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.3"
              ></path>
            </svg>
            <span className="hidden text-xs px-1 border rounded-sm absolute top-14 left-1/2 transform -translate-x-1/2">
              Products
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
