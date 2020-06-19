<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-item">
        <label for="nickname">Nickname:</label>
        <input type="text" v-model="nickname" name="nickname" />
      </div>
      <div class="form-item">
        <label for="email">Email:</label>
        <input type="text" v-model="email" name="email" />
      </div>
      <div class="form-item">
        <label for="password1">Password:</label>
        <input type="text" v-model="password" name="password" />
      </div>
      <div class="form-item">
        <label for="password2">Confirm Password:</label>
        <input type="text" v-model="confirmPassword" name="password" />
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
