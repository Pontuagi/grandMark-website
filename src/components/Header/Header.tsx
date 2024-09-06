import React from "react";

const links = ["about", "services", "choose", "contact"];

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-20 p-4 bg-green-700">
      <div className="rounded-lg">
        <a href="/">
          <img src="/images/logo.png" alt="Grandmark Solutions Logo" className="h-12" />
        </a>
      </div>
      
      <ul className="flex list-none gap-7 font-semibold flex-row">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Header;