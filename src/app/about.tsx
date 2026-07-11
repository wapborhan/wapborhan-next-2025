import BlockSection from "@/components/BlockSection";
import SectionHeader from "@/components/SectionHeader";
import { iconsData } from "@/data/iconsData";
import Image from "next/image";
import Link from "next/link";
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
    <>
      <div id="about"></div>
      <SectionHeader title="About Me" />
      <BlockSection>
        <div
          className="w-full px-5 py-2"
          style={{ opacity: 1, transform: "none" }}
        >
          {" "}
          <div className="w-full space-y-3">
            <h3 className="text-justify mb-4">
              Aspiring Front-End Developer, <strong>React.js </strong> &{" "}
              <strong>Next.js </strong>
              Specialist, Passionate about Building User-Centered Web
              Applications
            </h3>
            <p className="mt-4 text-justify">
              I am a Front-End Developer with a passion for building clean,
              efficient, and user-friendly web applications. While specializing
              in frontend development, I also have solid experience in backend
              development, I’ve worked on several projects ranging from small
              business websites to dynamic web apps. I’m skilled in{" "}
              <strong>responsive design</strong>,{" "}
              <strong>component-based architecture</strong>, and ensuring{" "}
              <strong>cross-browser compatibility</strong>.
            </p>
            <p className="mt-4 text-justify">
              My experience with <strong>Next.js</strong> allows me to optimize
              sites for speed and SEO, delivering better user experiences.
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
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {/* <p className="my-2">
              Hi, I’m <strong>Borhan Uddin</strong>, a{" "}
              <strong>Frontend Developer</strong> and{" "}
              <strong>Junior Full Stack Developer</strong>.
              <br />
              I’m passionate about creating modern, user-focused, and visually
              engaging web applications that combine creativity with strong
              technical precision.
            </p> */}

            <h2 className="text-2xl font-semibold my-3">💼 What I Do</h2>
            <p className="my-2">
              I specialize in building{" "}
              <strong>
                high-quality, scalable, and responsive web applications
              </strong>{" "}
              using modern frameworks and design systems.
              <br />
              My work ranges from developing <strong>
                AI-powered tools
              </strong>{" "}
              to designing <strong>interactive interfaces</strong> that make
              digital experiences more human.
            </p>
            <p className="my-2">
              At <strong>Crafely</strong>, I’ve:
            </p>
            <ul className="list-disc pl-6 my-2">
              <li className="my-1">
                Developed a{" "}
                <strong>WooCommerce-based Multivendor POS system</strong> with a
                smooth, adaptive UI.
              </li>
              <li className="my-1">
                Built an <strong>AI Form Builder</strong> that automates
                workflows and reduces manual effort.
              </li>
              <li className="my-1">
                Contributed to an <strong>AI-powered Presentation Maker</strong>{" "}
                for dynamic content generation.
              </li>
              <li className="my-1">
                Created <strong>AI prompt tools</strong> that streamline team
                productivity.
              </li>
            </ul>
            <p className="my-2">
              My process always centers around{" "}
              <strong>clarity, performance, and user experience</strong> —
              blending functionality with elegant design.
              <br />
              <br />
            </p>
            <h2 className="text-2xl font-semibold my-3">⚙️ Tech Stacks</h2>
            <p className="my-2">Here’s what I love working with:</p>
            <p className="my-2">
              <strong>Frontend:</strong> Javascript, TypeScript, React.js,
              Next.js, HTML5
              <br />
              <strong>Styling:</strong> Tailwind CSS, Shadcn UI, Bootstrap,
              <br />
              <strong>Backend &amp; Integration:</strong> Node.js, Express.js,
              <br />
              <strong>Databases:</strong> MongoDB,
              <br />
              <strong>DevOps & Tools:</strong> Git/GitHub, Postman, Figma,
              MongoDB Atlas
              <br />
              <br />
            </p>
            {/* <h2 className="text-2xl font-semibold my-3">💫 What Drives Me</h2>
            <p className="my-2">
              What truly drives me is the{" "}
              <strong>
                challenge of transforming ideas into real, functional
                experiences
              </strong>
              .<br />I believe great software isn’t just about writing code —
              it’s about crafting something that connects people, simplifies
              processes, and sparks inspiration.
            </p>
            <p className="my-2">
              Every line of code I write is guided by{" "}
              <strong>
                curiosity, craftsmanship, and the desire to build something
                meaningful
              </strong>{" "}
              that leaves a positive impact on users and businesses alike.
              <br />
              <br />
            </p>
            <h2 className="text-2xl font-semibold my-3">🌱 Beyond Code</h2>
            <p className="my-2">
              Outside of development, I love exploring{" "}
              <strong>UI/UX design trends</strong>, experimenting with{" "}
              <strong>AI tools</strong>, and learning how technology can solve
              everyday problems creatively.
            </p>
            <p className="my-2">
              I’m a lifelong learner who values{" "}
              <strong>growth, collaboration, and continuous improvement</strong>{" "}
              — both as a developer and as a creator.
              <br />
              Whether I’m contributing to a team project or building a personal
              idea, I aim to bring clarity, innovation, and joy to everything I
              do.
            </p> */}
          </div>
        </div>
      </BlockSection>
    </>
  );
};

export default about;
