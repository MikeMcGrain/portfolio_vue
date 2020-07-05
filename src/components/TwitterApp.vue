<template>
  <v-card raised>
    <v-img class="white--text align-end" src="../assets/twitterApp1.png">
      <v-card-title>Tweet Find</v-card-title>
    </v-img>

    <v-card-subtitle
      class="pb-0"
    >An SPA that allows users to search recent tweets by username or topic.</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>I made a conscious effort to take full advantage of tools like npm, concurrently, nodemon, and watch-build during devolopment. Digging through the TwitterAPI docs was certainly the most grueling part of this project; but, seeing all those connections come together, from front to back, is always worth it.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="openDemo">Try</v-btn>

      <v-btn @click="openGitHub">Code</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "TwitterApp",
  data() {
    return {}
  },
  methods: {
    openDemo() {
      window.open("https://tweet-find.herokuapp.com/", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/MikeMcGrain/tweet_find", "_blank")
    }
  }
};
</script>