import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { ArvutidComponent } from './arvutid/arvutid.component';
import { LisamineComponent } from './lisamine/lisamine.component';

export const routes: Routes = [
    {path:"", component: AvalehtComponent},
    {path:"arvutid", component:ArvutidComponent},
    {path:"lisamine", component:LisamineComponent}
];
