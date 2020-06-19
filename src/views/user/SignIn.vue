<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-item">
        <label for="email">Email</label>
        <input type="text" v-model="email" name="email" />
      </div>
      <div class="form-item">
        <label for="password">Password:</label>
        <input type="text" v-model="password" name="password" />
      </div>
      <button class="btn">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
