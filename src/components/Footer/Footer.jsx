import FooterDescription from "./FooterDescription";
import FooterPages from "./FooterPages";
import { shopLinks, customerServiceLinks, companyLinks } from "../../utils/footerLinks";
import FooterContact from "./FooterContact";
import FooterPayment from "./FooterPayment";
import Container from "../ui/Container";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
           <Container>
                <div className="footer-content grid grid-cols-5 gap-4">
                    <FooterDescription />

                        <FooterPages pageTitle="Shop" pages={shopLinks} />
                        <FooterPages pageTitle="Customer Service" pages={customerServiceLinks} />
                        <FooterPages pageTitle="Company" pages={companyLinks} />

                    <FooterContact />
                </div>
                <div>
                    <FooterPayment />
                </div>
           </Container>
        </footer>
    );
}

export default Footer;