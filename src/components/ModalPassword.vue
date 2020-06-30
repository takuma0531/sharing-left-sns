<template>
  <div class="password-modal">
    <div class="password-form-container" v-if="!enabledUserDelete">
      <form-user v-on:userInfo="onSubmit" :formType="formType"></form-user>
    </div>

    <button-user-delete v-if="enabledUserDelete"></button-user-delete>
  </div>
</template>

<script>
import { ButtonUserDelete, FormUser } from "../components";
import { mapGetters, mapActions } from "vuex";
import { CHECK_PASSWORD } from "../store/types/actions.type";

export default {
  data() {
    return {
      formType: "Delete"
    };
  },
  components: {
    ButtonUserDelete,
    FormUser
  },
  computed: {
    ...mapGetters(["enabledUserDelete"])
  },
  methods: {
    ...mapActions([CHECK_PASSWORD]),
    onSubmit({ password }) {
      this.checkPassword({ password: password });
    }
  }
};
</script>
