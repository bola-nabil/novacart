import { currentYear } from "../../utils/currentYear";

const FooterPayment = () => {
    return (
        <section>
            <div>
                 <p>&copy; {currentYear()} Bola Nabil - All rights reserved.</p>
            </div>
        </section>
    );
}

export default FooterPayment;