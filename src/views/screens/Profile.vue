<template>
  <div class="profile">
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="isShowUserEditionModal" @click="showUserEditionModal"></div>
    </transition>
    <modal-user-edition
      :showUserEditionModal="showUserEditionModal"
      :isShowUserEditionModal="isShowUserEditionModal"
    ></modal-user-edition>

    <div class="user-account-info">
      <div class="user-account-info-left">
        <div class="avatar">
          <img
            src="@/assets/blank-profile-picture-973460_640.jpg"
            style="width: 120px; border-radius: 50%;"
          />
        </div>
        <div class="nickname">{{ profileUserNickname }}</div>
      </div>
      <div class="user-account-info-right">
        <button @click="showUserEditionModal" v-if="currentUserId === profileUserId">Edit Profile</button>
      </div>
    </div>

    <div class="posts">
      <post v-for="(post, index) in profileUserPosts" :key="index" :post="post"></post>
    </div>
  </div>
</template>

<script>
import { ModalUserEdition, Post } from "../../components";
import { mapGetters, mapMutations, mapActions } from "vuex";
import {
  GET_PROFILE,
  GET_USER,
  EDIT_USER
} from "../../store/types/actions.type";

export default {
  components: {
    ModalUserEdition,
    Post
  },
  data() {
    return {
      isShowUserEditionModal: false
    };
  },
  computed: {
    ...mapGetters([
      "profile",
      "profileUserId",
      "profileUserNickname",
      "profileUserPosts",
      "currentUserId"
    ])
  },
  methods: {
    ...mapActions([GET_PROFILE]),
    showUserEditionModal() {
      this.isShowUserEditionModal = !this.isShowUserEditionModal;
    }
  },
  async created() {
    await this.getProfile(this.$route.query.id);
  },
  mounted() {}
};
</script>
