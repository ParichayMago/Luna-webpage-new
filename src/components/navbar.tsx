import React from "react";

const Navbar = () => {
  return (
    <div className="mt-10 flex justify-center">
      <nav className="inline-flex rounded-full backdrop-blur-sm bg-white/10">
        {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url], index) => (
          <a
            key={index}
            href={url}
            className="px-6 py-2 text-sm font-medium text-slate-100 hover:bg-white/20 transition-colors duration-200 first:rounded-l-full last:rounded-r-full"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
