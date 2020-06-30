<template>
  <div class="shortcuts">
    <router-link to="/home">
      <font-awesome-icon icon="home" />
      <span>Home</span>
    </router-link>
    <router-link :to="{ path: `/profile/${nickname}`, query: { id: userId } }">
      <font-awesome-icon icon="user" />Profile
    </router-link>
    <router-link :to="{ path: `/setting/${nickname}`, query: { id: userId } }">
      <font-awesome-icon icon="cog" />Setting
    </router-link>
    <button-post-share :show="showCommentModal"></button-post-share>
  </div>
</template>

<script>
import { ButtonPostShare } from "../components";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ButtonPostShare
  },
  props: {
    showCommentModal: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
    nickname() {
      return this.userInfo.nickname;
    },
    userId() {
      return this.userInfo._id;
    }
  }
};
</script>
