<template>
  <div class="post">
    <router-link
      :to="{
        path: `/profile/${post._poster.nickname}`,
        query: { id: post._poster._id },
      }"
    >
      Nickname: {{ post._poster.nickname }}
    </router-link>
    <br />
    Post Content: {{ post.content }}
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
  methods: {},
};
</script>
