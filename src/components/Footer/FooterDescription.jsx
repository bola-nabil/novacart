import { FooterLogo } from "../../utils/icons";
import { socialLinks } from "../../utils/footerLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterDescription = () => {
    return (
       <div>
            <div>
                <img src={FooterLogo} alt="logo" className="h-[50px] md:h-[30px] w-auto"/>
            </div>

            <div>
                <p className="py-5 hidden sm:block">
                    Your one-stop Shop for the best products
                    at unbeatable prices. Qualiy you can trust,
                    every day.
                </p>
            </div>

            <div className="flex gap-2 justify-center sm:justify-start pt-5 sm:pt-0">
                {
                    socialLinks.map((social) => (
                        <div key={social.id} className="flex items-center justify-center bg-white w-[35px] h-[35px] rounded-full">
                            <Link to={social.path} target="_blank" aria-label={`Go to ${social.title}`}>
                                <FontAwesomeIcon icon={social.icon} className="text-[#898e96]"/>
                            </Link>
                        </div>
                    ))
                }
            </div>
       </div>
    );
}

export default FooterDescription;