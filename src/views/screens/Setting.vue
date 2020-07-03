<template>
  <div class="setting">
    <router-view></router-view>
  </div>
</template>

<script>
import { SettingHome, SettingAccountDelete } from "../../views";

export default {
  components: {
    SettingHome,
    SettingAccountDelete
  }
};
</script>