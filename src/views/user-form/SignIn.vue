<template>
  <div class="form-container">
    <Form v-on:userInfo="onSubmit" :formType="formType" />
  </div>
</template>

<script>
import { Form, Shortcuts } from '../../components';

export default {
  components: {
    Form,
  },
  data() {
    return {
      formType: 'Sign in',
    };
  },
  methods: {
    onSubmit(userInfo) {
      this.$store.dispatch('loginUser', userInfo);
    },
  },
};
</script>
