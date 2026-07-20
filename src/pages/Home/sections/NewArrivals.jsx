import Container from "../../../components/ui/Container";
import { useProducts } from "../../../hooks/useProducts";

const NewArrivals = () => {
    const { data, isLoading, error} = useProducts();
    const newArrivals = data?.products.slice(-6);

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    console.log("new arrivals data:", data);
    return (
        <section>
            <Container>
                <h1>New Arrivals</h1>
            </Container>
        </section>
    );
}

export default NewArrivals;