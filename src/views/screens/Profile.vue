<template>
  <div class="profile">
    {{ profile }}
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="isShowUserEditionModal"
        @click="showUserEditionModal"
      ></div>
    </transition>

    <user-edition-modal />

    <button @click="showUserEditionModal">
      Edit Profile
    </button>
  </div>
</template>
<!-- TODO: protected from others editing -->
<script>
import { UserEditionModal } from '../../components';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { SHOW_USER_EDITION_MODAL } from '../../store/types/mutations.type';
import { GET_PROFILE, EDIT_USER } from '../../store/types/actions.type';

export default {
  components: {
    UserEditionModal,
  },
  computed: {
    ...mapGetters(['profile', 'isShowUserEditionModal']),
  },
  methods: {
    ...mapMutations([SHOW_USER_EDITION_MODAL]),
    ...mapActions([GET_PROFILE, EDIT_USER]),
  },
  created() {
    this.getProfile(this.$route.query.id);
  },
  mounted() {},
};
</script>
