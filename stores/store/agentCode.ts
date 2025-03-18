import { defineStore } from "pinia";

export const useAgentStore = defineStore(
  "agentStore",
  () => {
    const agentCode = ref<string>("");

    return { agentCode };
  },
  {
    persist: {
      storage: localStorage,
      pick: ["agentCode"],
    },
  }
);
