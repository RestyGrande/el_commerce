import { defineStore } from "pinia";
import PouchDB from "pouchdb";

type Product = {
  _id: string;
  name: string;
  brand?: string | null;
  sellingPrices: [];
  createdAt: string;
  updatedAt: string;
  productPhoto: any;
};

export const useProductStore = defineStore("products", () => {
  const state = ref<Product[]>([]);
  const count = ref(0);
  const db = new PouchDB("products");

  const load = async () => {
    if (!db) return;
    try {
      const result = await db.allDocs({ include_docs: true });
      count.value = result.total_rows;
      state.value = result.rows.map((row: any) => {
        const sellingPricesArray = row.doc.sellingPrices || [];

        if (sellingPricesArray.length > 0) {
          const firstSellingPrice = sellingPricesArray[0];
          const { retailPrice, wholesalePrice } = firstSellingPrice;

          if (retailPrice) row.doc.retailPrice = Number(retailPrice);
          if (wholesalePrice) row.doc.wholesalePrice = Number(wholesalePrice);
        }

        return row.doc;
      });
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const add = async (product: Product) => {
    if (!db) return;
    const newProduct = {
      ...product,
      _id: generateObjectId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await db.put(newProduct);
      state.value.push(newProduct);
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  const remove = async (id: string) => {
    if (!db) return;
    try {
      const product = await db.get(id);
      await db.remove(product);
      state.value = state.value.filter((p) => p._id !== id);
    } catch (err) {
      console.error("Failed to remove product:", err);
    }
  };

  const update = async (id: string, updatedData: Partial<Product>) => {
    if (!db) return;
    try {
      const product = await db.get(id);
      const updatedProduct = { ...product, ...updatedData };
      await db.put(updatedProduct);
      state.value = state.value.map((p) =>
        p._id === id ? { ...updatedProduct } : p
      );
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  const generateObjectId = () => {
    return (
      Math.floor(Date.now() / 1000).toString(16) + // Timestamp
      "xxxxxxxxxxxxxxxx"
        .replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)) // Random hex
        .toLowerCase()
    );
  };

  return {
    state,
    count,
    load,
    add,
    remove,
    update,
  };
});
