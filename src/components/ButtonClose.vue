<template>
  <div class="close-btn">
    <button @click="close">Close</button>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      required: true
    }
  }
};
</script>
