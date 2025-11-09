import { create } from "zustand";
import { getArtwork, getArtworkByID } from "../services/api-art";

export const useArtStore = create((set) => ({
  artworks: [],
  artwork: null,
  loading: false,
  error: false,
  errorID: false,

  getArtworks: async () => {
    set({ loading: true });
    try {
      const ids = await getArtwork();
      const promises = ids.map((id) => getArtworkByID(id));
      const response = await Promise.all(promises);
      set({ artworks: response });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  getArtworkByID: async (id) => {
    set({ loading: true });
    try {
      const response = await getArtworkByID(id);
      set({ artwork: response });
    } catch (error) {
      set({ errorID: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useArtStore;