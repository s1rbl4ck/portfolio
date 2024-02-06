/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import navbar from "../../data/navbar.json";
import {
    handleDropdown,
    handleMobileDropdown,
    handleSearch,
} from "../../common/navbar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavbarFullMenu from "../Navbar-full-menu/navbar-full-menu";

const Navbar = ({ lr, nr, theme }) => {
    const [collapse, setCollapse] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width < 992) {
            setCollapse(true);
        } else {
            setCollapse(false);
        }
    }, [width]);

    return !collapse ? (
        <nav
            ref={nr}
            className={`navbar navbar-expand-lg change ${
                theme === "themeL" ? "light" : ""
            }`}
        >
            <div className="container">
                <Link href="/">
                    <span className="logo">
                        {theme ? (
                            theme === "themeL" ? (
                                <img
                                    ref={lr}
                                    src={`${appData.darkLogo}`}
                                    alt="logo"
                                />
                            ) : (
                                <img
                                    ref={lr}
                                    src={`${appData.lightLogo}`}
                                    alt="logo"
                                />
                            )
                        ) : (
                            <img
                                ref={lr}
                                src={`${appData.lightLogo}`}
                                alt="logo"
                            />
                        )}
                    </span>
                </Link>

                <div>
                    <ul className="navbar-nav flex flex-row gap-10">
                        {navbar.navItems.map((nav, i) => (
                            <li className="nav-item" key={i}>
                                <Link href={nav.url} passHref>
                                    <span className="nav-link">{nav.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="search">
                        {/* Add Dark Mode & Light Mode Feature @s1rbl4ck */}
                    </div>
                </div>
            </div>
        </nav>
    ) : (
        <NavbarFullMenu />
    );
};

export default Navbar;
