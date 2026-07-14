import { useCategories } from "../../../hooks/useCategories";
import Container from "../../../components/ui/Container";

const Categories = () => {
    const { data, isLoading, error } = useCategories();

    if(isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong.</p>;

    return (
        <section>
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-md sm:text-xl font-bold">Shop by Category</h1>
                    <p className="text-blue-700">View All</p>
                </div>
            </Container>
        </section>
    );
}

export default Categories;