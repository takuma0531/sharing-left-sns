<template>
  <div class="post">
    {{ post }}
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: String,
    }
  }
};
</script>
