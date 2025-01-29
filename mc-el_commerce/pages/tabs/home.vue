<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { useProductStore } from "~/stores/products.store";
const productStore = useProductStore();

onMounted(async () => {
  await productStore.load();
});
</script>

<template>
  <IonPage>
    <IonContent class="min-h-screen bg-gray-100 p-4">
      <div class="p-4">
        <h1 class="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold">
          ❄️ El Frozen Goods
        </h1>

        <div class="grid grid-cols-2 gap-4">
          <!-- New Users -->
          <NuxtLink to="/tabs/products" class="text-gray-800">
            <div
              class="bg-gray-200 p-4 rounded-lg shadow-sm ion-activatable relative flex items-center gap-4"
            >
              <div class="flex flex-col grow gap-1">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col">
                    <p class="text-gray-600 text-sm">Products</p>
                    <p class="text-2xl font-bold">{{ productStore.count }}</p>
                  </div>
                  <div
                    class="w-14 h-14 flex justify-center items-center bg-sky-50 rounded-full text-3xl"
                  >
                    🌭
                  </div>
                </div>
                <p class="text-sm text-sky-500 font-medium">Total products</p>
              </div>
              <ion-ripple-effect></ion-ripple-effect>
            </div>
          </NuxtLink>

          <div
            class="bg-gray-200 p-4 rounded-lg shadow-sm ion-activatable relative flex items-center gap-4"
          >
            <div class="flex flex-col grow gap-1">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <p class="text-gray-600 text-sm">Customers</p>
                  <p class="text-2xl font-bold">{{ productStore.count }}</p>
                </div>
                <div
                  class="w-14 h-14 flex justify-center items-center bg-sky-50 rounded-full text-3xl"
                >
                  👥
                </div>
              </div>
              <p class="text-sm text-sky-500 font-medium">Total customers</p>
            </div>
            <ion-ripple-effect></ion-ripple-effect>
          </div>

          <div
            class="bg-gray-200 p-4 rounded-lg shadow-sm ion-activatable relative flex items-center gap-4"
          >
            <div class="flex flex-col grow gap-1">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <p class="text-gray-600 text-sm">Sales</p>
                  <p class="text-2xl font-bold">{{ formatMoney(0) }}</p>
                </div>
                <div
                  class="w-14 h-14 flex justify-center items-center bg-sky-50 rounded-full text-3xl"
                >
                  📈
                </div>
              </div>
              <p class="text-sm text-sky-500 font-medium">+5.6% vs last week</p>
            </div>
            <ion-ripple-effect></ion-ripple-effect>
          </div>

          <div
            class="bg-gray-200 p-4 rounded-lg shadow-sm ion-activatable relative flex items-center gap-4"
          >
            <div class="flex flex-col grow gap-1">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <p class="text-gray-600 text-sm">Purchases</p>
                  <p class="text-2xl font-bold">{{ formatMoney(0) }}</p>
                </div>
                <div
                  class="w-14 h-14 flex justify-center items-center bg-sky-50 rounded-full text-3xl"
                >
                  🛒
                </div>
              </div>
              <p class="text-sm text-sky-500 font-medium">+5.6% vs last week</p>
            </div>
            <ion-ripple-effect></ion-ripple-effect>
          </div>

          <div
            class="bg-gray-200 p-4 rounded-lg shadow-sm ion-activatable relative flex items-center gap-4"
          >
            <div class="flex flex-col grow gap-1">
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <p class="text-gray-600 text-sm">Expenses</p>
                  <p class="text-2xl font-bold">{{ formatMoney(0) }}</p>
                </div>
                <div
                  class="w-14 h-14 flex justify-center items-center bg-sky-50 rounded-full text-3xl"
                >
                  💸
                </div>
              </div>
              <p class="text-sm text-sky-500 font-medium">+5.6% vs last week</p>
            </div>
            <ion-ripple-effect></ion-ripple-effect>
          </div>
        </div>
      </div>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Inventory</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-list class="max-h-52 overflow-y-auto">
            <ion-item v-for="i in 100" :key="i">
              <ion-label>{{ i }} Items</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </IonContent>
  </IonPage>
</template>
