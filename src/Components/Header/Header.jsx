import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center bg-slate-100 p-4">
      <h2 className="font-bold">Navbar</h2>
      <nav className="flex gap-3 justify-center  p-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
