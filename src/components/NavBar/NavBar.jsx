import { navLinks } from "../../utils/navLinks";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="novacart logo"/>
            </div>
        </nav>
    );
}

export default NavBar;