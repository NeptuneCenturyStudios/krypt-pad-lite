<template>

  <v-app>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" to="/">
          <v-icon right dark>
            mdi-home
          </v-icon>
          Home
        </v-btn>
        
        <v-btn variant="text" to="/about">
          <v-icon right dark>
            mdi-information-outline
          </v-icon>
          About
        </v-btn>

      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
