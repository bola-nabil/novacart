import Button from "../../../components/ui/buttons/Button";
import PromoBannerImage from "../../../assets/images/banners/summer-scale.webp";

const PromoBanner = () => {
    return (
        <section className="py-10">
            <div className="bg-[#ede5fb] rounded-md py-10 flex flex-col-reverse sm:flex-row justify-center sm:justify-around items-center gap-5 sm:gap-0">
            <div>
                    <h3 className="text-blue-700 font-bold">Limited Time Offer</h3>
                    <h1 className="text-4xl font-bold pt-2">Up to 50% Off</h1>
                    <p className="py-3">on selected items</p>
                    <Button title="Shop Now" path="/shop" />
            </div>
            <div>

            </div>
                <img src={PromoBannerImage} alt="promo banner" className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px]"/>
            </div>
        </section>
    );
}

export default PromoBanner;