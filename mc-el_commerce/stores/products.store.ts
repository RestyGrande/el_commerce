import { defineStore } from "pinia";
import PouchDB from "pouchdb";
import { useFilesystem } from "@/composables/useFilesystem";

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
  const { savePhotoToFilesystem, retrievePhotoFromFilesystem } =
    useFilesystem();

  const isBase64 = (str: string): boolean => {
    const base64Regex =
      /^(data:\w+\/[a-zA-Z+\-.]+;base64,)?[A-Za-z0-9+/]+={0,2}$/;
    return base64Regex.test(str);
  };

  const load = async () => {
    if (!db) return;
    try {
      const result = await db.allDocs({ include_docs: true });
      count.value = result.total_rows;

      // Use Promise.all to handle async functions inside map
      state.value = await Promise.all(
        result.rows.map(async (row: any) => {
          let productPhoto = row.doc.productPhoto;

          // Retrieve from filesystem if it's not Base64
          if (!isBase64(productPhoto)) {
            console.log({ productPhoto });

            // productPhoto = await retrievePhotoFromFilesystem(productPhoto);
          }

          // Assign updated product photo
          row.doc.productPhoto = productPhoto;

          // Fix sellingPrices handling
          const sellingPricesArray = row.doc.sellingPrices || [];

          if (sellingPricesArray.length > 0) {
            const firstSellingPrice = sellingPricesArray[0];
            const { retailPrice, wholesalePrice } = firstSellingPrice;

            if (retailPrice) row.doc.retailPrice = Number(retailPrice);
            if (wholesalePrice) row.doc.wholesalePrice = Number(wholesalePrice);
          }

          return row.doc;
        })
      );
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const add = async (product: Product) => {
    if (!db) return;
    if (product.productPhoto) {
      const savedPhotoUri = await savePhotoToFilesystem(product.productPhoto);
      product.productPhoto = savedPhotoUri;
    }
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
    load,
    add,
    remove,
    update,
    count,
  };
});
