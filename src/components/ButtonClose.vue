<template>
  <div class="close-btn">
    <button @click="close">
      <font-awesome-icon icon="times" class="img-icon" />
    </button>
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
