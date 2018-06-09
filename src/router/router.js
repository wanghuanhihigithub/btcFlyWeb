import * as Login from '../views/login/';
import * as Search from '../views/search'
export const constantRouterMap = [
    {path:'/',component:Login},//,hidden:true
   {path: '/search', component: Search}
];