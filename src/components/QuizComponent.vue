<template>
  <v-card raised min-height="180px">
        <v-img class="white--text align-end" src="../assets/compScienceQuiz.png">
    </v-img>

    <v-card-subtitle
      class="pb-0"
    >Computer science questions pulled from OpenTBD.com API</v-card-subtitle>

    <!-- <v-card-text>OpenTBD.com API</v-card-text> -->
    <v-card-actions v-if="introStage">
      <v-btn @click="startQuiz">Start</v-btn>
    </v-card-actions>

    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <div v-if="questionStage">
          <v-card-title>{{ question }}</v-card-title>
          <v-list>
            <v-list-item v-for="(answer, index) in answers" :key="index">
              <v-btn
                @click="checkAnswer(index)"
                :class="styleSelectedAnswer(index)"
                :disabled="answerBtnDisabled"
                block
                tile
                outlined
                x-large
              >{{ answer }}</v-btn>
            </v-list-item>
          </v-list>

          <v-btn @click="nextQuestion" :disabled="nextBtnDisabled">Next Question</v-btn>
        </div>

        <div v-if="resultStage">
          <v-card-title class="primary white--text">Quiz Results</v-card-title>
          <v-card-text>You answered {{ numCorrect }} of {{ allQandA.length }} questions correctly.</v-card-text>
          <v-card-actions>
            <v-btn @click="playAgain">Done</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";
const shuffle = require("shuffle-array");

export default {
  name: "QuizComponent",
  data() {
    return {
      title: "Computer Science Quiz",
      introStage: true,
      questionStage: false,
      resultStage: false,
      allQandA: [],
      i: 0,
      question: "",
      answers: [],
      selectedIndex: null,
      correctIndex: null,
      incorrectIndex: null,
      numCorrect: 0,
      nextBtnDisabled: true,
      answerBtnDisabled: false,
      errored: false,
      dialog: false
    };
  },
  methods: {
    startQuiz() {
      this.getShuffleAndClean();
      this.dialog = true;
      this.introStage = false;
      this.questionStage = true;
    },
    checkAnswer(index) {
      this.nextBtnDisabled = false;
      this.answerBtnDisabled = true;
      this.selectedIndex = index;

      if (this.answers[index] === this.allQandA[this.i].correct_answer) {
        this.correctIndex = index;
        this.numCorrect += 1;
      } else {
        this.incorrectIndex = index;
      }
    },
    styleSelectedAnswer(index) {
      let classValue = "";

      if (
        this.selectedIndex != null &&
        index !== this.selectedIndex &&
        this.answers[index] === this.allQandA[this.i].correct_answer
      ) {
        classValue = "correct-answer";
        return classValue;
      }
      if (this.selectedIndex === index && this.correctIndex === index) {
        classValue = "correct-answer";
        return classValue;
      }

      if (this.selectedIndex === index && this.incorrectIndex === index) {
        classValue = "incorrect-answer";
        return classValue;
      }
    },
    nextQuestion() {
      this.answerBtnDisabled = false;
      this.nextBtnDisabled = true;
      this.correctIndex = null;
      this.incorrectIndex = null;
      this.selectedIndex = null;

      if (this.i == this.allQandA.length - 1) {
        this.resultStage = true;
        this.questionStage = false;
      } else {
        this.i += 1;
        this.getShuffleAndClean();
      }
    },
    getShuffleAndClean() {
      const s1 = /&quot;/gi;
      const s2 = /#&quot;/gi;
      const s3 = /&#039;/gi;
      const s4 = /&LT;/gi;
      const s5 = /&GT;/gi;

      //clean the current question
      this.question = this.allQandA[this.i].question.replace(s1, "'");
      this.question = this.question.replace(s2, '"');
      this.question = this.question.replace(s3, "'");
      this.question = this.question.replace(s4, "<");
      this.question = this.question.replace(s5, ">");

      //get, clean, and shuffle the current answers
      let dirtyAnswers = [
        ...this.allQandA[this.i].incorrect_answers,
        this.allQandA[this.i].correct_answer
      ];
      shuffle(dirtyAnswers);

      this.answers = [];
      dirtyAnswers.forEach(item => {
        let cleanAnswers = item.replace(s1, "'");
        cleanAnswers = cleanAnswers.replace(s2, '"');
        cleanAnswers = cleanAnswers.replace(s3, "'");
        cleanAnswers = cleanAnswers.replace(s4, "<");
        cleanAnswers = cleanAnswers.replace(s5, ">");
        this.answers.push(cleanAnswers);
      });
    },
    playAgain() {
      this.answerBtnDisabled = false;
      this.numCorrect = 0;
      this.i = 0;
      axios
        .get(
          "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
        )
        .then(response => (this.allQandA = response.data.results));

      this.dialog = false;
      this.resultStage = false;
      this.introStage = true;
    }
  },
  mounted: function() {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
      )
      .then(response => (this.allQandA = response.data.results))
      .catch(err => console.log(err));
  }
};
</script>

<style scope>
.correct-answer {
  color: black;
  font-size: 1.5rem;
  background-color: rgb(60, 131, 60);
  pointer-events: none;
}

.incorrect-answer {
  color: black;
  font-size: 1.4rem;
  background-color: rgb(224, 95, 95);
  pointer-events: none;
}
</style>