<template>
  <div class="home">
    <section class="posts" v-if="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </section>
    <section class="welcome-message" v-if="posts.length === 0">
      <h1>Enjoy sharing what you left!!</h1>
    </section>
  </div>
</template>

<script>
import { ModalComment, Post } from "../../components";
import { mapGetters, mapActions } from "vuex";
import { GET_USER, GET_POSTS } from "../../store/types/actions.type";

export default {
  components: {
    ModalComment,
    Post
  },
  computed: {
    ...mapGetters(["posts"])
  },
  methods: {
    ...mapActions([GET_POSTS])
  },
  async created() {
    await this.getPosts();
  }
};
</script>
