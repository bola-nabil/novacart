import api from "./axios";

export const getCategories = async () => {
    try {
        const { data } = await api.get("/products/categories");
        return data;
    } catch(error) {
        console.error("Can't fetch Categories data", error.message);
    }
}