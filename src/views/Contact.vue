<template>
  <div class="center">
    <h1>Need a developer for your next project?</h1>
    <br />
    <p>Please feel free to contact me with any questions.</p>
    <br />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "contact",
  components: { ContactForm }
};
</script>

<style scope>
.center {
  margin-top: 4vw;
  text-align: center;
}
</style>