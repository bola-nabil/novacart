import Container from "../../../components/ui/Container";
import { useProducts } from "../../../hooks/useProducts";

const BestSellers = () => {
    const { data, isLoading, error} = useProducts();

    const bestSellers = data?.products
        ?.sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
    
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    console.log(bestSellers);
    return (
        <section>
            <Container>

            </Container>
        </section>
    );
}

export default BestSellers;