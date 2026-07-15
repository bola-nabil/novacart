import { useCategories } from "../../../hooks/useCategories";
import Container from "../../../components/ui/Container";
import { categoryImages } from "../../../data/categoryImages";
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, isLoading, error } = useCategories();

    if(isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong.</p>;

    return (
        <section className="py-10">
            <Container>
                <div className="flex justify-between pb-5">
                    <h1 className="text-md sm:text-xl font-bold">Shop by Category</h1>
                    <Link to="/categories" className="text-blue-700">View All</Link>
                </div>

                <div className="flex justify-between">
                    {
                        data.slice(0,5).map((category, index) => (
                            <div key={category.slug} className={index >= 3 ? "hidden sm:block" : ""}>
                                <div className="w-[100px] h-[100px] rounded-full bg-gray-100 flex items-center justify-center ">
                                    <Link to={`/products/category/${category.slug}`}>
                                        <img
                                         src={categoryImages[category.slug]}
                                          alt={category.name}
                                           className="object-contain w-[80px]"
                                          />
                                    </Link>
                                </div>
                                <h1 className="font-bold text-center pt-2">{category.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}

export default Categories;