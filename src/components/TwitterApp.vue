<template>
  <v-card raised min-height="410px">
    <v-img class="white--text align-end" src="../assets/twitterApp1.png">
      <v-card-title>Tweet Find</v-card-title>
    </v-img>
    <v-card-subtitle>React | React-Bootstrap | Node | Express | OAuth</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>A SPA that allows users to search recent tweets by username or topic.</div>
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
  name: "TwitterApp",
  data() {
    return {};
  },
  methods: {
    openDemo() {
      window.open("https://tweet-find.herokuapp.com/", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/MikeMcGrain/tweet_find", "_blank");
    }
  }
};
</script>

<style scoped>
.button {
  margin-top: 15%;
  margin-right: 10px;
}
</style>