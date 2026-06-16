import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchProducts.css";

const SearchProducts = () => {
    const [products, setProducts] = useState("");
    return (
        <div className="search-nav">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <input 
                type="text"
                placeholder="Search products..."
                value={products}
                onChange={(e) => setProducts(e.target.value)}
            />
        </div>
    );
}

export default SearchProducts;