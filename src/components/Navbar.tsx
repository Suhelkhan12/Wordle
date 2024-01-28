import { VscGithubInverted } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="text-green-300 flex justify-center items-center pt-6 fixed top-0 w-full gap-10">
      <div className="flex justify-center items-center gap-6">
        <a href="https://github.com/Suhelkhan12" target="_blank">
          <VscGithubInverted className=" text-[32px]" />
        </a>
      </div>
      <div>
        <p>
          Made with ❤️ by{" "}
          <a
            href="#https://www.linkedin.com/in/suhel-khan-925aa222a/"
            target="_blank"
            className="text-blue-400 underline font-medium"
          >
            Suhel
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
