import Container from "../../../components/ui/Container";
import { useProducts } from "../../../hooks/useProducts";
import ProductHeader from "../../../components/ui/ProductHeader";

const NewArrivals = () => {
    const { data, isLoading, error} = useProducts();
    const newArrivals = data?.products.slice(-6);

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    console.log("new arrivals data:", data);
    return (
        <section className="py-10">
            <Container>
                <div>
                    <ProductHeader title="New Arrivals" path="/products" linkColor="green" />
                </div>
            </Container>
        </section>
    );
}

export default NewArrivals;