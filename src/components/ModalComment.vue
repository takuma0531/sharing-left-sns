<template>
  <div class="comment-modal" v-if="isShowCommentModal">
    <transition name="slide" appear>
      <div class="modal">
        <form @submit.prevent @submit="add" enctype="multipart/form-data">
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Share what you lost here..."
            v-model="comment"
          />
          <input type="file" id="img" name="img" accept="image/*" @change="onChange($event)" />
          <input type="submit" value="Share" />
        </form>
        <button-close :close="showCommentModal"></button-close>
      </div>
    </transition>
  </div>
</template>

<script>
import { ButtonClose } from "../components";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { SHOW_COMMENT_MODAL } from "../store/types/mutations.type.js";
import { ADD_POST } from "../store/types/actions.type";

export default {
  components: {
    ButtonClose
  },
  data() {
    return {
      comment: null
    };
  },
  computed: {
    ...mapGetters(["isShowCommentModal"])
  },
  methods: {
    ...mapMutations([SHOW_COMMENT_MODAL]),
    ...mapActions(["addPost"]),
    add() {
      this.addPost(this.comment);
      this.showCommentModal();
      this.comment = null;
    },
    onChange(event) {
      console.log(event);
    }
  },
};
</script>
