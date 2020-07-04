<template>
  <form-user v-on:userInfo="onSubmit" :formType="formType"></form-user>
</template>

<script>
import { FormUser, Shortcuts } from "../../components";

export default {
  components: {
    FormUser
  },
  data() {
    return {
      formType: "Sign in"
    };
  },
  methods: {
    onSubmit(userInfo) {
      this.$store.dispatch("loginUser", userInfo);
    }
  }
};
</script>
