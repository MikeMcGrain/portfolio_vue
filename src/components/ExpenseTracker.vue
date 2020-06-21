<template>
  <v-card raised max-width="500">
    <v-img class="white--text align-end" src="../assets/expenseTracker1.png">
      <v-card-title>React Expense Tracker</v-card-title>
    </v-img>

    <v-card-subtitle
      class="pb-0"
    >A simple expense tracker created using React and React-Bootstrap.</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>It is true what they say: "React will make you a better JavaScripter". I've enjoyed using it, as well as Hooks and Context, to build this app. I'm looking forward to using it again in my next project.

Bootstrap is a very convenient way to quickly make a presentable UI; however, I wish there were a way to use it without mucking up the markup so much.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="openDemo">Try</v-btn>

      <v-btn @click="openGitHub">Code</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ExpenseTracker",
  data() {
    return {}
  },
  methods: {
    openDemo() {
      window.open("https://react-expensetracker.herokuapp.com/", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/MikeMcGrain/expense_tracker", "_blank")
    }
  }
};
</script>