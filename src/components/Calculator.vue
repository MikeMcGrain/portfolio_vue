<template>
  <v-card raised>
    <v-img class="white--text align-end" src="../assets/calculator.png">
      <v-card-title>JS Calculator</v-card-title>
    </v-img>

    <v-card-subtitle
      class="pb-0"
    >A calculator application written with HTML, CSS, and pure JavaScript (no external libraries or frameworks).</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        The logic involved with this was quite challenging. I'm still sure there is room for improvement.
        There are only few ways to break this, but one needs to try pretty hard. This was also the first time I've used CSS Grid to layout a
        project. I'm looking forward to using this again in the future.
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="openDemo">Try</v-btn>

      <v-btn @click="openGitHub">Code</v-btn>
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
      window.open("https://github.com/MikeMcGrain/calculator", "_blank");
    },
    openGitHub() {
      window.open("https://mikemcgrain.github.io/calculator/", "_blank");
    }
  }
};
</script>