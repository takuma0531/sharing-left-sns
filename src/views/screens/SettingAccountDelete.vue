<template>
  <div class="setting-account-delete">
    <div class="password-form-container" v-if="!enabledUserDelete">
      <form @submit.prevent="onSubmit">
        <div class="form-item">
          <label for="password">Password</label>
          <input type="password" name="password" required v-model="password" @keydown.enter.prevent />
          <div class="button-field">
            <button-go-back></button-go-back>
            <button class="btn">Delete</button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="enabledUserDelete" class="confirm-delete-account-container">
      <p>Are you sure you want to delete?</p>
      <div class="button-field">
        <button-go-back></button-go-back>
        <button-user-delete></button-user-delete>
      </div>
    </div>
  </div>
</template>

<script>
import { ButtonUserDelete, ButtonGoBack } from "../../components";
import { mapGetters, mapActions } from "vuex";
import { CHECK_PASSWORD } from "../../store/types/actions.type";

export default {
  data() {
    return {
      password: null
    };
  },
  components: {
    ButtonUserDelete,
    ButtonGoBack
  },
  computed: {
    ...mapGetters(["enabledUserDelete"])
  },
  methods: {
    ...mapActions([CHECK_PASSWORD]),
    onSubmit() {
      this.checkPassword({ password: this.password });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
