import Vue from "vue";
import App from "./App.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBarCss from "./css/TopBar.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App), 
  TopBarCss
}).$mount("#app");
