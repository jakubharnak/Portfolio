import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/kevin-rush-7a2b0b1b7/"
          className="text-white"
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/jakubharnak" className="text-white">
          <FaGithub />
        </a>

        <a href="https://x.com/x." className="text-white">
          <FaSquareXTwitter />
        </a>

        <a href="https://www.instagram.com/kevinrush_/" className="text-white">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
