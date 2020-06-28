<template>
  <div class="comment-btn">
    <button @click="close">
      Share what you left
    </button>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      required: true,
    },
  },
};
</script>
