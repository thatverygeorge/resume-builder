import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import './assets/builder.css';
import './assets/resume.css';
import './assets/print.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive('btn-primary', (el) => {
  el.classList.add('button--primary');
});
app.mount('#app');
