<template>
  <div class="center">
    <h1>Questions or Comments?</h1>
    <br>
    <p>Please contact me via the form and I will reach out to as soon as possible.</p>
    <p>Download my resume <a href="http://mikemcgrain.com:3000/public/resume.pdf" target="_blank">here</a>.</p>
    <br>
    <ContactForm/>
  </div>
</template>

<script>
  import ContactForm from '@/components/ContactForm'

  export default {
    name: 'contact',
    components: { ContactForm }
  }
</script>

<style scope>
 .center {
   text-align: center;
  }
</style>