<template>
  <div class="form">
    <form @submit.prevent="emitToParent">
      <!-- nickname -->
      <input-nickname-field :nickname="setNickname" />

      <!-- email -->
      <input-email-field :email="setEmail" />

      <!-- password -->
      <input-password-field :password="setPassword" />

      <button class="btn">{{ formType }}</button>
    </form>
  </div>
</template>

<script>
import {
  InputNicknameField,
  InputEmailField,
  InputPasswordField,
} from '../../components';

export default {
  components: {
    InputNicknameField,
    InputEmailField,
    InputPasswordField,
  },
  props: {
    formType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userInfo: {
        nickname: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    emitToParent(e) {
      console.log(e);
      this.$emit('userInfo', this.userInfo);
    },
    setNickname(nickname) {
      this.userInfo.nickname = nickname;
    },
    setEmail(email) {
      this.userInfo.email = email;
    },
    setPassword(password) {
      this.userInfo.password = password;
    },
  },
  mounted() {},
};
</script>
