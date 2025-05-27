import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { KinkekaardidComponent } from './kinkekaardid/kinkekaardid.component';
import { EsindusedComponent } from './esindused/esindused.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeadedComponent } from './seaded/seaded.component';

export const routes: Routes = [
    {path: "", component: AvalehtComponent},
    {path: "ostukorv", component: OstukorvComponent},
    {path: "kinkekaardid", component: KinkekaardidComponent},
    {path: "esindused", component: EsindusedComponent},
    {path: "lisa-toode", component: LisaToodeComponent},
    {path: "seaded", component: SeadedComponent},
    {path: "**", component: NotFoundComponent},
];
