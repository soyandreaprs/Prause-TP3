import axios from "axios";

const URL = "https://collectionapi.metmuseum.org/public/collection/v1";


export const getArtwork = async (q = "painting", limit = 9) => {
    try {
        const response = await axios.get(`${URL}/search`, { params: { q, hasPrimaryImage: true, hasArtistDisplayName: true } });
        const ids = response.data && response.data.objectIDs
            ? response.data.objectIDs.slice(0, limit)
            : [];
        return ids;
    } catch (error) {
        throw new Error(error);
    }
};

export const getArtworkByID = async (id) => {
    try {
        const response = await axios.get(`${URL}/objects/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);   
    }
}