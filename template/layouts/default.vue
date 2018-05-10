<template lang="pug">
.container
  .row
    h1 FINPO nuxt starter
  nuxt
  my-footer
</template>

<script>
import MyFooter from '~/components/Footer.vue';

export default {
  components: {
    MyFooter,
  },
};
</script>

<style lang="stylus">

</style>
