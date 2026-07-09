import { useState } from "react";
import {faPaperPlane} from "../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContact = () => {
    const [email, setEmail] = useState("");
    return (
        <section>
            <h1 className="text-xl font-bold">Newsletter</h1>

            <div className="py-5">
                <p>
                    Subscribe to get special offers,
                    free giveaways, and once-in-a-lifetime
                    deals.
                </p>
            </div>

            <div>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </div>
        </section>
    );
}

export default FooterContact;