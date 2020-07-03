<template>
  <button @click="goBack" class="btn-back">Go Back</button>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { ENABLE_USER_DELETE } from "../store/types/mutations.type";

export default {
  computed: {
    ...mapGetters(["enabledUserDelete"])
  },
  methods: {
    ...mapMutations([ENABLE_USER_DELETE]),
    goBack(e) {
      if (this.enabledUserDelete) this.enableUserDelete();
      this.$router.go(-1);
    }
  }
};
</script>

