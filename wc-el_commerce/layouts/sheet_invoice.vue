<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="bg-gray-300 h-16 flex items-center justify-between mb-1">
      <div class="ml-4 w-8 h-8 bg-gray-300 rounded-full"></div>
      <!-- Other header content -->
    </header>

    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="bg-gray-300 w-24"></aside>

      <!-- Main content -->
      <main class="flex-1 bg-white p-4">
        <slot />
      </main>

      <!-- Right sidebar or additional section -->
      <!-- <aside class="bg-red-300 w-1/4"></aside> -->
    </div>
  </div>
</template>
