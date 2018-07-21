import * as Nav from '../views/nav/';
import * as Search from '../views/search'
import * as Setting from '../views/setting'
import * as Oken from '../views/oken'
import * as New from '../views/new';
import * as Mobile from '../views/mobile'


export const constantRouterMap = [
    {path:'/',component:New},
    {path: '/search', component: Search},
    {path: '/setting', component: Setting},
    {path:'/oken', component:Oken},
    {path:'/new', component:New},
    {path:'/mobile', component:Mobile}
];