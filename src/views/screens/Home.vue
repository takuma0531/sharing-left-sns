<template>
  <div class="home">
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="isShowCommentModal"
        @click="showCommentModal"
      ></div>
    </transition>

    <comment-modal
      :showCommentModal="showCommentModal"
      :isShowCommentModal="isShowCommentModal"
    />

    <shortcuts :showCommentModal="showCommentModal" />
    <div class="posts" v-if="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
import { CommentModal, Post, Shortcuts } from '../../components';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { GET_USER, GET_POSTS } from '../../store/types/actions.type';

export default {
  components: {
    CommentModal,
    Post,
    Shortcuts,
  },
  data() {
    return {
      isShowCommentModal: false,
    };
  },
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    ...mapActions([GET_USER, GET_POSTS]),
    showCommentModal() {
      this.isShowCommentModal = !this.isShowCommentModal;
    },
  },
  created() {
    this.getUser();
    this.getPosts();
  },
  mounted() {},
};
</script>
