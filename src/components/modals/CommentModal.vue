<template>
  <div class="comment-modal" v-if="isShowCommentModal">
    <transition name="slide" appear>
      <div class="modal">
        <form @submit.prevent @submit="add">
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Share what you lost here..."
            v-model="comment"
          />
          <input type="submit" value="Share" />
        </form>
        <button class="button" @click="showCommentModal">
          Close
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { SHOW_COMMENT_MODAL } from '../../store/types/mutations.type';
import { ADD_POST } from '../../store/types/actions.type';

export default {
  props: {
    isShowCommentModal: {
      type: Boolean,
      required: true,
    },
    showCommentModal: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      comment: null,
    };
  },
  methods: {
    ...mapActions(['addPost']),
    add() {
      this.addPost(this.comment);
      this.showCommentModal();
      this.comment = null;
    },
  },
};
</script>
