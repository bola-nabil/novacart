import { Link } from "react-router-dom";

const FooterPages = ({pageTitle, pages}) => {
    return (
        <section>
            <h1 className="text-xl md:text-lg font-bold pb-5">{pageTitle}</h1>

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