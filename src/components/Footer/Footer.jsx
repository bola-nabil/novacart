import FooterDescription from "./FooterDescription";
import FooterPages from "./FooterPages";
import { shopLinks, customerServiceLinks, companyLinks } from "../../utils/footerLinks";

const Footer = () => {
    return (
        <footer>
            <div>
                <FooterDescription />

                <div>
                    <FooterPages pageTitle="Shop" pages={shopLinks} />
                    <FooterPages pageTitle="Customer Service" pages={customerServiceLinks} />
                    <FooterPages pageTitle="Company" pages={companyLinks} />
                </div>

            </div>
            <div>

            </div>
        </footer>
    );
}

export default Footer;