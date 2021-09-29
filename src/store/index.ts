import { createStore } from 'vuex'

export default createStore({
  state: {
    avatarUrl: "",
  },
  mutations: {
    setAvatarUrl(state, payload: string) {
      state.avatarUrl = payload;
    },
  },
  actions: {
    fetchGithubProfile({commit}) {
      fetch("https://api.github.com/users/oworyoakim")
          .then((response) => response.json())
          .then((data) => {
            commit("setAvatarUrl", data.avatar_url || '');
          })
          .catch((error) => console.log(error))
    },
  },
  modules: {
  }
})
