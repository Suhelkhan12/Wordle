import { VscGithubInverted } from "react-icons/vsc";

const Navbar = () => {
  return (
    <header>
      <nav className="text-green-300 sm:text-[1rem] text-[12px] flex sm:justify-end justify-center items-center sm:pt-4 pt-3 pr-4 fixed top-0 w-full gap-2">
        <div className="flex justify-center items-center gap-6">
          <a href="https://github.com/Suhelkhan12" target="_blank">
            <VscGithubInverted className=" sm:text-[1.5rem] text-[20px] hover:text-yellow-300 transition" />
          </a>
        </div>
        <div>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/suhel-khan-925aa222a/"
              target="_blank"
              className="text-blue-400 underline font-medium transition hover:text-yellow-300"
            >
              Suhel
            </a>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
