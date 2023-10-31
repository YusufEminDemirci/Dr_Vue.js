import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/assets/main.scss";
import "@/assets/colors.scss";
import "@/assets/fade.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCode, faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

library.add(faCode);
library.add(faGithub);
library.add(faMedium);
library.add(faLinkedin);
library.add(faLinkedinIn);
library.add(faStar);
library.add(faCodeFork);
library.add(faCalendarDays);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
