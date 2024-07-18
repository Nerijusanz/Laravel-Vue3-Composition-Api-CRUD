import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import { createApp } from 'vue/dist/vue.esm-bundler';
import router from './router';


createApp({}).use(router).mount('#app')

