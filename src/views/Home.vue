<template>
  <div class="d-flex flex-column mt-5 mx-lg-5">
    <div class="d-flex flex-row justify-content-between">
      <div class="d-flex flex-column justify-content-start">
        <h1>Hello,</h1>
        <h3 class="mt-2">I am <strong>Owor Yoakim</strong>.</h3>
        <h4 class="mt-4" v-if="summary">{{summary}}</h4>
        <h4 class="mt-3 fst-italic">I solve problems using software. What is yours?</h4>
      </div>
      <div class="img-fluid">
        <img v-if="avatarUrl" :src="avatarUrl" class="img-fluid rounded-circle">
      </div>
    </div>
    <div class="mt-1">
      <h2><u><strong>Top Skills</strong></u></h2>
      <h4 class="fst-italic">
        <strong>Backend:</strong> PHP/Laravel/Lumen, Node.js, C#/.Net Core, Integrations
      </h4>
      <h4 class="fst-italic">
        <strong>Databases:</strong> MySQl, MSSQL Server, PostgreSQL, MongoDB
      </h4>
      <h4 class="fst-italic">
        <strong>Frontend:</strong> JavaScript/Vue.js, Bootstrap, TailwindCSS
      </h4>
      <h4 class="fst-italic">
        <strong>Server:</strong> Nginx, Apache2, Docker, Redis, RabbitMQ, AWS
      </h4>
    </div>
    <div class="mt-4" v-if="email">
      <h4>You can <a :href="`mailto:${email}`">leave me a message</a>, and we will have a chat!</h4>
    </div>
    <div class="mt-1">
      <h4 class="mx-5">OR</h4>
    </div>
    <div class="mt-1">
      <h4>You can also find me on 
        <a href="https://linkedin.com/in/owor-yoakim/" target="_blank">Linkedin</a> and 
        <a href="https://github.com/oworyoakim" target="_blank">Github</a>
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import {useStore} from "vuex";
import {ProfileStoreType} from "@/store/types";

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore<ProfileStoreType>();
    const avatarUrl = computed(() => store.state.avatarUrl);
    const summary = computed(() => store.state.summary);
    const email = computed(() => store.state.email);
    const fetchGithubProfile = async () => {
      await store.dispatch("fetchGithubProfile");
    }

    fetchGithubProfile();
    
    return {
      avatarUrl,
      summary,
      email,
    }
  },
});
</script>
