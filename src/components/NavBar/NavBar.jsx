import { useState } from "react";
import { rightNavLinks } from "../../utils/navLinks";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CenterNavLinks from "./CenterNavLinks";
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
                
                <CenterNavLinks
                    headerDesign="center-links md:hidden lg:block"
                    innderDesign="px-[15px]"
                />

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
                <CenterNavLinks 
                    headerDesign="sm:hidden flex flex-col bg-white shadow-md px-5 py-4"
                    innderDesign="py-3"
                />
            )}

            <CenterNavLinks
                headerDesign="medium-screens-links w-full flex items-center justify-center h-15 bg-white shadow-md"
                innderDesign="px-[15px]"
            />
            
             <div className="block md:hidden lg:hidden px-5 pb-4">
                <SearchProducts />
            </div>
        </>
    );
}

export default NavBar;