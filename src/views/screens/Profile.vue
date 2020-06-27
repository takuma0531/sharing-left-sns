<template>
  <div class="profile">
    {{ profile }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['profile']),
  },
  methods: {
    ...mapActions(['getProfile']),
  },
  created() {
    this.getProfile(this.$route.query.id);
  },
};
</script>
