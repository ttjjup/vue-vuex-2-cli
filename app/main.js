import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Element from 'element-ui';

import App from './app';

// vuex
import store from './vuex/store';

// router
import routers from './routers';

Vue
.use(VueRouter)
.use(Element);

const router = new VueRouter(routers);


new Vue({
    router,
    store,
    render: h=>h(App)
}).$mount('#app');
