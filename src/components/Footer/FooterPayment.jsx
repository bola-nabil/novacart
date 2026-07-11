import { currentYear } from "../../utils/currentYear";
import { paymentLinks } from "../../utils/footerLinks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterPayment = () => {
    return (
        <section className="flex flex-col-reverse sm:flex-row justify-around items-center gap-4 pt-10">
            <div>
                 <p>&copy; {currentYear()} Bola Nabil - All rights reserved.</p>
            </div>

            <div className="flex gap-2">
                {
                    paymentLinks.map((payment) => (
                            <Link
                                 key={payment.id} 
                                 to={payment.path}
                                 aria-label="Go to payment page"
                                 >
                                <FontAwesomeIcon icon={payment.icon} size="2x"/>
                            </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default FooterPayment;