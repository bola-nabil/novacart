import { Logo } from "../../utils/icons";
import { socialLinks } from "../../utils/footerLinks";

const FooterDescription = () => {
    return (
       <div>
            <div>
                <img src={Logo} alt="logo"/>
            </div>

            <div>
                <p>
                    Your one-stop Shop for the best products
                    at unbeatable prices. Qualiy you can trust,
                    every day.
                </p>
            </div>


       </div>
    );
}

export default FooterDescription;