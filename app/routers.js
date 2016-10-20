
import Home from './components/home';
import List from './components/list';

export default {
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
};