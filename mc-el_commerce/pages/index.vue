<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Redirect to the first tab on page load
  window.location.href = "/tabs/home";
});
</script>

<template>
  <div class="text-black bg-gray-100 min-h-screen">
    <div
      class="fixed top-0 left-0 right-0 bg-white shadow-lg h-14 flex items-center justify-between px-4 border-t"
    >
      <!-- Left Action (e.g., Menu) -->
      <button class="p-2 rounded-full ion-activatable relative">
        <ion-icon :icon="ioniconsMenuOutline" class="text-2xl" />
        <ion-ripple-effect></ion-ripple-effect>
      </button>

      <!-- Title or Center Element -->
      <span class="text-lg font-medium">El Frozen Goods</span>

      <!-- Right Action (e.g., Profile or Settings) -->
      <button class="p-2 rounded-full hover:bg-gray-200">
        <!-- <ion-icon :icon="ioniconsMenuOutline" class="text-2xl" /> -->
      </button>
    </div>
    <div class="pt-12 px-4">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">Main Heading</h1>
      <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold">Subheading</h2>
      <h3 class="text-lg sm:text-xl md:text-2xl font-medium">Section Title</h3>

      <div
        class="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
      >
        <div>
          <h3 class="text-gray-600 text-sm font-medium">Total Students</h3>
          <p class="text-2xl font-semibold">12,543</p>
          <p class="text-xs text-gray-500 mt-1">80% Increase than before</p>
        </div>
        <!-- Simple Bar Chart Icon -->
        <div class="w-12 h-12 flex items-center justify-center">
          <svg
            class="w-10 h-10 text-purple-400"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12h2m4 0h2m4 0h2m4 0h2m-12 0V3m4 9V7m4 5V5"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Total Income Card -->
      <div
        class="bg-white rounded-lg shadow-md p-4 flex justify-between items-center mt-4"
      >
        <div>
          <h3 class="text-gray-600 text-sm font-medium">Total Income</h3>
          <p class="text-2xl font-semibold">$25,740</p>
          <p class="text-xs text-gray-500 mt-1">12% Increase than before</p>
        </div>
        <!-- Simple Bar Chart Icon -->
        <div class="w-12 h-12 flex items-center justify-center">
          <svg
            class="w-10 h-10 text-green-400"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12h2m4 0h2m4 0h2m4 0h2m-12 0V3m4 9V7m4 5V5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
