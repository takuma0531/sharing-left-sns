<template>
  <div class="form-item">
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      required
      v-model="email"
      v-on:keyup="emitToParent"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    emitToParent(e) {
      console.log(e);
      this.$emit('email', this.email);
    },
  },
};
</script>
