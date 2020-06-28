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
import { SHOW_COMMENT_MODAL } from '../../store/types/mutations.type';
import { GET_USER, GET_POSTS } from '../../store/types/actions.type';

export default {
  components: {
    CommentModal,
    Post,
    Shortcuts,
  },
  computed: {
    ...mapGetters(['isShowCommentModal', 'posts']),
  },
  methods: {
    ...mapMutations([SHOW_COMMENT_MODAL]),
    ...mapActions([GET_USER, GET_POSTS]),
  },
  created() {
    this.getUser();
    this.getPosts();
  },
  mounted() {},
};
</script>
