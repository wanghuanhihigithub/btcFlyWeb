import * as Nav from '../views/nav/';
import * as Search from '../views/search'
import * as Setting from '../views/setting'
import * as Oken from '../views/oken'
import * as New from '../views/new';


export const constantRouterMap = [
    {path:'/',component:Nav},
    {path: '/search', component: Search},
    {path: '/setting', component: Setting},
    {path:'/oken', component:Oken},
    {path:'/new', component:New}
];