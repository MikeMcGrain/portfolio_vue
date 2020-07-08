<template>
  <div id="content">
    <div id="item">
      <TwitterApp />
    </div>
    <div id="item">
      <RecRead />
    </div>
    <div id="item">
      <ExpenseTracker />
    </div>
    <div id="item">
      <Snake />
    </div>
    <div id="item">
      <BNC />
    </div>
    <div id="item">
      <Calculator />
    </div>
    <div id="item">
      <QuizComponent />
    </div>
  </div>
</template>

<script>
import BNC from "@/components/BNC";
import Calculator from "@/components/Calculator";
import ExpenseTracker from "@/components/ExpenseTracker";
import QuizComponent from "@/components/QuizComponent";
import RecRead from "@/components/RecRead";
import Snake from "@/components/Snake";
import TwitterApp from "@/components/TwitterApp";

export default {
  name: "work",
  components: {
    BNC,
    Calculator,
    ExpenseTracker,
    QuizComponent,
    RecRead,
    Snake,
    TwitterApp
  }
};
</script>

<style scope>
@media (min-width: 1200px) {
  #content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(200px, auto));
    grid-gap: 25px;
    max-width: 1500px;
    margin: 50px auto 50px;
  }

  #item {
    max-width: 500px;
  }
}

@media (max-width: 1199px) {
  #item {
    margin: 4vw auto;
    width: 95vw;
  }
}
</style>