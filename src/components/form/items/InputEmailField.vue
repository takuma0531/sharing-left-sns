<template>
  <div class="form-item">
    <label for="email">Email</label>
    <input type="email" name="email" required v-model="email" v-on:keyup="emitToParent" />
  </div>
</template>

<script>
export default {
  props: {
    previousEmail: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      email: null
    };
  },
  methods: {
    emitToParent(e) {
      this.$emit("email", this.email);
    }
  },
  mounted() {
    if (this.previousEmail) this.email = this.previousEmail;
  }
};
</script>
