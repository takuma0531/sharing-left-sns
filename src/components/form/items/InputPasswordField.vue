<template>
  <div class="form-item">
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      required
      v-model="password"
      v-on:keyup="emitToParent"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: null,
    };
  },
  methods: {
    emitToParent(e) {
      this.$emit('password', this.password);
    },
  },
};
</script>
