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

export default {
  data() {
    return {
      comment: null,
    };
  },
  computed: {
    ...mapGetters(['isShowCommentModal']),
  },
  methods: {
    ...mapMutations(['showCommentModal']),
    ...mapActions(['addPost']),
    add() {
      this.addPost(this.comment);
      this.showCommentModal();
      this.comment = null;
    }
  },
};
</script>
