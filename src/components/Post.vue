<template>
  <div class="post">
    <div class="post-left">
      <div class="avatar">
        <router-link
          :to="{
        path: `/profile/${nickname}`,
        query: { id: posterId },
      }"
        >
          <img
            src="@/assets/blank-profile-picture-973460_640.jpg"
            style="width: 40px; border-radius: 50%;"
          />
        </router-link>
      </div>
    </div>
    <div class="post-right">
      <div class="user-name">
        <router-link
          :to="{
        path: `/profile/${nickname}`,
        query: { id: posterId },
          }"
        >
          <span>{{ nickname }}</span>
        </router-link>
      </div>
      <div class="content">{{ post.content }}</div>
      <div class="additional-func">
        <div v-if="userId === posterId" class="delete-btn">
          <button @click="deletePost(post._id)">Delete</button>
        </div>
      </div>
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
      if (!this.post._poster._id) return this.post._poster;
      return this.post._poster._id;
    }
  },
  methods: {
    ...mapActions(["deletePost"])
  }
};
</script>
