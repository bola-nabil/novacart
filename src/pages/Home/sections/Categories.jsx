import { useCategories } from "../../../hooks/useCategories";

const Categories = () => {
    const { data, isLoading, error } = useCategories();

    if(isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong.</p>;

    console.log(data);
    return (
        <section>
            <h1>Categories</h1>
        </section>
    );
}

export default Categories;