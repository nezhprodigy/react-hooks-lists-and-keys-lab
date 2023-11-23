import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksNavBar = links.map((link) => {
    return <a key={link} href={`#${link}`}> {link}</a>
  });

  return (
  <nav>{linksNavBar}</nav>
  );
}

export default NavBar;
