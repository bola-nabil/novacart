import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Categories from "./sections/Categories";
import FeatureProducts from "./sections/FeatureProducts";
import PromoBanner from "./sections/PromoBanner";
import FlashSale from "./sections/FlashSale";
import BestSellers from "./sections/BestSellers";
import NewArrivals from "./sections/NewArrivals";
import Brands from "./sections/Brands";
import Testimonials from "./sections/Testimonials";
import "./home.css";

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Categories />
            <FeatureProducts />
            <PromoBanner />
            <FlashSale />
            <BestSellers />
            <NewArrivals />
            <Brands />
            <Testimonials />
        </div>
    );
}

export default Home;