import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

const about = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-4">
        Hey 👋 {"I'm Borhan Uddin"}
      </h2>
      <h3 className="text-justify mb-4">
        Aspiring Front-End Developer, <strong>React.js </strong> &{" "}
        <strong>Next.js </strong>
        Specialist, Passionate about Building User-Centered Web Applications
      </h3>
      <p className="mt-4 text-justify">
        I am a Front-End Developer with a passion for building clean, efficient,
        and user-friendly web applications. While specializing in frontend
        development, I also have solid experience in backend development, I’ve
        worked on several projects ranging from small business websites to
        dynamic web apps. I’m skilled in <strong>responsive design</strong>,{" "}
        <strong>component-based architecture</strong>, and ensuring{" "}
        <strong>cross-browser compatibility</strong>.
      </p>
      <p className="mt-4 text-justify">
        My experience with <strong>Next.js</strong> allows me to optimize sites
        for speed and SEO, delivering better user experiences.
      </p>
      <div className="my-8 flex flex-wrap gap-2 items-center">
        I mostly work with
        <Link
          title="TypeScript"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          <SiTypescript color="#3178c6" size={25} />
        </Link>
        <Link
          title="React"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          <SiReact color="#81ecff" size={25} />
        </Link>
        <a
          title="Next.js"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          <SiNextdotjs color="#000" size={25} />
        </a>{" "}
        <a
          title="Node.js"
          href="https://nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          <SiNodedotjs color="#41873f" size={25} />
        </a>{" "}
        <a
          title="Mongodb"
          href="https://mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          <SiMongodb color="#1f6f1d" size={25} />
        </a>
        <a
          title="Mongodb"
          href="https://express.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          <SiExpress color="#888" size={25} />
        </a>
        . <span>I also got chance to work with </span>
        <a
          title="WordPress"
          href="https://wordpress.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          <SiWordpress color="#21759b" size={25} />
        </a>{" "}
        .
      </div>
      <div className="inline-flex items-center gap-4">
        <h2 className="text-2xl font-semibold ">Let’s Connect</h2>
        <a
          href="mailto:borhaninfos@gmail.com"
          className=""
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <FaEnvelope color="#000" size={25} />
        </a>
      </div>
    </div>
  );
};

export default about;
