import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { fas } from '@fortawesome/free-solid-svg-icons' // 一次全部导入
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCartShopping);



//using axios as a global object
window.axios = require('axios')

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
