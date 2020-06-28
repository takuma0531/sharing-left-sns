<template>
  <div class="user-edition-modal" v-if="isShowUserEditionModal">
    <transition name="slide" appear>
      <div class="modal">
        <Form v-on:userInfo="edit" :userData="userData" :formType="formType" />
        <close-button :close="showUserEditionModal" />
      </div>
    </transition>
  </div>
</template>

<script>
import { Form, CloseButton } from "../../components";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { GET_USER, EDIT_USER } from "../../store/types/actions.type";

export default {
  components: {
    Form,
    CloseButton,
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
    edit() {
      this.editUser(this.userData);
      this.showUserEditionModal();
    }
  },
  async created() {
    await this.getUser();
    this.userData = this.userInfo;
  }
};
</script>
