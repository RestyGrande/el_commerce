<template>
  <div class="grid grid-cols-12 h-full bg-gray-100 gap-1 overflow-y-hidden">
    <div class="col-start-1 col-span-12"><Navbar /></div>
    <div class="bg-white h-dvh p-4 flex flex-col space-y-6">
      <a href="#" class="text-orange-500">
        <div
          class="p-2 border-2 flex flex-col items-center border-orange-500 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span class="text-sm mt-1">Home</span>
        </div>
      </a>

      <a href="#" class="text-gray-600 hover:text-orange-500">
        <div class="hover:border-orange-500 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>

          <span class="text-xs mt-1">Customers</span>
        </div>
      </a>
    </div>
    <div class="bg-gray-100 p-4 col-span-8 h-screen flex flex-col">
      <!-- Category Buttons -->
      <div class="w-full bg-white mt-1 mb-5 p-1 flex flex-wrap gap-2">
        <button
          class="px-4 py-2 text-gray-800 rounded-lg hover:bg-orange-200 transition-colors duration-300"
          v-for="category in categories"
          :key="category"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Product Grid with Scroll -->
      <div class="grid grid-cols-4 gap-4 overflow-y-auto h-full pb-20">
        <div
          class="bg-white p-4 rounded-lg shadow"
          v-for="product in products"
          :key="product"
        >
          <div class="w-full h-52">
            <img
              :src="fixImageLinks(product.images)"
              alt="Product"
              class="w-full h-full object-contain rounded"
            />
          </div>
          <h3 class="mt-2 text-center text-sm font-semibold">
            {{ product.title }}
          </h3>
          <p class="text-center text-gray-500">{{ product.price }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-4 col-span-3"></div>
  </div>
</template>

<script setup>
const { data: products } = useLazyAsyncData("products", async () => {
  const url = `https://api.escuelajs.co/api/v1/products`;
  return await $fetch(url);
});

const { data: categories } = useLazyAsyncData("categories", async () => {
  const url = `https://api.escuelajs.co/api/v1/categories`;
  return await $fetch(url);
});

const fixImageLinks = (imagesArray) => {
  return imagesArray[0].replace(/[\[\]\"]/g, "").trim();
};
</script>

<style>
body {
  overflow: hidden;
}
</style>
