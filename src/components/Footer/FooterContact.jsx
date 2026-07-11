import { useState } from "react";
import {faPaperPlane} from "../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContact = () => {
    const [email, setEmail] = useState("");
    return (
        <section>
            <h1 className="text-xl md:text-lg font-bold">Newsletter</h1>

            <div className="py-5 hidden sm:block">
                <p>
                    Subscribe to get special offers,
                    free giveaways, and once-in-a-lifetime
                    deals.
                </p>
            </div>

            <div className="flex sm:block lg:flex pt-3 sm:pt-0">
                <input 
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="outline-none border border-black p-2 h-[35px] w-full md:w-3.5/4"
                />
                <div className="bg-blue-700 w-[35px] h-[35px] flex items-center justify-center rounded-md">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                </div>
            </div>
        </section>
    );
}

export default FooterContact;