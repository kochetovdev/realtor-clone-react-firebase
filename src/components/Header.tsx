import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const pathMatchRoute = (route: string) => route === pathname;

  return (
    <article className="bg-white border-b shadow-md sticky top-0 z-50">
      <header className="flex justify-between items-center p-3 max-w-7xl mx-auto">
        <div>
          <Link to="/">
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo"
              className="h-5 cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm font-semibold border-b-[3px] cursor-pointer transition-colors ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-transparent"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold border-b-[3px] cursor-pointer transition-colors ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-transparent "
              }`}
            >
              <Link to="/offers">Offers</Link>
            </li>
            <li
              className={`py-3 text-sm font-semibold border-b-[3px] cursor-pointer transition-colors ${
                pathMatchRoute("/signin")
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-transparent"
              }`}
            >
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </header>
    </article>
  );
};

export default Header;
