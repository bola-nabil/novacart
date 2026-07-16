import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Categories from "./sections/Categories";
import FeatureProducts from "./sections/FeatureProducts";
import PromoBanner from "./sections/PromoBanner";
import "./home.css";

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Categories />
            <FeatureProducts />
            <PromoBanner />
        </div>
    );
}

export default Home;