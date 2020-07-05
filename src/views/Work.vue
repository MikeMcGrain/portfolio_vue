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
import TwitterApp from "@/components/TwitterApp";
import ExpenseTracker from "@/components/ExpenseTracker";
import Snake from "@/components/Snake";
import Calculator from "@/components/Calculator";
import QuizComponent from "@/components/QuizComponent";
import RecRead from "@/components/RecRead";
import BNC from "@/components/BNC";

export default {
  name: "work",
  components: {
    TwitterApp,
    ExpenseTracker,
    Snake,
    Calculator,
    QuizComponent,
    RecRead,
    BNC
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