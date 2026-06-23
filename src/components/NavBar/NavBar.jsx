import { centerNavLinks, rightNavLinks } from "../../utils/navLinks";
import Logo from "../../assets/images/logo.png";
import { NavLink, Outlet, Link } from "react-router-dom";
import SearchProducts from "../ui/SearchProducts/SearchProducts";

const NavBar = () => {
    return (
        <>
            <nav className="sticky top-0 flex justify-between items-center w-full z-50 bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.05)] h-20 px-5">
                <div>
                    <img src={Logo} alt="novacart logo" className="w-auto h-[200pxS]"/>
                </div>

                <div>
                    {
                        centerNavLinks.map((link) => (
                            <NavLink key={link.id} to={link.path}
                            className={({isActive}) => `px-[15px] font-bold ${ isActive ? "active-link": ""}`}
                            >{link.title}</NavLink>
                        ))
                    }
                </div>

                <div className="flex items-center gap-4">
                    <SearchProducts />

                    <div className="flex gap-[15px]">
                        {
                            rightNavLinks.map((link) => (
                                <Link key={link.id} to={link.path}>
                                    <img src={link.image} alt={link.description} className="w-[25px] h-[25px]"/>
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