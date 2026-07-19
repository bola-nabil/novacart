import Container from "../../../components/ui/Container";
import { useProducts } from "../../../hooks/useProducts";
import ProductHeader from "../../../components/ui/ProductHeader";
import Rating from "../../../components/ui/Rating";
import { Link } from "react-router-dom";

const BestSellers = () => {
    const { data, isLoading, error} = useProducts();

    const bestSellers = data?.products
        ?.sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
    
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    console.log(bestSellers);
    return (
        <section className="py-10">
            <Container>
                <div>
                    <ProductHeader title="Best Sellers" path="/products" linkColor="indigo-700"/>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-7">
                        {
                           bestSellers.map((product, index) => (
                                <Link key={product.id} to={`/products/${product.id}`}>
                                    <div className="bg-indigo-50">
                                        <div className="p-2 font-bold">
                                            <span className="bg-indigo-700 text-white px-2 py-1 rounded-sm">#{index + 1}</span>
                                        </div>
                                        <img src={product.thumbnail} alt={product.title}/>
                                    </div>
                                    <div className="shadow-md p-2 font-bold rounded-md">
                                        <h1 className="">{product.title}</h1>
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

export default BestSellers;