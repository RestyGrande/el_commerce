<script setup lang="ts">
// Routing and Meta Information
const route = useRoute();
const { title, subtitle, masterKey, isAddable, isDeletable }: any = route.meta;
</script>

<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Main Content -->
    <main class="flex-1 p-6">
      <header class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold">{{ title }}</h1>
          <p class="text-gray-600">{{ subtitle }}</p>
        </div>
      </header>

      <!-- Dashboard Content Goes Here -->
      <section class="flex gap-10 h-screen">
        <div class="bg-gray-100 rounded-lg w-3/4 p-5">
          <div class="grid grid-cols-5 gap-4 overflow-y-auto h-full">
            <div
              class="bg-white p-4 rounded-lg shadow"
              v-for="product in 100"
              :key="product"
            >
              <div class="w-full h-52">
                <img
                  src="https://dummyimage.com/500x500/ef/000&text=Product+Image"
                  alt="Product"
                  class="w-full h-full object-contain rounded"
                />
              </div>
              <h3 class="mt-2 text-center text-sm font-semibold">title</h3>
              <p class="text-center text-gray-500">price</p>
            </div>
          </div>
        </div>
        <div>2</div>
      </section>
    </main>
  </div>
</template>
