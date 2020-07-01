<template>
  <div id="app">
    <the-nav-bar></the-nav-bar>
    <section class="container">
      <transition name="fade" appear>
        <div class="modal-overlay" v-if="isShowCommentModal" @click="showCommentModal"></div>
      </transition>
      <modal-comment></modal-comment>
      <div class="container-body">
        <the-side-bar></the-side-bar>
        <router-view class="article" />
      </div>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script>
import { TheFooter, TheNavBar, TheSideBar, ModalComment } from "@/components";
import { mapGetters, mapMutations } from "vuex";
import { SHOW_COMMENT_MODAL } from "./store/types/mutations.type.js";

export default {
  components: {
    TheFooter,
    TheNavBar,
    TheSideBar,
    ModalComment
  },
  computed: {
    ...mapGetters(["isShowCommentModal"])
  },
  methods: {
    ...mapMutations([SHOW_COMMENT_MODAL])
  }
};
</script>
