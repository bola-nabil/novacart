import { centerNavLinks } from "../../utils/navLinks";
import { NavLink } from "react-router-dom";

const CenterNavLinks = ({headerDesign, innderDesign}) => {
    return (
        <div className={headerDesign}>
            {
                centerNavLinks.map((link) => (
                    <NavLink key={link.id} to={link.path}
                        className={({isActive}) => `${innderDesign} font-bold ${ isActive ? "active-link": ""}`}
                    >{link.title}</NavLink>
                ))
            }
        </div>
    );
}

export default CenterNavLinks;