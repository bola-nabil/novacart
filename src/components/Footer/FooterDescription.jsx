import { FooterLogo } from "../../utils/icons";
import { socialLinks } from "../../utils/footerLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterDescription = () => {
    return (
       <div>
            <div>
                <img src={FooterLogo} alt="logo" className="h-[50px] w-auto"/>
            </div>

            <div>
                <p>
                    Your one-stop Shop for the best products
                    at unbeatable prices. Qualiy you can trust,
                    every day.
                </p>
            </div>

            <div>
                {
                    socialLinks.map((social) => (
                        <Link key={social.id} to={social.path} target="_blank">
                            <FontAwesomeIcon icon={social.icon} />
                        </Link>
                    ))
                }
            </div>
       </div>
    );
}

export default FooterDescription;