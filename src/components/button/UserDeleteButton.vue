<template>
  <div class="user-delete-button">
    <p>Are you sure you want to delete?</p>
    <button @click="deleteUser">Delete Account</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { DELETE_USER } from "../../store/types/actions.type";

export default {
  methods: {
    ...mapActions([DELETE_USER])
  }
};
</script>
