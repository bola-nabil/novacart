import { currentYear } from "../../utils/currentYear";
import { paymentLinks } from "../../utils/footerLinks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterPayment = () => {
    return (
        <section>
            <div>
                 <p>&copy; {currentYear()} Bola Nabil - All rights reserved.</p>
            </div>

            <div>
                {
                    paymentLinks.map((payment) => (
                        <Link key={payment.id} to={payment.path}>
                            <FontAwesomeIcon icon={payment.icon} />
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default FooterPayment;