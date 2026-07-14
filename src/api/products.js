import api from "./axios";

export const getProducts = async () => {
    try {
        const {data} = await api.get("/products");
        return data;
    } catch(error) {
        console.error("Can't Fetch products data", error.message);
    }
}