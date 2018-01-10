<template>

</template>

<script>
// IMPORT OTHER COMPONENTS
// import Message from './Message.vue'
// DEMO DATA!!
// import testData from '../../assets/messages.json'

export default {
  mixins: [
    // eslint-disable-next-line
    // TODO: Include Any mixins
  ],
  name: 'dashboard',
  data () {
    return {
      msg: 'This is not the message you were looking for!'
    }
  },
  mounted: function () {
    console.log("CONTEXT : ", this.name, " :: MOUNTED");
    this.initializeSemantic();
  },
  ready: function () {
    console.log("CONTEXT : ", this.name, " :: READY");
    this.initializeSemantic();
  },
  methods: {
    initializeSemantic: function () {
      console.log($(this.$el));
      console.log("INITIALIZING ui.accordions :: ", $(this.$el).find('.ui.accordion') );
      // Update elements to match what is needed by Semantic.js
      $(this.$el).find('.ui.accordion').accordion();
    }
}
}
</script>

<style scoped>

</style>
