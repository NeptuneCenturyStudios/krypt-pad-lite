<template>

  <v-app>
    <v-layout>
      <v-app-bar absolute dense>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

      </v-app-bar>



      <v-main style="margin-bottom:30px;">
        <v-flex class="d-flex flex-column h-100">
          <v-tabs>
            <v-tab key="doc1">Document 1</v-tab>
            <v-tab>Item Two</v-tab>
            <v-tab>Item Three</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab" class="flex-grow-1">
            <v-tab-item key="doc1" class="h-100">
              <textarea class="w-100 h-100"></textarea>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
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
  height: 100%;
}

textarea {
  resize: none;
  outline: none;
  padding: 1rem;
  color: #fff;
}
</style>
