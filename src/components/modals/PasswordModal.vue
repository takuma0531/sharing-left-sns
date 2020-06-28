<template>
  <div class="password-modal">
    <div class="password-form-container" v-if="!enabledUserDelete">
      <Form v-on:userInfo="onSubmit" :formType="formType" />
    </div>

    <user-delete-button v-if="enabledUserDelete" />
  </div>
</template>

<script>
import { UserDeleteButton, Form } from "../../components";
import { mapGetters, mapActions } from "vuex";
import { CHECK_PASSWORD } from "../../store/types/actions.type";

export default {
  data() {
    return {
      formType: 'Delete'
    };
  },
  components: {
    UserDeleteButton,
    Form
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
