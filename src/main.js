import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.js";

import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/sci-fi.css";
import "./styles/animations.css";

createApp(App).use(createPinia()).use(router).mount("#app");
