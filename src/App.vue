<template>
  <div id="app">
    <the-nav-bar></the-nav-bar>
    <section class="container">
      <router-view />
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script>
import { TheFooter, TheNavBar } from "@/components";

export default {
  components: {
    TheFooter,
    TheNavBar
  },
  mounted() {}
};
</script>
