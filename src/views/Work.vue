<template>
  <div id="content">
    <div>
      <TwitterApp />
    </div>
    <div>
      <ExpenseTracker />
    </div>
    <div>
      <QuizComponent />
    </div>
    <div>
      <RecRead />
    </div>
  </div>
</template>

<script>
import TwitterApp from "@/components/TwitterApp";
import ExpenseTracker from "@/components/ExpenseTracker";
import QuizComponent from "@/components/QuizComponent";
import RecRead from "@/components/RecRead";

export default {
  name: "work",
  components: {
    TwitterApp,
    QuizComponent,
    ExpenseTracker,
    RecRead
  }
};
</script>

<style scope>
@media (min-width: 1000px) {
  #content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(200px, auto));
    grid-gap: 25px;
    max-width: 1500px;
    margin: 50px auto 50px;
  }
}
</style>