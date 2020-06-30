<template>
  <div class="home">
    <section class="posts" v-if="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
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
    ...mapActions([GET_USER, GET_POSTS])
  },
  created() {
    this.getUser();
    this.getPosts();
  }
};
</script>
