<template>
  <div class="form-container">
    <form v-on:userInfo="onSubmit" :formType="formType" />
  </div>
</template>

<script>
import { Form } from '../../components';

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
