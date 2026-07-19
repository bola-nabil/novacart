import { useProducts } from "../../../hooks/useProducts";
import Container from "../../../components/ui/Container";
import Timer from "../../../components/ui/Timer";
import { Link } from "react-router-dom";
import { faBolt } from "../../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlashSale = () => {
    const { data, isLoading, error} = useProducts();

    const flashSaleProducts = data?.products
        ?.sort((a, b) => b.discountPercentage - a.discountPercentage)
        .slice(0, 6);

    if(isLoading) return <p>Loading....</p>
    if(error) return <p>Something went wrong</p>

    console.log("Falsh Data:", flashSaleProducts);


    return (
        <section className="py-10">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="text-2xl flex items-center gap-2">
                        <FontAwesomeIcon icon={faBolt} className="text-red-700 "/>
                        <h1 className="font-bold">Flash Sale</h1>
                    </div>

                    <div className="hidden sm:block">
                        <Timer endTime="2026-07-20T20:00:00"/>
                    </div>

                    <Link to="/products" className="text-red-700 font-bold">View All</Link>
                </div>

                <div className="block sm:hidden pt-6">
                    <Timer endTime="2026-07-20T20:00:00"/>
                </div>

                <div>
                </div>
            </Container>
        </section>
    );
}

export default FlashSale;