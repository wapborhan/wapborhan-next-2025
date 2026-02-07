"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  languages: string[];
}

const services: Service[] = [
  {
    title: "Frontend Stack",
    languages: [
      "Javascript",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Stack",
    languages: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    languages: ["MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    languages: [
      "Git",
      "Github",
      "Postman",
      "MOngoDB Atlas",
      "Visual Studio Code",
    ],
  },
];

const Skills: FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg md:text-4xl font-bold text-center mb-12 ">
          Skills
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
              className=""
            >
              <h3 className="text-xl font-semibold  mb-3">{service.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {service.languages.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex text-xs font-medium px-2.5 py-1 bg-secondary rounded-md border"
                  >
                    {/* <span className="text-blue-500 mt-1">✔</span> */}
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
