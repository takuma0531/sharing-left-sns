<template>
  <div class="form-container">
    <div class="form">
      <form @submit.prevent="emitToParent">
        <!-- nickname -->
        <form-user-nickname-field
          v-if="isNeededNickname"
          v-on:nickname="setNickname"
          :previousNickname="previousNickname"
        ></form-user-nickname-field>

        <!-- email -->
        <form-user-email-field
          v-if="isNeededEmail"
          v-on:email="setEmail"
          :previousEmail="previousEmail"
        ></form-user-email-field>

        <!-- password -->
        <form-user-password-field v-if="isNeededPassword" v-on:password="setPassword"></form-user-password-field>

        <button class="btn">{{ formType }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  FormUserNicknameField,
  FormUserEmailField,
  FormUserPasswordField
} from "../components";

export default {
  components: {
    FormUserNicknameField,
    FormUserEmailField,
    FormUserPasswordField
  },
  props: {
    userData: {
      type: Object,
      required: false
    },
    formType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      userInfo: {
        nickname: "",
        email: "",
        password: ""
      },
      previousNickname: "",
      previousEmail: ""
    };
  },
  computed: {
    isNeededNickname() {
      if (this.formType === "Sign up") return true;
      if (this.formType === "Change") return true;
      return false;
    },
    isNeededEmail() {
      if (this.formType === "Sign up") return true;
      if (this.formType === "Sign in") return true;
      if (this.formType === "Change") return true;
      return false;
    },
    isNeededPassword() {
      if (this.formType === "Sign up") return true;
      if (this.formType === "Sign in") return true;
      return false;
    }
  },
  methods: {
    emitToParent(e) {
      this.$emit("userInfo", this.userInfo);
    },
    setNickname(nickname) {
      this.userInfo.nickname = nickname;
    },
    setEmail(email) {
      this.userInfo.email = email;
    },
    setPassword(password) {
      this.userInfo.password = password;
    }
  },
  created() {
    if (!this.userData) return;
    this.userInfo = this.userData;
    this.previousNickname = this.userData.nickname;
    this.previousEmail = this.userData.email;
  }
};
</script>
