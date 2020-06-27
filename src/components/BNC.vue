<template>
  <v-card raised max-width="500">
    <v-img class="white--text align-end" src="../assets/bnc1.png">
      <v-card-title>Bear, Ninja, Cowboy!</v-card-title>
    </v-img>

    <v-card-subtitle
      class="pb-0"
    >A snake game written with HTML Canvas, CSS, and JavaScript (no external libraries or frameworks).</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>This was my first dive into graphics programming. Although a bit tedious at first, I can see the possiblities.  The movement of the snake body was certainly the most challeging part of this game. It took me some time to translate "follow the body part in front of you" into a JavaScript algorithm. There are a few more tweaks that I think could make the game-play a little more interestesing; but, for now, it's fun to just gulp up a few mice.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="openDemo">Try</v-btn>

      <v-btn @click="openGitHub">Code</v-btn>
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
      window.open("https://mikemcgrain.github.io/rock_paper_scissors/", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/MikeMcGrain/rock_paper_scissors", "_blank");
    }
  }
};
</script>