import { currentYear } from "../../utils/currentYear";
import { paymentLinks } from "../../utils/footerLinks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterPayment = () => {
    return (
        <section className="flex justify-around items-center pt-10">
            <div>
                 <p>&copy; {currentYear()} Bola Nabil - All rights reserved.</p>
            </div>

            <div className="flex gap-2">
                {
                    paymentLinks.map((payment) => (
                        <div className="">
                            <Link key={payment.id} to={payment.path}>
                                <FontAwesomeIcon icon={payment.icon} size="2x"/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default FooterPayment;