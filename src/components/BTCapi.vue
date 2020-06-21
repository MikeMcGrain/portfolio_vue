<template>
  <v-card raised min-height="180px">
    <v-card-title class="align-end fill-height">{{ title }}</v-card-title>
    <v-card-text>Coindesk API, returns BTC prices</v-card-text>
    <v-card-actions>
      <v-btn @click.stop="getPrice">Get BTC Price</v-btn>
    </v-card-actions>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="primary white--text">Current BTC Prices</v-card-title>
        <div v-for="(currency, index) in info" :key="index">
          {{ currency.description + ': ' }}
          <span v-html="currency.symbol"></span>
          {{ currency.rate_float | currencydecimal }}
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog=false">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "BTCapi",
  data() {
    return {
      title: "Bitcoin Price Index",
      info: null,
      dialog: false
    };
  },
  methods: {
    getPrice() {
      this.dialog = true;
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => (this.info = response.data.bpi))
        .catch(error => console.log(error));
    }
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  }
};
</script>