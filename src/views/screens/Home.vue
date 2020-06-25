<template>
  <div class="home">
    <div class="shortcuts">
      <shortcut
        v-for="(shortcut, index) in shortcuts"
        :key="index"
        :shortcut="shortcut"
      />
    </div>
    <div class="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
import { Post, Shortcut } from '../../components';

export default {
  components: {
    Post,
    Shortcut,
  },
  data() {
    return {
      shortcuts: [
        {
          name: 'home',
          icon: 'home',
          label: 'Home',
        },
        {
          name: 'profile',
          icon: 'user',
          label: 'profile',
        },
        {
          name: 'comment',
          icon: '',
          label: 'Share what you lost',
        },
      ],
    };
  },
  computed: {
    posts() {},
  },
};
</script>
