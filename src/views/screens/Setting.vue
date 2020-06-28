<template>
  <div class="setting">
    <ul>
      <li>setting1</li>
      <li>setting2</li>
      <li>setting3</li>
      <li>setting4</li>
      <li @click="isShow = !isShow">
        Delete Account
      </li>
    </ul>
    <password-modal v-if="isShow" />
  </div>
</template>

<script>
import { PasswordModal } from "../../components";

export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    PasswordModal
  }
};
</script>
