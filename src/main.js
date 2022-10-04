import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';


//using axios as a global object
window.axios = require('axios')

createApp(App).use(router).mount('#app')
