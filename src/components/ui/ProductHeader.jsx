import { Link } from "react-router-dom";

const ProductHeader = ({title, path, linkColor="black"}) => {
    return (
        <div className="flex justify-between items-center font-bold">
            <h1 className="text-2xl">{title}</h1>
            <Link to={path} className={`text-md text-${linkColor}`}>View All</Link>
        </div>
    );
}

export default ProductHeader;