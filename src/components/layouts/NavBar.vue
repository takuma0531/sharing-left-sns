<template>
  <div class="nav-bar">
    <nav>
      <router-link to="/">Home</router-link>
      <ul v-if="!isAuthenticated">
        <li>
          <router-link to="/user/sign-up">Sign up</router-link>
        </li>
        <li>
          <router-link to="/user/sign-in">Sign in</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
};
</script>
