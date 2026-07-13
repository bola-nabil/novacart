import Container from "../../../components/ui/Container";
import { currentYear } from "../../../utils/currentYear";
import Button from "../../../components/ui/buttons/Button";
import HeroImage from "../../../assets/images/hero-image.png";

const Hero = () => {
    return (
        <section className="bg-[#f5f7fd] h-screen w-screen">
            <Container>
                <div className="flex items-center h-screen">
                    <div>
                        <p className="text-blue-700 font-bold text-xl">Summer collection {currentYear()}</p>
                        <h1 className="text-6xl font-bold py-4">Find everything you need</h1>
                        <p className="">
                            Discover premium products at unbeatable prices.
                            <br />
                            Quality you can trust, every day.
                        </p>
                        <div className="flex gap-4 py-5">
                            <Button title="Shop Now" path="/shop" />
                            <Button title="Explore Deals" path="/deals" color="white" />
                        </div>
                    </div>

                    <div className="bg-[#e2ecfb] w-[600px] h-[600px] rounded-full flex items-center justify-center overflow-hidden">
                        <div className="">
                            <img src={HeroImage} alt="hero product" className="w-[350px] h-auto object-contai"/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;