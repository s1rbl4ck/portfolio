/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import navbarData from "../../../data/navbar.json";
import portfolioData from "../../../data/portfolio.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";
import NavbarLogo from "../../NavbarLogo/index.component";

const NavbarFullMenu = ({ theme, lr }) => {
    const { navItems } = navbarData;
    const { email, socials } = portfolioData;

    React.useEffect(() => {
        handleFullScreenNavbar();
    }, []);
    return (
        <>
            <div className="hamenu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-8">
                            <div className="menu-links">
                                <ul className="main-menu">
                                    {navItems.map(({ name, url }, i) => (
                                        <li key={i}>
                                            <div className="o-hidden">
                                                <Link href={url} passHref>
                                                    <span className="link">
                                                        <span className="nm">
                                                            0{i + 1}.
                                                        </span>
                                                        {name}
                                                    </span>
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="cont-info">
                                <div className="item">
                                    <h6>Email :</h6>
                                    <p>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </p>
                                </div>
                                <div className="item">
                                    {/* Add Social Media Right Here @s1rbl4ck */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarFullMenu;
