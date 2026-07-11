import BlockSection from "@/components/BlockSection";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div id="contact"></div>
      <SectionHeader title="Let's Connect" />

      <BlockSection>
        <div className="text-center max-w-6xl mx-auto py-10">
          <p className="text-lg py-4 ">
            Got a question or want to chat? <br /> Feel free to reach out to me
            on{" "}
            <Link
              href="https://wa.me/+8801620557840"
              className="underline inline-flex gap-2 items-center justify-center"
              target="__BLANK"
            >
              <FaWhatsapp /> WhatsApp
            </Link>
            . <br /> I'm always open to meaningful conversations.
          </p>
        </div>
      </BlockSection>

      <footer className="px-4 py-6 border-y border-border text-center">
        © {new Date().getFullYear()} Borhan Uddin. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
