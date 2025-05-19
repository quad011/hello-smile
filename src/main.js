import "../public/assets/css/main.scss";

window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

import { createApp } from "vue";
// import { store } from './stores/app'
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
