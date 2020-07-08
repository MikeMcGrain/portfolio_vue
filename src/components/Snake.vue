<template>
  <v-card raised min-height="410px">
    <v-img class="white--text align-end" src="../assets/snake.png">
      <v-card-title>Snake!</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">HTML Canvas | JavaScript | CSS Flex</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>A snake game written with HTML Canvas, CSS, and JavaScript (no external libraries or frameworks)</div>
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
  name: "Snake",
  data() {
    return {};
  },
  methods: {
    openDemo() {
      window.open("https://mikemcgrain.github.io/snake_game/", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/MikeMcGrain/snake_game", "_blank");
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