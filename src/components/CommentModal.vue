<template>
  <div class="comment-modal" v-if="isShowCommentModal">
    <transition name="slide" appear>
      <div class="modal">
        <form @submit.prevent>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Share what you lost here..."
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
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isShowCommentModal']),
  },
  methods: {
    ...mapMutations(['showCommentModal']),
  },
};
</script>
