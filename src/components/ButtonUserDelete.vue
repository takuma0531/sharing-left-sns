<template>
  <button @click="deleteAccount" class="user-delete-button">Delete Account</button>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { ENABLE_USER_DELETE } from '../store/types/mutations.type';
import { DELETE_USER } from "../store/types/actions.type";

export default {
  methods: {
    ...mapMutations([ENABLE_USER_DELETE]),
    ...mapActions([DELETE_USER]),
    deleteAccount() {
      this.enableUserDelete();
      this.deleteUser();
    }
  }
};
</script>
