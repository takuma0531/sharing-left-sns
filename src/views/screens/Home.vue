<template>
  <div class="home">
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="isShowCommentModal"
        @click="showCommentModal"
      ></div>
    </transition>

    <comment-modal />

    <shortcuts />

    <div class="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
import { CommentModal, Post, Shortcuts } from '../../components';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    CommentModal,
    Post,
    Shortcuts,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['isShowCommentModal', 'posts']),
  },
  methods: {
    ...mapMutations(['showCommentModal']),
    ...mapActions(['getUser', 'getPosts']),
  },
  created() {
    this.getUser();
    this.getPosts();
  },
  mounted() {},
};
</script>
