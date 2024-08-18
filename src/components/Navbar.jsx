import logo from "../assets/JHlogo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/jakub-har%C5%88%C3%A1k-9850b5266/"
          className="text-white"
          title="Visit Jakub Harňák's LinkedIn Profile"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/jakubharnak"
          className="text-white"
          title="Visit Jakub Harňák's GitHub Profile"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/jakubharnak.webp/"
          className="text-white"
          title="Visit Jakub Harňák's Instagram Profile"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
