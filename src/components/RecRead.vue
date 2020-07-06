<template>
  <v-card raised min-height="180px">
    <!-- <v-card-title>Recommended Reading List</v-card-title> -->
    <v-img class="white--text align-end" src="../assets/books.jpeg">
      <v-card-title>Recommended Reading</v-card-title>
    </v-img>

    <v-card-subtitle
      class="pb-0"
      >A CRUD component written to manipulate a MongoDB of books.
    </v-card-subtitle>
    <v-card-text>This component connects to a MongoDB database on Atlas.com. CRUD operations are performed via an Express API.</v-card-text>

    <v-expansion-panels v-model="panel">
      <v-expansion-panel>
        <v-expansion-panel-header>Click to view book list</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item v-for="(book, index) in allBooks" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ book.title }} by {{ book.author }}</v-list-item-title>
                <v-list-item-subtitle>{{book.category}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-btn icon @click="openBookEditForm(index)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="deleteBook(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item>

            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  @click.stop="openNewBookForm"
                  v-on="on"
                  fab
                  absolute
                  bottom
                  right
                  color="primary"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>Add book</span>
            </v-tooltip>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="primary white--text">Add a book to the list</v-card-title>
        <v-form class="px-12" ref="form">
          <v-text-field label="Title" v-model="title" :rules="titleRules"></v-text-field>
          <v-text-field label="Author" v-model="author" :rules="authorRules"></v-text-field>
          <v-text-field label="Category" v-model="category" :rules="categoryRules"></v-text-field>
          <v-btn @click="submitNewBook" mt-3>Submit</v-btn>
          <v-btn @click="resetForm" mt-3 small>Reset Form</v-btn>
        </v-form>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="dialog=false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" max-width="600">
      <v-card>
        <v-card-title class="primary white--text">Change book info</v-card-title>
        <v-form class="px-12" ref="form2">
          <v-text-field label="Change title to:" v-model="title" :rules="titleRules"></v-text-field>
          <v-text-field label="Change author to:" v-model="author" :rules="authorRules"></v-text-field>
          <v-text-field label="Change category to:" v-model="category" :rules="categoryRules"></v-text-field>
          <v-btn @click="submitBookEdit" mt-3>Submit</v-btn>
          <v-btn @click="resetForm" mt-3 small>Reset Form</v-btn>
        </v-form>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="dialog2=false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "RecRead",
  data() {
    return {
      title: "",
      author: "",
      category: "",
      allBooks: [],
      titleRules: [v => !!v || "Title is required"],
      authorRules: [v => !!v || "Author is required"],
      categoryRules: [v => !!v || "Category is required"],
      dialog: false,
      dialog2: false,
      bookID: "",
      panel: true
    };
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
      this.$refs.form2.reset();
    },
    openNewBookForm() {
      if (this.title != "") {
        this.resetForm();
      }
      this.dialog = true;
    },
    submitNewBook() {
      if (this.$refs.form.validate()) {
        axios
          .post("http://mikemcgrain.com:3000/books", {
            title: this.title,
            author: this.author,
            category: this.category
          })
          .then(() => {
            axios.get("http://mikemcgrain.com:3000/books").then(res => {
              this.allBooks = res.data;
            });
          });
        this.dialog = false;
      }
    },
    openBookEditForm(index) {
      this.dialog2 = true;
      (this.title = this.allBooks[index].title),
        (this.author = this.allBooks[index].author),
        (this.category = this.allBooks[index].category);
      this.bookID = this.allBooks[index]._id;
    },
    submitBookEdit() {
      if (this.$refs.form2.validate()) {
        axios
          .put("http://mikemcgrain.com:3000/books/" + this.bookID, {
            title: this.title,
            author: this.author,
            category: this.category
          })
          .then(() => {
            axios.get("http://mikemcgrain.com:3000/books").then(res => {
              this.allBooks = res.data;
            });
          });

        this.dialog2 = false;
      }
    },
    deleteBook(index) {
      axios
        .delete(`http://159.65.231.85:3000/books/${this.allBooks[index]._id}`)
        .then(() => {
          axios.get("http://mikemcgrain.com:3000/books").then(res => {
            this.allBooks = res.data;
          });
        });
    }
  },
  mounted: function() {
    axios.get("http://mikemcgrain.com:3000/books").then(res => {
      this.allBooks = res.data;
    });
  }
};
</script>