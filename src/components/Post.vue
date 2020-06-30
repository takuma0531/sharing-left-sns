<template>
  <div class="post">
    <router-link
      :to="{
        path: `/profile/${nickname}`,
        query: { id: posterId },
      }"
    >Nickname: {{ nickname }}</router-link>
    <br />
    Post Content: {{ post.content }}
    <div v-if="userId === posterId">
      <button @click="deletePost(post._id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  props: {
    post: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
    userId() {
      return this.userInfo._id;
    },
    nickname() {
      return this.post._poster.nickname;
    },
    posterId() {
      return this.post._poster._id;
    }
  },
  methods: {
    ...mapActions(["deletePost"])
  }
};
</script>
