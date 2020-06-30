<template>
  <div class="setting">
    <ul>
      <li>setting1</li>
      <li>setting2</li>
      <li>setting3</li>
      <li>setting4</li>
      <li @click="isShow = !isShow">Delete Account</li>
    </ul>
    <modal-password v-if="isShow"></modal-password>
  </div>
</template>

<script>
import { ModalPassword } from "../../components";

export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    ModalPassword
  }
};
</script>
