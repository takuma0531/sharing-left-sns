<template>
  <div class="user-edition-modal" v-if="isShowUserEditionModal">
    <transition name="slide" appear>
      <div class="modal">
        <form @submit.prevent @submit="edit">
          <label for="nickname">
            Nickname
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            v-model="userData.nickname"
          />
          <br />
          <label for="Email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="userData.email"
          />
          <input type="submit" value="Share" />
        </form>
    
        <close-button :close="showUserEditionModal" />
      </div>
    </transition>
  </div>
</template>

<script>
import { CloseButton } from '../../components';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { GET_USER, EDIT_USER } from '../../store/types/actions.type';

export default {
  components: {
    CloseButton,
  },
  props: {
    isShowUserEditionModal: {
      type: Boolean,
      required: true,
    },
    showUserEditionModal: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      userData: null,
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    ...mapActions([GET_USER, EDIT_USER]),
    edit() {
      this.editUser(this.userData);
      this.showUserEditionModal();
    },
  },
  async created() {
    await this.getUser();
    this.userData = this.userInfo;
  },
};
</script>
