import { useState } from "react";
import EmailPhoto from "../../../assets/images/newsletter/email.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "../../../utils/icons";
import { Link } from "react-router-dom";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    return (
        <section className="py-10">
            <div className="bg-[#fcecf1] w-full px-10 py-4 grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                <div className="order-2 sm:order-1">
                    <h1 className="text-lg sm:text-2xl font-bold">SubScribe to Our Newsletter</h1>
                    <p className="py-3">
                        Get the lastest updates, offers and exclusive
                        <br />
                        deals straight to your inbox
                    </p>
                    <div className="flex items-center gap-1">
                        <div className="w-full">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="w-full rounded-md bg-white p-2 outline-none"
                            />
                        </div>

                        <Link
                            to="/"
                            className="bg-red-500 text-white p-2 rounded-md font-bold"
                        >
                            <span className="sm:hidden">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </span>

                            <span className="hidden sm:inline">
                                Subscribe
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="order-1 sm:order-2">
                    <img 
                        src={EmailPhoto} 
                        alt="newsletter" 
                        className="w-[400px] h-[250px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Newsletter;