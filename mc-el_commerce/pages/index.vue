<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Redirect to the first tab on page load
  window.location.href = "/tabs/home";
});
</script>

<template>
  <div>
    <!-- Optionally, add a loading message or spinner here -->
  </div>
</template>
