import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Products from "../pages/Products/Products";
import Categories from "../pages/Categories/Categories";
import Deals from "../pages/Deals/Deals";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import WishList from "../pages/WishList/WishList";
import Cart from "../pages/Cart/Cart";
import NewArrivals from "../pages/new-arrivals/NewArrivals";
import BestSellers from "../pages/best-sellers/BestSellers";
import FAQ from "../pages/FAQ/FAQ";
import ShippingPolicy from "../pages/shipping-policy/ShippingPolicy";
import Returns from "../pages/Returns/Returns";
import TrackOrder from "../pages/track-order/TrackOrder";
import Careers from "../pages/Careers/Careers";
import Policy from "../pages/Policy/Policy";
import Blog from "../pages/Blog/Blog";
import Payment from "../pages/Payment/Payment";
import CategoryProducts from "../pages/Category-Products/CategoryProducts";

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
                "path": "/products",
                "element": <Products />
            },
            {
                "path": "/categories",
                "element": <Categories />
            },
            {
                "path": "/products/category/:slug",
                "element": <CategoryProducts />
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
            },
            {
                "path": "/profile",
                "element": <Profile />
            },
            {
                "path": "/wishlist",
                "element": <WishList />
            },
            {
                "path": "/cart",
                "element": <Cart />
            },
            {
                "path": "/new-arrivals",
                "element": <NewArrivals />
            },
            {
                "path": "/best-sellers",
                "element": <BestSellers />
            },
            {
                "path": "/faq",
                "element": <FAQ />
            },
            {
                "path": "/shipping-poilcy",
                "element": <ShippingPolicy />
            },
            {
                "path": "/returns",
                "element": <Returns />
            },
            {
                "path": "/track-order",
                "element": <TrackOrder />
            },
            {
                "path": "/careers",
                "element": <Careers />
            },
            {
                "path": "/policy",
                "element": <Policy />
            },
            {
                "path": "/blog",
                "element": <Blog />
            },
            {
                "path": "/payment",
                "element": <Payment />
            }
        ]
    }
]);

export default router;