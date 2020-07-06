<template>
  <div class="user-edition-modal" v-if="isShowUserEditionModal">
    <transition name="slide" appear>
      <div class="modal">
        <button-close :close="showUserEditionModal"></button-close>
        <form-user v-on:userInfo="edit" :userData="userData" :formType="formType"></form-user>
      </div>
    </transition>
  </div>
</template>

<script>
import { FormUser, ButtonClose } from "../components";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { GET_USER, EDIT_USER } from "../store/types/actions.type";

export default {
  components: {
    FormUser,
    ButtonClose
  },
  props: {
    isShowUserEditionModal: {
      type: Boolean,
      required: true
    },
    showUserEditionModal: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      userData: null,
      formType: "Change"
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    ...mapActions([GET_USER, EDIT_USER]),
    edit(userInfo) {
      this.editUser(userInfo);
      this.showUserEditionModal();
    }
  },
  async created() {
    this.userData = this.userInfo;
  }
};
</script>
