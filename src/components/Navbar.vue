<template>
  <nav>
    <v-app-bar app class="primary">
      <router-link to="/">
        <v-toolbar-title class="headline white--text">
          <span>MikeMcGrain</span>
          <span class="font-weight-light">.com</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn-toggle mandatory>
        <router-link to="/">
          <v-btn large class="hidden-sm-and-down">About</v-btn>
        </router-link>
        <router-link to="/work">
          <v-btn large class="hidden-sm-and-down">Demo</v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn large class="hidden-sm-and-down">Contact</v-btn>
        </router-link>
      </v-btn-toggle>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      right
      disable-resize-watcher
      app
      temporary
      color="blue-grey lighten-5"
    >
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-information", text: "About", route: "/" },
        { icon: "mdi-wrench", text: "Demo", route: "/work" },
        { icon: "mdi-email", text: "Contact", route: "/contact" }
      ]
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>