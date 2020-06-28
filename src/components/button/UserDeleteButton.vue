<template>
  <div class="user-delete-button">
    <button @click="deleteUser">
      Delete Account
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { DELETE_USER } from '../../store/types/actions.type';

export default {
  methods: {
    ...mapActions([DELETE_USER]),
  },
};
</script>
