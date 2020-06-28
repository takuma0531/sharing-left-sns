<template>
  <div class="shortcuts">
    <router-link to="/home">
      <font-awesome-icon icon="home" />
      <span>
        Home
      </span>
    </router-link>
    <router-link
      :to="{ path: `/profile/${nickname}`, query: { id: userId } }"
    >
      <font-awesome-icon icon="user" />
      Profile
    </router-link>
    <button class="comment-btn" @click="showCommentModal">
      Share what you left
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { SHOW_COMMENT_MODAL } from '../store/types/mutations.type';

export default {
  computed: {
    ...mapGetters(['userInfo']),
    nickname() {
      return this.userInfo.nickname;
    },
    userId() {
      return this.userInfo._id;
    },
  },
  methods: {
    ...mapMutations(['showCommentModal']),
  },
};
</script>
