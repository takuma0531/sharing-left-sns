<template>
  <div class="shortcuts">
    <router-link to="/home" class="shortcut">
      <font-awesome-icon icon="home" />
      <span>Home</span>
    </router-link>
    <router-link :to="{ path: `/profile/${nickname}`, query: { id: userId } }" class="shortcut">
      <font-awesome-icon icon="user" />
      <span>Profile</span>
    </router-link>
    <router-link :to="{ path: `/setting/${nickname}`, query: { id: userId } }" class="shortcut">
      <font-awesome-icon icon="cog" />
      <span>Setting</span>
    </router-link>
    <button-post-share :show="showCommentModal" class="shortcut"></button-post-share>
  </div>
</template>

<script>
import { ButtonPostShare } from "../components";
import { mapGetters, mapMutations } from "vuex";
import { SHOW_COMMENT_MODAL } from "../store/types/mutations.type.js";

export default {
  components: {
    ButtonPostShare
  },
  computed: {
    ...mapGetters(["userInfo"]),
    nickname() {
      return this.userInfo.nickname;
    },
    userId() {
      return this.userInfo._id;
    }
  },
  methods: {
    ...mapMutations([SHOW_COMMENT_MODAL])
  }
};
</script>
