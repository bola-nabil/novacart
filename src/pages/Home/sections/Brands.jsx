import Container from "../../../components/ui/Container";
import { brandsImages } from "../../../data/brandsImages";

const Brands = () => {
    return (
        <section className="py-10">
            <Container>
                <h1 className="text-2xl font-bold">Top Brands</h1>
                <div className="pt-7 flex items-center justify-between">
                    {
                        brandsImages.map((brand) => (
                            <div key={brand.id} className="bg-gray-100 rounded-lg flex items-center justify-center gap-4 p-3 lg:p-5">
                                <img src={brand.image} alt={brand.name} className="w-[50px] h-[50px] sm:w-[150px] sm:h-[100px] object-contain"/>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}

export default Brands;