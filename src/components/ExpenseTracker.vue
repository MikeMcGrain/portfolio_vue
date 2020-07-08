<template>
  <v-card raised min-height="410px">
    <v-img class="white--text align-end" src="../assets/expenseTracker1.png">
      <v-card-title>React Expense Tracker</v-card-title>
    </v-img>
    <v-card-title>Expense Tracker</v-card-title>
    <v-card-subtitle class="pb-0">React | React-Bootstrap</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>A simple expense tracker created using React and React-Bootstrap.</div>
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
  name: "ExpenseTracker",
  data() {
    return {};
  },
  methods: {
    openDemo() {
      window.open("https://react-expensetracker.herokuapp.com/", "_blank");
    },
    openGitHub() {
      window.open("https://github.com/MikeMcGrain/expense_tracker", "_blank");
    }
  }
};
</script>

<style scoped>
.button {
  margin-top: 20%;
  margin-right: 10px;
}
</style>