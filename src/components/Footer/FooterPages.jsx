import { useState } from "react";
import { Link } from "react-router-dom";
import { faChevronDown, faChevronUp} from "../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterPages = ({pageTitle, pages}) => {
    const [show, setShow] = useState(false);
    return (
        <section>

            <div className="flex justify-between">
                <h1 className="text-xl md:text-lg font-bold pb-0 sm:pb-5">{pageTitle}</h1>
                <div className="block sm:hidden" onClick={() => setShow(prev => !prev)}>
                    {
                        show? (<FontAwesomeIcon icon={faChevronUp} />)
                        : 
                        (<FontAwesomeIcon icon={faChevronDown} />)
                    }
                </div>
            </div>
            <div className={`${show ? "flex" : "hidden"} sm:flex flex flex-col gap-4 pt-5 sm:pt-0`}>
                {pages.map((page) => (
                    <Link
                        key={page.id}
                        to={page.path}
                        className="text-lg md:text-sm"
                    >
                        {page.title}
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default FooterPages;