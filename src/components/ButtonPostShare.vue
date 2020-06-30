<template>
  <div class="comment-btn">
    <button @click="show">Share what you left</button>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Function,
      required: true
    }
  }
};
</script>
