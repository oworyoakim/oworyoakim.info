import { createStore } from 'vuex'
import {ProfileStoreType} from "@/store/types";

export default createStore<ProfileStoreType>({
  state: {
    avatarUrl: '',
    summary: '',
    email: 'oworyoakim@gmail.com',
  },
  mutations: {
    setAvatarUrl(state: ProfileStoreType, payload: string) {
      state.avatarUrl = payload;
    },
    setSummary(state: ProfileStoreType, payload: string) {
      state.summary = payload;
    },
  },
  actions: {
    fetchGithubProfile({commit}) {
      fetch("https://api.github.com/users/oworyoakim")
          .then((response) => response.json())
          .then((data) => {
            commit("setAvatarUrl", data.avatar_url || '');
            commit("setSummary", data.bio || '');
          })
          .catch((error) => console.log(error))
    },
  },
  modules: {
  }
})
