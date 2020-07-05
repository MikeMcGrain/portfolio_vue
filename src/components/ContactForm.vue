<template>
  <v-card class="mx-auto" max-width="800px">
    <v-form class="px-12" ref="form">
      <v-text-field label="Name" v-model="name" :rules="nameRules"></v-text-field>
      <v-text-field label="Email" v-model="email" prepend-icon="mdi-email" :rules="emailRules"></v-text-field>
      <v-text-field label="Phone" v-model="phone" prepend-icon="mdi-cellphone"></v-text-field>
      <v-textarea label="Message" v-model="message" prepend-icon="mdi-pencil"></v-textarea>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="submit" mt-3>Send</v-btn>
      </v-card-actions>
    </v-form>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="primary white--text">Thank you for the message!</v-card-title>
        <v-card-content>I will contact you as soon as possible.</v-card-content>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog=false">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

 <script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: null,
      message: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 15 || "Name must be less then 15 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        axios({
          method: "POST",
          url: "http://159.65.231.85:3000/message",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            accept: "application/json"
          },
          data: {
            from: { email: this.email, name: this.name },
            content: [
              { type: "text/plain", value: this.message, phone: this.phone }
            ]
          }
        })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });

        this.dialog = true;
        this.$refs.form.reset();
      }
    }
  }
};
</script>