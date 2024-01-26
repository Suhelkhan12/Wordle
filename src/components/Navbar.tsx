import { VscGithubInverted } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center pt-6 fixed top-0 w-full">
      <div className="flex justify-center items-center gap-6 width-[240px]">
        <VscGithubInverted className="text-white text-[32px]" />
      </div>
    </nav>
  );
};

export default Navbar;
