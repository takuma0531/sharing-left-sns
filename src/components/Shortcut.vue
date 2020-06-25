<template>
  <div class="shortcut">
    <router-link :to="`/${shortcut.name}`">
      <font-awesome-icon v-if="shortcut.icon" :icon="shortcut.icon" />
      <span :class="{ comment: shortcut.name === 'comment' }">
        {{ shortcut.label }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    shortcut: {
      type: Object,
      required: true,
    },
  },
};
</script>
