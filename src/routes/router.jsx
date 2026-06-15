import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Categories from "../pages/Categories/Categories";
import Deals from "../pages/Deals/Deals";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <App />,
        "children": [
            {
                "index": true,
                "element": <Home />
            },
            {
                "path": "/shop",
                "element": <Shop />
            },
            {
                "path": "/categories",
                "element": <Categories />
            },
            {
                "path": "/deals",
                "element": <Deals />
            },
            {   
                "path": "/about",
                "element": <About />
            },
            {
                "path": "/contact",
                "element": <Contact />
            }
        ]
    }
]);

export default router;