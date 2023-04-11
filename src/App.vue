<template>
  <v-app>

    <v-layout>
      <v-main>
        <v-app-bar absolute dense>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

        </v-app-bar>

        <!-- <v-flex class="d-flex flex-column">
          <v-tabs>
            <v-tab key="doc1">Document 1</v-tab>
            <v-tab>Item Two</v-tab>
            <v-tab>Item Three</v-tab>
          </v-tabs>

          <v-tabs-items class="">
            <v-tab-item key="doc1" class="">
              <textarea class="w-100 border"></textarea>
            </v-tab-item>
          </v-tabs-items>
        </v-flex> -->
      </v-main>
    </v-layout>
  </v-app>
</template>

<style lang="scss">
// With custom title bar, we need to make some CSS adjustments
html {
  overflow: auto;
}

#app {
  // height: 100%;
}

textarea {
  resize: none;
  outline: none;
  padding: 1rem;
  color: #fff;
}
</style>
