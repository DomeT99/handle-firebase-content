import { createApp } from "vue";
import { createPinia } from "pinia";
// Vuetify
import { vuetify } from "./plugins/vuetify";
//Firebase
import { app } from "./firebase/firebase";
//CSS
import "./assets/layout.css";
import "./assets/utils.css";
import App from "./App.vue";
import router from "./router";


createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(app as any)
  .mount("#app");
