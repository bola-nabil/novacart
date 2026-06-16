import { centerNavLinks, rightNavLinks } from "../../utils/navLinks";
import Logo from "../../assets/images/logo.png";
import { Link, Outlet } from "react-router-dom";
import SearchProducts from "../ui/SearchProducts/SearchProducts";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="novacart logo"/>
                </div>

                <div className="center-side">
                    {
                        centerNavLinks.map((link) => (
                            <Link key={link.id} to={link.path}>{link.title}</Link>
                        ))
                    }
                </div>

                <div className="right-side">
                    <SearchProducts />

                    <div className="links">
                        {
                            rightNavLinks.map((link) => (
                                <Link key={link.id} to={link.path}>
                                    <img src={link.image} alt={link.description}/>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
            
            <Outlet />
        </>
    );
}

export default NavBar;