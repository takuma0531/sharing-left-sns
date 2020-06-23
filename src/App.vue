<template>
  <div id="app">
    <NavBar />
    <section class="container">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script>
import { Footer, NavBar } from '@/components';

export default {
  components: {
    Footer,
    NavBar,
  },
  mounted() {
    this.$store.dispatch('registerUser');
    // this.$store.dispatch('loginUser');
  },
};
</script>
