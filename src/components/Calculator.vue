<template>
  <v-card raised min-height="456px">
    <v-img class="white--text align-end" src="../assets/calculator.png">
      <v-card-title>JS Calculator</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">JavaScript | HTML | CSS Grid</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>A calculator application written with HTML, CSS, and pure JavaScript (no external libraries or frameworks).</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="button" @click="openDemo">Demo</v-btn>
      <v-btn class="button" @click="openGitHub">Code</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {};
  },
  methods: {
    openDemo() {
      window.open("https://mikemcgrain.github.io/calculator/", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/MikeMcGrain/calculator", "_blank");
    }
  }
};
</script>

<style scoped>
.button {
  margin-top: 5%;
  margin-right: 10px;
}
</style>