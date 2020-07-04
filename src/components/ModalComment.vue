<template>
  <div class="comment-modal" v-if="isShowCommentModal">
    <transition name="slide" appear>
      <div class="modal">
        <button-close :close="showCommentModal"></button-close>
        <form @submit.prevent @submit="add" enctype="multipart/form-data">
          <textarea
            name="text"
            id="text"
            maxlength="120"
            placeholder="Share what you left..."
            required
            v-model="comment"
          ></textarea>
          <div class="options">
            <div class="btn-file">
              <div class="icon-wrapper">
                <font-awesome-icon icon="image" class="img-icon" />
              </div>
              <input type="file" accept="image/*" @change="onChange($event)" />
            </div>
            <div class="btn-submit-wrapper">
              <input type="submit" value="Share" />
            </div>
          </div>
        </form>
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
  }
};
</script>
