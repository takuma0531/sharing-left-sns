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
import { Footer, NavBar } from "@/components";

export default {
  components: {
    Footer,
    NavBar
  },
};
</script>
