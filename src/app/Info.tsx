import { iconsData } from "@/data/iconsData";
import Link from "next/link";

type Props = {};

function Info({}: Props) {
  return (
    <div className="px-4 md:px-0" id="home">
      <div className="w-full md:max-w-5xl mx-auto border-x border-border py-2 md:py-[1.1rem] px-2 md:px-4 pt-22 md:pt-[5.9rem]">
        <div
          className="md:flex space-y-4"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="w-auto border-y border-border my-10 px-10">
            <div className="w-auto h-[calc(100%+5rem)] border-x border-border -mt-10 -mb-10 py-10 md:w-52! md:-mr-10">
              <div className="w-full aspect-square overflow-hidden relative group">
                <img
                  alt="WB"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 opacity-95"
                  src="/wb-logo.png"
                />
                <div className="absolute bottom-3 left-3/4">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-600"></span>
                  </span>
                </div>
                <div
                  className="w-full h-full absolute top-1 right-1 opacity-0 group-hover:top-0 group-hover:right-0 group-hover:opacity-80 transition-all duration-300 bg-[repeating-linear-gradient(45deg,#555555a6_0,transparent_1px,transparent_0,transparent_50%)] undefined"
                  style={{ backgroundSize: "14px 14px" }}
                />
                <Link href="/cv">
                  <div className="size-10 bg-foreground text-background border border-border/20 hover:text-primary absolute -top-10 -right-10 opacity-0 group/btn group-hover:top-1.5 group-hover:right-1.5 group-hover:opacity-100 transition-all duration-300 rounded-full shadow-2xl cursor-pointer flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      color="currentColor"
                      className=""
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        d="M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <div className="px-1 rounded-sm border-border/40 shadow bg-foreground/70 text-xs text-nowrap text-background absolute -bottom-5 right-0 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 delay-150 ">
                      Go to CV
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-2 py-2.5">
                <div className="flex gap-2.5 justify-center text-secondary/90 py-4 pt-2.5">
                  {iconsData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className={`li-${index + 1}`}
                      >
                        <div>
                          {/* <div className="name">{item.name}</div> */}
                          <Icon className="ico" size={30} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <a
                  className="w-full p-0.5 rounded-full bg-border/20 text-text border border-border flex justify-between items-center group hover:text-primary transition-all duration-300"
                  href="mailto:borhaninfos@gmail.com"
                >
                  <p className="text-lg pl-3 font-rajdhani">Contact me</p>
                  <button className="p-2 bg-foreground text-background rounded-full cursor-pointer  group-hover:text-primary transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      color="currentColor"
                      className=""
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        d="M16.5 7.5L6 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto border-y border-border my-10 px-10">
            <div className="w-auto h-[calc(100%+5rem)] border-x border-border -mt-10 -mb-10 py-10 ">
              <div className="px-2 space-y-2.5">
                <div>
                  <h1 className="text-[2rem] md:text-[2.6rem] leading-11 font-sans font-semibold">
                    Hello👋 <br />
                    <div className="flex gap-2 select-none cursor-text">
                      I'm{" "}
                      <div className="overflow-hidden text-4xl font-bold text-[2rem]! md:text-[2.6rem]! leading-11! font-semibold!">
                        <span className="font-mono">B</span>
                        <span className="font-mono">O</span>
                        <span className="font-mono">R</span>
                        <span className="font-mono">H</span>
                        <span className="font-mono">A</span>
                        <span className="font-mono">N</span>
                      </div>{" "}
                    </div>
                    Front End Developer
                  </h1>
                </div>
                <p className="w-full leading-7 mt-8 text-justify">
                  Aspiring Front-End Developer specializing in React.js and
                  Next.js, passionate about building clean, efficient, and
                  user-centered web applications. Experienced in responsive
                  design, component-based architecture, and cross-browser
                  compatibility, with additional backend development knowledge.
                  Skilled at optimizing websites for speed and SEO to deliver
                  better user experiences. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
