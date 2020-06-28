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
