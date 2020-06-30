<template>
  <div class="form-item">
    <label for="nickname">Nickname</label>
    <input type="text" name="nickname" required v-model="nickname" v-on:keyup="emitToParent" />
  </div>
</template>

<script>
export default {
  props: {
    previousNickname: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      nickname: null
    };
  },
  methods: {
    emitToParent(e) {
      this.$emit("nickname", this.nickname);
    }
  },
  mounted() {
    if (this.previousNickname) this.nickname = this.previousNickname;
  }
};
</script>
