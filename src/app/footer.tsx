import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center max-w-6xl mx-auto py-10">
      <h2 className="text-5xl font-bold"> Let's Connect</h2>
      <p className="text-lg py-4 text-slate-500">
        Got a question or want to chat? <br /> Feel free to reach out to me on{" "}
        <Link
          href="https://wa.me/+8801620557840"
          className="underline inline-flex gap-2 items-center justify-center"
          target="__BLANK"
        >
          <FaWhatsapp /> WhatsApp
        </Link>
        . <br /> I'm always open to meaningful conversations.
      </p>
    </footer>
  );
};

export default Footer;
