<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-item">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" required />
      </div>
      <div class="form-item">
        <label for="password">Password</label>
        <input type="password" v-model="password" name="password" minlength="4" required />
      </div>
      <button class="btn">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const userInfo = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("loginUser", userInfo);
    }
  }
};
</script>
