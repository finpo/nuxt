{{{{raw}}}}
<template lang="pug">
section.container
  img.logo(src="../assets/img/logo.png", alt="Nuxt.js Logo")
  h1.title This page is loaded from the {{ name }}
  nuxt-link.button(to="/") Home Page
</template>
{{{{/raw}}}}

<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`,
    };
  },
};
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
