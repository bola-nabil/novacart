import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchProducts.css";

const SearchProducts = () => {
    const [products, setProducts] = useState("");
    return (
        <div className="search-nav relative">
            <div className="search-icon absolute right-[10px]">
                <FontAwesomeIcon icon={faMagnifyingGlass} className=""/>
            </div>
            <input 
                type="text"
                placeholder="Search products..."
                value={products}
                onChange={(e) => setProducts(e.target.value)}
                className="border-none outline-none bg-[#f8f8fb] shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-[50px] px-[10px] py-[5px] rounded-lg"
            />
        </div>
    );
}

export default SearchProducts;