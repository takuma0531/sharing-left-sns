<template>
  <div class="nav-bar">
    <nav>
      <router-link :to="{ path: url }">
        <font-awesome-icon icon="wallet" />
      </router-link>
      <ul v-if="!isAuthenticated">
        <li>
          <router-link to="/user/sign-up">Sign up</router-link>
        </li>
        <li>
          <router-link to="/user/sign-in">Sign in</router-link>
        </li>
      </ul>
      <ul v-if="isAuthenticated">
        <li>
          <button class="btn" @click="logout">Log out</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
    url() {
      return this.isAuthenticated ? "/home" : "/explore";
    }
  },
  methods: {
    ...mapActions({
      logout: "logoutUser"
    })
  }
};
</script>
