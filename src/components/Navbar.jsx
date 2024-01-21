import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Navbar() {
  return (
    <header className="flex justify-between">
      <div>
        <h1 className="font-extrabold text-lg md:text-2xl text-white uppercase">
          Password Generator
        </h1>
      </div>
      <navbar className="">
        <ul className="flex gap-x-5 font-bold text-md">
          <li className="hover:text-white">
            <a href="/" className="inline-flex items-center gap-x-2">
              <IoMdMail />
              <span className="md:block hidden">Contact</span>
            </a>
          </li>
          <li className="hover:text-white">
            <a
              href="https:/github.com/furkantaglik/passgenarator"
              className="inline-flex items-center gap-x-2 "
            >
              <FaGithub />
              <span className="md:block hidden">Source</span>
            </a>
          </li>
        </ul>
      </navbar>
    </header>
  );
}
