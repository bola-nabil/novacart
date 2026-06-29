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
                <div>
                    <FooterDescription />

                    <div>
                        <FooterPages pageTitle="Shop" pages={shopLinks} />
                        <FooterPages pageTitle="Customer Service" pages={customerServiceLinks} />
                        <FooterPages pageTitle="Company" pages={companyLinks} />
                    </div>

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