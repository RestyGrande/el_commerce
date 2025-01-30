<script lang="ts" setup>
import { ref } from "vue";
import { modalController } from "@ionic/vue";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { useFilesystem } from "@/composables/useFilesystem";
import { cameraOutline } from "ionicons/icons";
const noteStore = useNoteStore();

const { savePhotoToFilesystem } = useFilesystem();
const isLoading = ref(false);
const fields: any = ref({
  name: null,
  brand: null,
  productPhoto: null,
  sellingPrices: [],
});

const retailPrice: any = ref<number | null>(null); // Retail price input
const wholesalePrice: any = ref<number | null>(null); // Wholesale price input

const errors = ref({
  name: false,
  brand: false,
});

const cancel = () => modalController.dismiss(null, "cancel");

const confirm = () => {
  // Perform validation
  errors.value.name = !fields.value.name;
  errors.value.brand = !fields.value.brand;

  // If no errors, proceed to dismiss with the form data
  if (!errors.value.name && !errors.value.brand) {
    modalController.dismiss(fields.value, "confirm");
  }
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0]; // Get the selected file

    // Use FileReader to convert file to Base64 URL
    const reader = new FileReader();
    reader.onload = (e) => {
      fields.value.productPhoto = e.target?.result as string; // Save Base64 URL for preview
    };
    reader.readAsDataURL(file);
  }
};

const takePhoto = async () => {
  isLoading.value = true;
  try {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    // const savedPhotoUri = await savePhotoToFilesystem(photo.dataUrl!);
    fields.value.productPhoto = photo.dataUrl;
  } catch (error) {
    console.error("Error capturing photo:", error);
  } finally {
    isLoading.value = false;
  }
};

// Add prices to the sellingPrice array
const addPricesToSellingPrice = () => {
  if (retailPrice.value !== null && wholesalePrice.value !== null) {
    fields.value.sellingPrices.push({
      createdAt: new Date(),
      retailPrice: retailPrice.value,
      wholesalePrice: wholesalePrice.value,
    });
    // Reset inputs after pushing
    retailPrice.value = null;
    wholesalePrice.value = null;
  } else {
    noteStore.addWarn("Please enter both Retail and Wholesale prices!");
  }
};

// Delete a price from the sellingPrice array
const deletePrice = (index: number) => {
  fields.value.sellingPrices.splice(index, 1); // Remove the item at the given index
};
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">Cancel</ion-button>
      </ion-buttons>
      <ion-title>New Product</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="confirm" :strong="true">Confirm</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <form @submit.prevent="confirm">
      <ion-list>
        <ion-item lines="none" class="mb-4">
          <!-- <ion-button expand="block" fill="outline" @click="takePhoto">
            <ion-icon slot="start" :icon="cameraOutline"></ion-icon>
            Take Photo
          </ion-button> -->

          <input type="file" @change="handleFileSelect" />
        </ion-item>

        <ion-item lines="none" v-if="fields.productPhoto" class="mb-4">
          <img
            :src="fields.productPhoto"
            alt="Photo Preview"
            class="w-full rounded-lg"
          />
        </ion-item>

        <ion-item class="mb-4">
          <ion-input
            label-placement="floating"
            label="Name"
            placeholder="Enter product name"
            v-model="fields.name"
            :class="{ 'input-error': errors.name }"
          ></ion-input>
        </ion-item>
        <ion-text v-if="errors.name" color="danger" class="pl-2 text-sm">
          Name is required.
        </ion-text>

        <ion-item class="mt-4 mb-4">
          <ion-input
            label-placement="floating"
            label="Brand"
            placeholder="Enter brand name"
            v-model="fields.brand"
            :class="{ 'input-error': errors.brand }"
          ></ion-input>
        </ion-item>
        <ion-text v-if="errors.brand" color="danger" class="pl-2 text-sm">
          Brand is required.
        </ion-text>
      </ion-list>

      <ion-list class="px-4">
        <ion-item-group class="py-4">
          <ion-item-divider>
            <ion-label>Selling Price</ion-label>
          </ion-item-divider>
          <ion-item v-if="fields.sellingPrices.length === 0">
            <ion-label>No Selling Prices</ion-label>
          </ion-item>
          <ion-item
            v-else
            v-for="(price, index) in fields.sellingPrices.reverse()"
            :key="index"
          >
            <div>
              <p class="text-sm">Date: {{ formatDate(price.createdAt) }}</p>
              <div class="flex gap-4">
                <p class="font-semibold">
                  <span class="text-sm pr-1 font-normal">RP:</span>
                  {{ formatMoney(price.retailPrice) }}
                </p>
                <p class="font-semibold">
                  <span class="text-sm pr-1 font-normal">WP:</span
                  >{{ formatMoney(price.wholesalePrice) }}
                </p>
              </div>
            </div>
            <ion-button color="danger" @click="deletePrice(index)" slot="end"
              >Delete</ion-button
            >
          </ion-item>
        </ion-item-group>
        <ion-item-group lines="none">
          <ion-item-divider>
            <ion-label>Selling Price Form</ion-label>
          </ion-item-divider>
          <ion-item lines="none" class="mb-4">
            <ion-input
              v-model="retailPrice"
              label="Retail Price"
              label-placement="floating"
              type="number"
              placeholder="000"
            ></ion-input>
            <ion-input
              v-model="wholesalePrice"
              label="Wholesale Price"
              label-placement="floating"
              type="number"
              placeholder="000"
            ></ion-input>
          </ion-item>

          <ion-button expand="block" @click="addPricesToSellingPrice">
            Add to Selling Price
          </ion-button>
        </ion-item-group>
      </ion-list>

      <!-- <ion-list>

        <ion-item v-for="(price, index) in fields.sellingPrice" :key="index">
          <div>
            <p>Retail: {{ price.retailPrice }}</p>
            <p>Wholesale: {{ price.wholesalePrice }}</p>
          </div>
          <ion-button color="danger" @click="deletePrice(index)"
            >Delete</ion-button
          >
        </ion-item>
      </ion-list> -->
    </form>
  </ion-content>
</template>

<style>
.input-error {
  border-color: red;
  --ion-color-base: #f8d7da;
}
</style>
