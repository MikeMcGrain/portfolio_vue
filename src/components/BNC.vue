<template>
  <v-card raised min-height="411px">
    <v-img class="white--text align-end" src="../assets/bnc1.png">
      <v-card-title>Bear, Ninja, Cowboy!</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">JavaScript | HTML | CSS</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>A variation of rock-paper-scissors written with HTML, CSS, and JavaScript (no external libraries or frameworks). In case you are not sure: Bear beats Ninja, Ninja beats Cowboy, and Cowboy beats Bear.</div>
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
  name: "BNC",
  data() {
    return {};
  },
  methods: {
    openDemo() {
      window.open(
        "https://mikemcgrain.github.io/rock_paper_scissors/",
        "_blank"
      );
    },
    openGitHub() {
      window.open(
        "https://github.com/MikeMcGrain/rock_paper_scissors",
        "_blank"
      );
    }
  }
};
</script>

<style scoped>
.button {
  margin-top: 0;
  margin-right: 10px;
}
</style>