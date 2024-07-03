import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center font-medium text-3xl text-white">
        <h1>VG</h1>
        {/* <img className="mx-2 w-10" src={logo} alt="" /> */}
      </div>
      <div className="m-8 flex  items-center justify-between gap-4 text-2xl" >
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
