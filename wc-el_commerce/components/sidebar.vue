<template>
  <aside class="w-64 bg-gray-100 flex flex-col">
    <div class="text-center py-6">
      <img
        src="https://dummyimage.com/300x300/ef/000&text=LOGO"
        alt="Logo"
        class="w-24 mx-auto"
      />
    </div>
    <nav class="mt-10 flex-grow px-4">
      <a
        href="/"
        class="flex items-center py-3 px-4 text-gray-500 hover:bg-purple-500 hover:text-white rounded-lg transition-colors"
      >
        <span class="bg-transparent w-2 h-8 rounded-r-lg mr-4"></span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
          />
          <path
            d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
          />
        </svg>

        <span class="pl-3">Dashboard</span>
      </a>
      <a
        href="/products"
        class="flex items-center py-3 px-4 text-gray-500 hover:bg-purple-500 hover:text-white rounded-lg transition-colors"
      >
        <span class="bg-transparent w-2 h-8 rounded-r-lg mr-4"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
            clip-rule="evenodd"
          />
          <path
            d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z"
          />
        </svg>

        <span class="pl-3">Products</span>
      </a>
      <!-- Add other links here -->
    </nav>

    <div class="py-4 px-6 text-sm text-gray-500">
      <div class="flex items-center">
        <span class="bg-transparent w-2 h-8 rounded-r-lg mr-4"></span>

        <img
          src="https://dummyimage.com/500x500/ef/000&text=User+Image"
          alt="User Name"
          class="w-8 h-8 rounded-full mr-3"
        />
        <div>
          <p class="font-semibold">User Name</p>
          <p class="text-xs">User Role</p>
        </div>
      </div>
    </div>
  </aside>
</template>
