import { useState } from "react";
import { centerNavLinks, rightNavLinks } from "../../utils/navLinks";
import Logo from "../../assets/images/logo.png";
import { NavLink, Outlet, Link } from "react-router-dom";
import SearchProducts from "../ui/SearchProducts/SearchProducts";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }
    return (
        <>
            <nav className="sticky top-0 flex justify-between items-center w-full z-50 bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.05)] h-20 px-5">

                <div className="menu-bar" onClick={handleShow}>
                    {
                        (show) ? 
                        <FontAwesomeIcon  icon={faXmark} />
                        : <FontAwesomeIcon icon={faBars} />
                    }
                </div>
                <div>
                    <img src={Logo} alt="novacart logo" className="w-auto h-[200pxS]"/>
                </div>

                <div className="center-links md:hidden lg:block">
                    {
                        centerNavLinks.map((link) => (
                            <NavLink key={link.id} to={link.path}
                            className={({isActive}) => `px-[15px] font-bold ${ isActive ? "active-link": ""}`}
                            >{link.title}</NavLink>
                        ))
                    }
                </div>

                <div className="hidden md:block lg:block">
                    <SearchProducts />
                </div>
                <div className="flex items-center gap-4">
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

            {show && (
        <div className="sm:hidden flex flex-col bg-white shadow-md px-5 py-4">
        {centerNavLinks.map((link) => (
            <NavLink
            key={link.id}
            to={link.path}
            onClick={() => setShow(false)}
            className={({ isActive }) =>
                `py-3 font-bold ${
                isActive ? "text-blue-500" : ""
                }`
            }
            >
            {link.title}
            </NavLink>
        ))}
        </div>
            )}

            <div className="medium-screens-links w-full flex items-center justify-center h-15 bg-white shadow-md">
                  {
                        centerNavLinks.map((link) => (
                            <NavLink key={link.id} to={link.path}
                            className={({isActive}) => `px-[15px] font-bold ${ isActive ? "active-link": ""}`}
                            >{link.title}</NavLink>
                        ))
                    }
            </div>
            
             <div className="block md:hidden lg:hidden px-5 pb-4">
                <SearchProducts />
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;