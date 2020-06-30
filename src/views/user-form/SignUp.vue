<template>
  <div class="form-container">
    <form-user v-on:userInfo="onSubmit" :formType="formType"></form-user>
  </div>
</template>

<script>
import { FormUser, Shortcuts } from '../../components';

export default {
  components: {
    FormUser,
  },
  data() {
    return {
      formType: 'Sign up',
    };
  },
  methods: {
    onSubmit(userInfo) {
      this.$store.dispatch('registerUser', userInfo);
    },
  },
  mounted() {
  }
};
</script>
