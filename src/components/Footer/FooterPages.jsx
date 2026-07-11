import { Link } from "react-router-dom";
import { faChevronDown } from "../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterPages = ({pageTitle, pages}) => {
    return (
        <section>

            <div>
                <h1 className="text-xl md:text-lg font-bold pb-5">{pageTitle}</h1>
                <div className="block sm:hidden">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {
                    pages.map((page) => (
                        <Link key={page.id} to={page.path} className="footer-pages text-lg md:text-sm">
                            {page.title}
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default FooterPages;