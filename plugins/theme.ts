import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const colorMode = useColorMode();
  colorMode.preference = "light";

  if (process.client) {
    localStorage.removeItem("colorMode");
  }
});
