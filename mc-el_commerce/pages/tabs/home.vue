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
    <IonContent :fullscreen="true" class="ion-padding">
      <h1 class="text-center">
        Welcome to <span class="font-bold"> El Frozen Goods</span>
      </h1>
      <div class="flex">
        <NuxtLink to="/tabs/products">
          <ion-card class="relative ion-activatable">
            <ion-card-header class="text-center">
              <ion-card-title>{{ productStore.count }}</ion-card-title>
              <ion-card-subtitle>Products</ion-card-subtitle>
            </ion-card-header>
            <ion-ripple-effect></ion-ripple-effect>
          </ion-card>
        </NuxtLink>
      </div>
    </IonContent>
  </IonPage>
</template>
