const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <ul className="md:flex gap-3 justify-center p-8 bg-slate-100 font-semibold text-sm">
        {routes.map((route) => (
          <li key={route.id}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
