<template>
  <div class="home">
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="isShowCommentModal"
        @click="showCommentModal"
      ></div>
    </transition>

    <modal-comment
      :showCommentModal="showCommentModal"
      :isShowCommentModal="isShowCommentModal"
    ></modal-comment>

    <shortcuts :showCommentModal="showCommentModal" />
    <div class="posts" v-if="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
import { ModalComment, Post, Shortcuts } from '../../components';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { GET_USER, GET_POSTS } from '../../store/types/actions.type';

export default {
  components: {
    ModalComment,
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
