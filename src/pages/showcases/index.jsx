import React from "react";
// import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesOneCenter from "../../components/Showcases-one-center";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";

const ShowCases = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ShowcasesOneCenter />
    </DarkTheme>
  );
};

export default ShowCases;
