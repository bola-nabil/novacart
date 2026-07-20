import Container from "../../../components/ui/Container";
import { useProducts } from "../../../hooks/useProducts";
import ProductHeader from "../../../components/ui/ProductHeader";
import Rating from "../../../components/ui/Rating";
import { Link } from "react-router-dom";

const NewArrivals = () => {
    const { data, isLoading, error} = useProducts();
    const newArrivals = data?.products.slice(-6);

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    return (
        <section className="py-10">
            <Container>
                <div>
                    <ProductHeader title="New Arrivals" path="/products" linkColor="green" />

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-7">
                        {
                            newArrivals.map((product) => (
                                <Link key={product.id} to={`/products/${product.id}`}>
                                    <div className="bg-green-50">
                                        <div className="font-bold p-2">
                                            <span className="bg-green-700 text-white px-2 py-1 rounded-sm">New</span>
                                        </div>
                                        <img src={product.thumbnail || product.title} alt={product.title}/>
                                    </div>
                                    <div className="shadow-md rounded-md p-2 font-bold">
                                        <h1>{product.title}</h1>
                                        <p className="py-3">${product.price}</p>
                                        <div className="flex items-center gap-2">
                                            <Rating rating={product.rating}/>
                                            <span className="text-gray-400">({product.reviews.length})</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default NewArrivals;