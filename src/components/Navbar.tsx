import { VscGithubInverted } from "react-icons/vsc";

const Navbar = () => {
  return (
    <header>
      <nav className="text-green-300 sm:text-[1.25rem] text-[16px] flex sm:justify-end justify-center items-center sm:pt-4 pt-3 pr-4 fixed top-0 w-full gap-10">
        <div className="flex justify-center items-center gap-6">
          <a href="https://github.com/Suhelkhan12" target="_blank">
            <VscGithubInverted className=" sm:text-[2rem] text-[24px] hover:text-yellow-300 transition" />
          </a>
        </div>
        <div>
          <p>
            Made with ❤️ by{" "}
            <a
              href="#https://www.linkedin.com/in/suhel-khan-925aa222a/"
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
