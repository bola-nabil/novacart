import { useState } from "react";
import Container from "../../../components/ui/Container";
import { useProducts } from "../../../hooks/useProducts";
import { discountedPrice } from "../../../utils/discountedPrice";
import Rating from "../../../components/ui/Rating";
import { faHeart } from "../../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FeatureProducts = () => {
    const [show, setShow] = useState(false);

    const { data, isLoading, error} = useProducts();

    const featuredProducts = data?.products
    ?.sort((a,b) => b.discountPercentage - a.discountPercentage)
    ?.slice(0,4) || []

    if(isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong.</p>;

    return (
        <section className="py-10">
            <Container>
                <h1 className="font-bold text-md sm:text-lg">Featured Products</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-5">
                    {
                        featuredProducts.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id} className="block">
                             <div className="shadow-md rounded-md">
                                <div className="bg-gray-100">
                                    <div>
                                        <div className="text-end p-2" onClick={() => setShow(prev => !prev)}>
                                            <FontAwesomeIcon
                                             icon={faHeart}
                                             className={`${show ? "text-red-700": "text-gray-500"} text-xl`}/>
                                        </div>
                                        <img src={product.thumbnail} 
                                        alt={product.title}
                                        className="w-[200px] h-auto"
                                         />
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">{product.title}</h1>
                                    <div className="py-3"><Rating rating={product.rating}/></div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-[12px] lg:text-[16px]">${product.price}</p>
                                        <span className="line-through text-gray-400 font-bold text-[12px] lg:text-[16px]">${discountedPrice(product.price, product.discountPercentage)}</span>
                                        <span className="bg-red-100 text-red-700 font-bold text-[12px] p-1">-{product.discountPercentage}%</span>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}

export default FeatureProducts;