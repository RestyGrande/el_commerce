<script setup>
import { arrowBackOutline, add } from "ionicons/icons";
import { useProductStore } from "~/stores/products.store";
import ProductForm from "@/components/product/Form.vue";

const productStore = useProductStore();
const noteStore = useNoteStore();

const removeProduct = async (id) => {
  if (confirm("Are you sure you want to delete this product?")) {
    await productStore.remove(id);
  }
};

const addProduct = async () => {
  const modal = await modalController.create({
    component: ProductForm,
  });

  modal.present();

  const { data: product, role } = await modal.onWillDismiss();

  if (role === "confirm") {
    try {
      await productStore.add({
        ...product,
      });

      noteStore.addSuccess(`Product ${product.name} added successfully!`);
    } catch (err) {
      noteStore.addError(`Error adding product ${product.name} : ${err}`);
    }
  }
};

onMounted(async () => {
  await productStore.load();
});
</script>

<template>
  <IonPage>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-icon
            :icon="arrowBackOutline"
            class="text-3xl text-gray-600"
            @click="$router.back()"
          ></ion-icon>
        </ion-buttons>
        <ion-title>Products</ion-title>
      </ion-toolbar>
    </ion-header>

    <IonContent :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Products</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button @click="addProduct">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-list>
        <ion-item-sliding v-for="(product, index) in productStore.state">
          <ion-item>
            <div class="w-24 h-24 md:w-48 md:h-48" slot="start">
              <img
                alt="productPhoto"
                :src="product?.productPhoto"
                class="object-contains"
              />
            </div>

            <div class="flex flex-col w-full">
              <h4>{{ product.name }}</h4>

              <ion-badge v-if="product.brand" class="w-fit mb-2">{{
                product.brand
              }}</ion-badge>
              <div class="flex gap-1">
                <h5 v-if="product.retailPrice" class="grow w-fit font-bold">
                  <span class="text-sm pr-1 font-normal">RT</span
                  >{{ product.retailPrice }}
                </h5>
                <h5 v-if="product.wholesalePrice" class="w-fit font-bold">
                  <span class="text-sm pr-1 font-normal">WP</span
                  >{{ product.wholesalePrice }}
                </h5>
              </div>
            </div>
          </ion-item>

          <ion-item-options>
            <ion-item-option
              color="danger"
              class="text-white"
              @click="removeProduct(product._id)"
              >Delete</ion-item-option
            >
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </IonContent>
  </IonPage>
</template>
