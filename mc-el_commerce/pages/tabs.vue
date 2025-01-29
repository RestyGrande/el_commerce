<template>
  <ion-page>
    <ion-content>
      <Notification />
      <ion-tabs>
        <ion-router-outlet />

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="ioniconsHomeOutline" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="ioniconsReceiptOutline" />
            <ion-label>Invoice</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="ioniconsFileTrayStackedOutline" />
            <ion-label>Inventory</ion-label>
          </ion-tab-button>

          <!-- <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="ioniconsImagesOutline" />
            <ion-label>Photos</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="ioniconsBulbOutline" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab4" href="/tabs/tab4">
            <ion-icon :icon="ioniconsAccessibilityOutline" />
            <ion-label>Animation examples</ion-label>
          </ion-tab-button> -->
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>
