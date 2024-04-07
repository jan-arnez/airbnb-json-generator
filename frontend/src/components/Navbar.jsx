import Logo from './Logo';

const Navbar = () => {
  return (
    <a href="/">
      <div className="fixed h-20 w-full border-b-[1px] bg-white z-50">
        <div className="container flex items-center justify-center h-full">
          <Logo />
        </div>
      </div>
    </a>
  );
};

export default Navbar;
