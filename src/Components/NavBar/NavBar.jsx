import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="bg-slate-50 p-4">
      <div className="text-2xl md:hidden " onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`md:flex absolute md:static ${
          open ? "top-12" : "-top-60"
        } duration-1000 
        gap-3 justify-center p-2 bg-slate-50 font-semibold text-sm`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
