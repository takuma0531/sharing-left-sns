<template>
  <div class="post">
    <router-link
      :to="{
        path: `/profile/${nickname}`,
        query: { id: userId },
      }"
    >
      Nickname: {{ nickname }}
    </router-link>
    <br />
    Post Content: {{ post.content }}
    <button @click="deletePost(post._id)">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    nickname() {
      return this.post._poster.nickname;
    },
    userId() {
      return this.post._poster._id;
    },
  },
  methods: {
    ...mapActions(['deletePost']),
  },
};
</script>
