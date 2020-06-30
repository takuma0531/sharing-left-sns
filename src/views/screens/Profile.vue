<template>
  <div class="profile">
    <img src="@/assets/blank-profile-picture-973460_640.jpg" style="width: 120px; border-radius: 50%;" />
    {{ profile }}
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="isShowUserEditionModal" @click="showUserEditionModal"></div>
    </transition>

    <modal-user-edition
      :showUserEditionModal="showUserEditionModal"
      :isShowUserEditionModal="isShowUserEditionModal"
    ></modal-user-edition>

    <button @click="showUserEditionModal">Edit Profile</button>
  </div>
</template>
<!-- TODO: protected from others editing -->
<script>
import { ModalUserEdition } from "../../components";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { GET_PROFILE, EDIT_USER } from "../../store/types/actions.type";

export default {
  components: {
    ModalUserEdition
  },
  data() {
    return {
      isShowUserEditionModal: false
    };
  },
  computed: {
    ...mapGetters(["profile"])
  },
  methods: {
    ...mapActions([GET_PROFILE, EDIT_USER]),
    showUserEditionModal() {
      this.isShowUserEditionModal = !this.isShowUserEditionModal;
    }
  },
  created() {
    this.getProfile(this.$route.query.id);
  },
  mounted() {}
};
</script>
