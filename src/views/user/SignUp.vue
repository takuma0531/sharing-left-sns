<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-item">
        <label for="nickname">Nickname:</label>
        <input type="text" v-model="nickname" name="nickname" autofocus required />
      </div>
      <div class="form-item">
        <label for="email">Email:</label>
        <input type="email" v-model="email" name="email" required />
      </div>
      <div class="form-item">
        <label for="password1">Password:</label>
        <input type="password" v-model="password" name="password" minlength="8" required />
      </div>
      <div class="form-item">
        <label for="password2">Confirm Password:</label>
        <input type="password" v-model="confirmPassword" name="password" minlength="8" required />
      </div>
      <button class="btn">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
