<template>
  <div class="form-item">
    <label for="nickname">Nickname</label>
    <input
      type="text"
      name="nickname"
      required
      v-model="nickname"
      v-on:keyup="emitToParent"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: null,
    };
  },
  methods: {
    emitToParent(e) {
      this.$emit('nickname', this.nickname);
    },
  },
};
</script>
