<template>
  <div class="setting-home">
    <ul>
      <li>
        <span class="title">setting1</span>
        <span class="arrow">&#8594;</span>
      </li>
      <li>
        <span class="title">setting2</span>
        <span class="arrow">&#8594;</span>
      </li>
      <li>
        <span class="title">setting3</span>
        <span class="arrow">&#8594;</span>
      </li>
      <li>
        <span class="title">setting4</span>
        <span class="arrow">&#8594;</span>
      </li>
      <router-link :to="{ path: `${paramsNickname}/account/delete` }" class="title">
        <li>
          Delete Account
          <span class="arrow">&#8594;</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paramsNickname: this.$route.params.nickname
    };
  }
};
</script>
