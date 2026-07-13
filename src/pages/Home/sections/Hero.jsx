import Container from "../../../components/ui/Container";
import { currentYear } from "../../../utils/currentYear";
import Button from "../../../components/ui/buttons/Button";
import HeroImage from "../../../assets/images/hero-image.png";

const Hero = () => {
    return (
        <section className="bg-blue-100 h-screen w-screen">
            <Container>
                <div>
                    <div>
                        <p>Summer collection {currentYear()}</p>
                        <h1>Find everything you need</h1>
                        <p>
                            Discover premium products at unbeatable prices.
                            Quality you can trust, every day.
                        </p>
                        <div>
                            <Button title="Shop Now" path="/shop" />
                            <Button title="Explore Deals" path="/deals" color="white" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src={HeroImage} alt="hero product"/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;