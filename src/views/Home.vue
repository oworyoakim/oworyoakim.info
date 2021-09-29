<template>
  <div class="d-flex flex-column justify-content-between align-items-center mt-5 mx-auto">
    <h2>Hello,</h2>
    <h4>I am <strong>Owor Yoakim</strong>, a Full-Stack Software Engineer!</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: 'Home',
  components: {

  },
  setup() {
    const avatarUrl = ref("");
    const store = useStore();



    return {
      avatarUrl,
    }
  },
});
</script>
