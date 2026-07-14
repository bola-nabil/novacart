import api from "./axios";

export const getCategories = async () => {
    try {
        const { data } = api.get("/products/categorie");
        return data;
    } catch(error) {
        console.error("Can't fetch Categories data", error.message);
    }
}