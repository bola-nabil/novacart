import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Categories from "./sections/Categories";
import FeatureProducts from "./sections/FeatureProducts";
import PromoBanner from "./sections/PromoBanner";
import FlashSale from "./sections/FlashSale";
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
        </div>
    );
}

export default Home;