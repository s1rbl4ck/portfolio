import Image from "next/image";
import appData from "../../data/app.json";

const NavbarLogo = ({ theme, lr }) => {
    let logo = theme ? (theme === "dark" ? appData.darkLogo : appData.lightLogo) : appData.lightLogo;
    
    return (
        <span className="nav-logo">
            <Image width={60} height={60} ref={lr} src={logo} alt="logo" />
        </span>
    );
};

export default NavbarLogo;
