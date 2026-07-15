import { useCategories } from "../../../hooks/useCategories";
import Container from "../../../components/ui/Container";
import { categoryImages } from "../../../data/categoryImages";
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, isLoading, error } = useCategories();

    if(isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong.</p>;

    return (
        <section>
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-md sm:text-xl font-bold">Shop by Category</h1>
                    <Link to="/categories" className="text-blue-700">View All</Link>
                </div>

                <div>
                    {
                        data.map((category) => (
                            <div key={category.slug}>
                                <h1>{category.name}</h1>
                                <div>
                                    <Link to={`/products/category/${category.slug}`}>
                                        <img src={categoryImages[category.slug]} alt={category.name}/>
                                    </Link>
                                </div>
                            </div>
                        )).slice(0,5)
                    }
                </div>
            </Container>
        </section>
    );
}

export default Categories;