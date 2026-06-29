import { Link } from "react-router-dom";

const FooterPages = ({pageTitle, pages}) => {
    return (
        <section>
            <h1>{pageTitle}</h1>

            <div>
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