import { create } from 'zustand'
import PocketBase from 'pocketbase';
const pocketBaseUrl = import.meta.env.VITE_POCKETBASE_URL;
if (!pocketBaseUrl) {
    throw new Error("VITE_POCKET_URL is required");
}
const pb = new PocketBase(pocketBaseUrl);


export const useConfiguratorStore = create((set) => ({
  Categories: [],
  currentCategory: null,
  assets: [],
  fetchCategories: async () =>{
    // you can also fetch all records at once via getFullList
    const Categories = await pb.collection('CustomizationGroups').getFullList({
        sort: '+position',
    });
    const assets = await pb.collection('CustomizationAssets').getFullList({
        sort: '-created',
    });
    set({ Categories, currentCategory: Categories [0], assets });
  },
  setCurrentCategory:  (category) => set({ currentCategory: category }) ,
}))
