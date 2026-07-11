import { FaFacebookSquare, FaHome, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



export type IconItem = {
  name: string;
  link: string;
  icon: React.ComponentType<{ size?: number, className?: string }>;
};

export const iconsData: IconItem[] = [

  {
    name: "Facebook",
    icon: FaFacebookSquare,
    link: "https://www.facebook.com/borhaninfos"
  },
  {
    name: "Github",
    icon: FaGithubSquare,
    link: "https://www.github.com/wapborhan"
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/wapborhan"
  }, {
    name: "Twitter",
    icon: FaSquareXTwitter,
    link: "https://www.twitter.com/wapborhan"
  },

];
