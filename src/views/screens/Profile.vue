<template>
  <div class="profile">
    {{ profile }}
    <!-- TODO: protected from others editing -->
    <button>
      Edit Profile
    </button>
    <!-- TODO: create modal to edit -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['profile']),
  },
  methods: {
    ...mapActions(['getProfile', 'editUser']),
  },
  created() {
    this.getProfile(this.$route.query.id);
  },
  mounted() {
  },
};
</script>
