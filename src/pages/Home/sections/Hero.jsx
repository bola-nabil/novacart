import Container from "../../../components/ui/Container";
import { currentYear } from "../../../utils/currentYear";
import Button from "../../../components/ui/buttons/Button";
import HeroImage from "../../../assets/images/hero-image.png";

const Hero = () => {
    return (
        <section className="hero-section bg-[#f5f7fd] w-screen">
            <Container>
                <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-10 sm:gap-0 py-5 sm:py-0  h-screen">
                    <div>
                        <p className="text-blue-700 font-bold text-xl">Summer collection {currentYear()}</p>
                        <h1 className="text-xl md:text-4xl lg:text-6xl font-bold py-4">Find everything you need</h1>
                        <p>
                            Discover premium products at unbeatable prices.
                            <br />
                            Quality you can trust, every day.
                        </p>
                        <div className="flex gap-4 py-5">
                            <Button title="Shop Now" path="/shop" />
                            <Button title="Explore Deals" path="/deals" color="white" />
                        </div>
                    </div>

                    <div className="bg-[#e2ecfb] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full flex items-center justify-center overflow-hidden">
                        <div>
                            <img src={HeroImage} alt="hero product" className="w-[100px] sm:w-[250px] lg:w-[350px] h-auto object-contain"/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;