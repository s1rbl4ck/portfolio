/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import navbar from "../../data/navbar.json";
import NavbarFullMenu from "../Navbar-full-menu/navbar-full-menu";
import NavbarLogo from "../NavbarLogo/index.component";
import Split from "../Split";

const Navbar = ({ lr, nr, theme }) => {
    return (
        <nav
            ref={nr}
            className={`navbar navbar-expand-lg change fixed lg:absolute py-3 ${
                theme === "themeL" ? "light" : ""
            }`}
        >
            <div className="container z-50 px-4">
                <Link href="/" passHref>
                    <NavbarLogo theme={theme} lr={lr} />
                </Link>

                <div className="hidden lg:block">
                    <ul className="navbar-nav flex flex-row gap-10">
                        {navbar.navItems.map((nav, i) => (
                            <li className="nav-item" key={i}>
                                <Link href={nav.url} passHref>
                                    <span className="nav-link p-0">
                                        {nav.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="search">
                        {/* Add Dark Mode & Light Mode Feature @s1rbl4ck */}
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="menu-icon flex flex-row gap-5">
                        <span className="icon">
                            <i></i>
                            <i></i>
                        </span>
                        <Split>
                            <span className="text" data-splitting>
                                <span className="menu-text">Menu</span>
                            </span>
                        </Split>
                    </div>
                </div>
            </div>
            <NavbarFullMenu />
        </nav>
    );
};

export default Navbar;
