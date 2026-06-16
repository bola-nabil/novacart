import { navLinks } from "../../utils/navLinks";
import Logo from "../../assets/images/logo.png";
import { Link, Outlet } from "react-router-dom";
import SearchProducts from "../ui/SearchProducts";

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="novacart logo"/>
                </div>

                <div className="center-side">
                    {
                        navLinks.map((link) => (
                            <Link key={link.id} to={link.path}>{link.title}</Link>
                        ))
                    }
                </div>

                <div className="right-side">
                    <SearchProducts />
                </div>
            </nav>
            
            <Outlet />
        </>
    );
}

export default NavBar;