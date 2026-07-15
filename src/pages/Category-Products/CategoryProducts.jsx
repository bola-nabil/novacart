import { useParams } from "react-router-dom";

const CategoryProducts = () => {
    const { slug } = useParams();
    return (
        <>
            <h1>{slug}</h1>
        </>
    );
}

export default CategoryProducts;