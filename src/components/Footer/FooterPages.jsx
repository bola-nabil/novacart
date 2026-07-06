import { Link } from "react-router-dom";

const FooterPages = ({pageTitle, pages}) => {
    return (
        <section>
            <h1 className="text-xl font-bold">{pageTitle}</h1>

            <div className="footer-pages py-4 flex flex-col gap-2">
                {
                    pages.map((page) => (
                        <Link key={page.id} to={page.path}>
                            {page.title}
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default FooterPages;