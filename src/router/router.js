import * as Nav from '../views/nav/';
import * as Search from '../views/search'
import * as Setting from '../views/setting'
import * as Oken from '../views/oken'
import * as New from '../views/new';
import * as Mobile from '../views/mobile'
import * as Alarm from '../views/alarm'
import * as Korea from '../views/korea'

export const constantRouterMap = [
    {path:'/',component:New},
    {path:'/mobile', component:Mobile},
    {path:'/alarm', component:Alarm},
    {path:'/korea', component:Korea}
];