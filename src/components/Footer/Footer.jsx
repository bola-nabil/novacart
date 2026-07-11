import FooterDescription from "./FooterDescription";
import FooterPages from "./FooterPages";
import { shopLinks, customerServiceLinks, companyLinks } from "../../utils/footerLinks";
import FooterContact from "./FooterContact";
import FooterPayment from "./FooterPayment";
import Container from "../ui/Container";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
           <Container>
                <div className="flex flex-col sm:grid sm:grid-cols-5 gap-5">
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