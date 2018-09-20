import * as New from '../views/new';
import * as Mobile from '../views/mobile'
import * as Alarm from '../views/alarm'
import * as Korea from '../views/korea'
import * as Test from '../views/test'

export const constantRouterMap = [
    {path:'/',component:New},
    {path:'/mobile', component:Mobile},
    {path:'/alarm', component:Alarm},
    {path:'/korea', component:Korea},
    {path:'/test',component:Test}
];