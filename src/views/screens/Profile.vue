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

    <user-edition-modal
      :showUserEditionModal="showUserEditionModal"
      :isShowUserEditionModal="isShowUserEditionModal"
    />

    <button @click="showUserEditionModal">
      Edit Profile
    </button>
  </div>
</template>
<!-- TODO: protected from others editing -->
<script>
import { UserEditionModal } from '../../components';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { GET_PROFILE, EDIT_USER } from '../../store/types/actions.type';

export default {
  components: {
    UserEditionModal,
  },
  data() {
    return {
      isShowUserEditionModal: false,
    };
  },
  computed: {
    ...mapGetters(['profile']),
  },
  methods: {
    ...mapActions([GET_PROFILE, EDIT_USER]),
    showUserEditionModal() {
      this.isShowUserEditionModal = !this.isShowUserEditionModal;
    },
  },
  created() {
    this.getProfile(this.$route.query.id);
  },
  mounted() {},
};
</script>
