<template>
  <div class="shortcut">
    <router-link v-if="shortcut.name !== 'comment'" :to="`/${shortcut.name}`">
      <font-awesome-icon v-if="shortcut.icon" :icon="shortcut.icon" />
      <span>
        {{ shortcut.label }}
      </span>
    </router-link>
    <button
      class="comment"
      v-if="shortcut.name === 'comment'"
      @click="showCommentModal"
    >
      {{ shortcut.label }}
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    shortcut: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['showCommentModal']),
  },
};
</script>
