import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Element from 'element-ui';

import App from './app';
import Home from './components/home';
import List from './components/list';

import store from './store';

Vue
.use(VueRouter)
.use(Element);

const router = new VueRouter({
    mode: 'history',
    routes:[{
        path: '/home',
        component: Home
    },
    {
        path: '/list',
        component: List
    },
    {path: '*', redirect: '/home'}]
});


new Vue({
    router,
    store,
    render: h=>h(App)
}).$mount('#app');
