import ProfileIcon from "../assets/images/profile-icon.svg";
import WishlistIcon from "../assets/images/wishlist-icon.svg";
import CartIcon from "../assets/images/cart-icon.svg";

export const centerNavLinks = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: "2",
        title: "Shop",
        path: "/shop"
    },
    {
        id: "3",
        title: "Categories",
        path: "/categories"
    },
    {
        id: "4",
        title: "Deals",
        path: "/deals"
    },
    {
        id: "5",
        title: "About Us",
        path: "/about"
    },
    {
        id: "6",
        title: "Contact",
        path: "/contact"
    }
];

export const rightNavLinks = [
    {
        id: 1,
        image: ProfileIcon,
        path: "/profile"
    },
    {
        id: 2,
        image: WishlistIcon,
        path: "/wishlist"
    },
    {
        id: 3,
        image: CartIcon,
        path: "/cart"
    }
]