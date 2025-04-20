import { defineStore } from "pinia";
import { actions } from "@/qiankun";
let index = 1;
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    token: "",
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
  actions: {
    setUser(data) {
      this.user = data;
    },
    setToken(data) {
      this.token = data;
    },
    // 异步 action
    async fetchUser(data) {
      try {
        const token = `第${index++}个token`;
        this.user = await data;
        this.token = token;
        actions.setGlobalState({ user: this.user, token: token });
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
      }
    },
  },
  persist: true,
});
