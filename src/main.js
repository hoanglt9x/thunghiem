import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/icofont.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponent } from "./utils/import";

const app = createApp(App);
app.use(router);
registerGlobalComponent(app);
app.mount("#app");
