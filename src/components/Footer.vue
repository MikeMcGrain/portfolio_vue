<template>
  <footer>
    <v-footer color="primary" app>
      <span id="copyright" class="white--text">&copy; 2019</span>
      <v-spacer></v-spacer>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            @click="openLinkedIn"
            class="icon"
            x-large
            dark
            v-bind="attrs"
            v-on="on"
          >mdi-linkedin</v-icon>
        </template>
        <span>LinkedIn</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            @click="getResume"
            class="icon"
            x-large
            dark
            v-bind="attrs"
            v-on="on"
          >mdi-file account</v-icon>
        </template>
        <span>Resume</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-icon @click="openGitHub" class="icon" x-large dark v-bind="attrs" v-on="on">mdi-github</v-icon>
        </template>
        <span>GitHub</span>
      </v-tooltip>
    </v-footer>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    openLinkedIn() {
      window.open("https://www.linkedin.com/in/michaelmcgrain/", "_blank");
    },
    getResume() {
      window.open("http://mikemcgrain.com:3000/public/resume.pdf", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/mikemcgrain", "_blank");
    }
  }
};
</script>

<style scoped>
.icon {
  margin: 0px 15px;
}

#copyright {
  margin-left: 30px;
}
</style>