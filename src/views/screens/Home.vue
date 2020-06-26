<template>
  <div class="home">
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="isShowCommentModal"
        @click="showCommentModal"
      ></div>
    </transition>

    <comment-modal />
  
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
import { CommentModal, Post, Shortcut } from '../../components';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    CommentModal,
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
    ...mapGetters(['isShowCommentModal']),
    posts() {},
  },
  methods: {
    ...mapMutations(['showCommentModal']),
  },
};
</script>
