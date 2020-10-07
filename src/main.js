import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faInfoCircle,
  faStar,
  faReply,
  faCheckCircle,
  faBan
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);
library.add(faInfoCircle);
library.add(faStar);
library.add(faReply);
library.add(faCheckCircle);
library.add(faBan);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(require("vue-moment"));

new Vue({
  render: h => h(App)
}).$mount("#app");
